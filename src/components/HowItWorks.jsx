import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
	const sectionRef = useRef(null);
	const imageRef = useRef(null);
	const stepsRef = useRef([]);
	const iconsRef = useRef([]);
	const linesRef = useRef([]);

	useGSAP(() => {
		const steps = stepsRef.current;
		const icons = iconsRef.current;
		const lines = linesRef.current;
		const image = imageRef.current;

		// Initial states
		gsap.set(steps, { opacity: 0, y: 20 });
		gsap.set(image, { opacity: 0, scale: 0.95 });
		lines.forEach((line) => gsap.set(line, { scaleX: 0 }));
		icons.forEach((icon) =>
			gsap.set(icon, {
				scale: 0.8,
				opacity: 0,
				color: '#AEAEAE',
				borderColor: '#AEAEAE',
			}),
		);

		// Smooth entrance for image + icons
		gsap.fromTo(
			[image, ...icons],
			{ opacity: 0, scale: 0.95 },
			{
				opacity: 1,
				scale: 1,
				duration: 1,
				ease: 'power2.out',
				stagger: 0.15,
				scrollTrigger: {
					trigger: sectionRef.current,
					start: 'top 80%', // triggers just as section enters viewport
					toggleActions: 'play none none reverse',
				},
			},
		);

		// ScrollTrigger for steps, icons, lines with pin
		ScrollTrigger.create({
			trigger: sectionRef.current,
			start: 'top top',
			end: '+=300%',
			scrub: true,
			pin: true,
			onUpdate: (self) => {
				const progress = self.progress;

				// Hide everything if above section
				if (self.scroll() < self.start) {
					steps.forEach((step) =>
						gsap.set(step, { opacity: 0, y: 20 }),
					);
					icons.forEach((icon) =>
						gsap.set(icon, {
							scale: 0.8,
							color: '#AEAEAE',
							borderColor: '#AEAEAE',
						}),
					);
					lines.forEach((line) => gsap.set(line, { scaleX: 0 }));
					return;
				}

				// Reset everything if past section
				if (self.scroll() > self.end) {
					steps.forEach((step) =>
						gsap.set(step, { opacity: 0, y: 20 }),
					);
					icons.forEach((icon) =>
						gsap.set(icon, {
							scale: 1,
							color: '#AEAEAE',
							borderColor: '#AEAEAE',
						}),
					);
					lines.forEach((line) => gsap.set(line, { scaleX: 1 }));
					return;
				}

				// Calculate current step inside section
				const currentStep = Math.floor(progress * steps.length);

				// Animate step texts
				steps.forEach((step, i) => {
					if (i === currentStep) {
						gsap.to(step, {
							opacity: 1,
							y: 0,
							duration: 0.3,
							ease: 'power2.out',
						});
					} else {
						gsap.to(step, {
							opacity: 0,
							y: -20,
							duration: 0.3,
							ease: 'power2.out',
						});
					}
				});

				// Animate icons
				icons.forEach((icon, i) => {
					if (i === currentStep) {
						gsap.to(icon, {
							scale: 1.15,
							color: 'gold',
							borderColor: 'gold',
							duration: 0.3,
						});
						icon.classList.add('gold');
					} else {
						gsap.to(icon, {
							scale: 1,
							color: '#AEAEAE',
							borderColor: '#AEAEAE',
							duration: 0.3,
						});
						icon.classList.remove('gold');
					}
				});

				// Animate lines
				lines.forEach((line, idx) => {
					if (idx < currentStep) {
						gsap.to(line, { scaleX: 1, duration: 0.3 });
					} else {
						gsap.to(line, { scaleX: 0, duration: 0.3 });
					}
				});
			},
		});
	}, []);

	return (
		<section id="howItWorks" ref={sectionRef} className="bg-black">
			<div className="container">
				<div className="how__container">
					{/* Image */}
					<div className="img__container">
						<img
							ref={imageRef}
							src="/truck.jpg"
							alt="Truck pickup"
						/>
					</div>

					{/* Steps */}
					<div className="steps">
						{/* Step Icons */}
						<div className="step__icons">
							{[1, 2, 3].map((num, idx) => (
								<React.Fragment key={idx}>
									<div
										className="step__icon"
										ref={(el) =>
											(iconsRef.current[idx] = el)
										}
									>
										<span>{num}</span>
									</div>
									{idx < 2 && (
										<div
											className="line"
											ref={(el) =>
												(linesRef.current[idx] = el)
											}
										/>
									)}
								</React.Fragment>
							))}
						</div>

						<div className="step__container">
							{/* Step Texts */}
							{[
								{
									title: 'Pickup',
									text: 'We carefully collect your vehicle from your home, dealership, or business.',
								},
								{
									title: 'Transport',
									text: 'Your vehicle is safely transported using insured, professional carriers.',
								},
								{
									title: 'Delivery',
									text: 'We deliver your vehicle on time and in perfect condition.',
								},
							].map((step, idx) => (
								<div
									className="step"
									key={idx}
									ref={(el) => (stepsRef.current[idx] = el)}
								>
									<h2 className="white">{step.title}</h2>
									<p className="regular light-grey">
										{step.text}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;
