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
	const currentStepRef = useRef(0); // Track current step

	const stepImages = ['/truck.jpg', '/Transport.jpg', '/delivery.jpg'];

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
					start: 'top 80%',
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
				const newStep = Math.min(
					Math.floor(progress * steps.length),
					steps.length - 1,
				);

				// Only update if step changed
				if (newStep !== currentStepRef.current) {
					currentStepRef.current = newStep;

					// Animate step texts
					steps.forEach((step, i) => {
						if (i === newStep) {
							gsap.to(step, { opacity: 1, y: 0, duration: 0.4 });
						} else {
							gsap.to(step, {
								opacity: 0,
								y: -20,
								duration: 0.4,
							});
						}
					});

					// Animate icons
					icons.forEach((icon, i) => {
						if (i === newStep) {
							gsap.to(icon, {
								scale: 1.15,
								color: 'gold',
								borderColor: 'gold',
								duration: 0.4,
							});
							icon.classList.add('gold');
						} else {
							gsap.to(icon, {
								scale: 1,
								color: '#AEAEAE',
								borderColor: '#AEAEAE',
								duration: 0.4,
							});
							icon.classList.remove('gold');
						}
					});

					// Animate lines
					lines.forEach((line, idx) => {
						if (idx < newStep) {
							gsap.to(line, { scaleX: 1, duration: 0.4 });
						} else {
							gsap.to(line, { scaleX: 0, duration: 0.4 });
						}
					});

					// Animate image with smooth fade
					if (image) {
						gsap.to(image, {
							opacity: 0,
							scale: 0.95,
							duration: 0.3,
							onComplete: () => {
								image.src = stepImages[newStep];
								gsap.to(image, {
									opacity: 1,
									scale: 1,
									duration: 0.4,
								});
							},
						});
					}
				}
			},
		});
	}, []);

	return (
		<section id="howItWorks" ref={sectionRef} className="bg-black">
			<div className="container">
				<div className="how__container">
					<div className="img__container">
						<img
							ref={imageRef}
							src={stepImages[0]}
							alt="Step image"
						/>
					</div>
					<div className="steps">
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
							{[
								{
									title: 'Pickup',
									text: 'We carefully collect your vehicle from your home, dealership, or business.',
								},
								{
									title: 'Transport',
									text: 'Your vehicle is safely transported using insured, professional drivers.',
								},
								{
									title: 'Delivery',
									text: 'We deliver your vehicle on time and in perfect condition no matter the weather.',
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
