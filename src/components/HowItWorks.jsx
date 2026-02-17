import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
	const sectionRef = useRef(null);
	const imageRef = useRef([]);
	const stepsRef = useRef([]);
	const iconsRef = useRef([]);
	const linesRef = useRef([]);

	const stepImages = [
		'/images/truck.jpg',
		'/images/Transport.jpg',
		'/images/delivery.jpg',
	];

	useGSAP(() => {
		const images = imageRef.current;
		const steps = stepsRef.current;
		const icons = iconsRef.current;
		const lines = linesRef.current;

		gsap.set(sectionRef.current, { autoAlpha: 0 }); 
		gsap.set(images, { autoAlpha: 0, scale: 0.95 });
		gsap.set(steps, { autoAlpha: 0, y: 30 });
		gsap.set(lines, { scaleX: 0, transformOrigin: 'left center' });
		gsap.set(icons, { scale: 1, color: '#AEAEAE', borderColor: '#AEAEAE' });

		gsap.set(images[0], { autoAlpha: 1, scale: 1 });
		gsap.set(steps[0], { autoAlpha: 1, y: 0 });
		gsap.set(icons[0], {
			scale: 1.15,
			color: '#F4BA1D',
			borderColor: '#F4BA1D',
		});

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: sectionRef.current,
				start: 'top top',
				end: '+=300%',
				scrub: true,
				pin: true,
				anticipatePin: 1,
			},
		});

		tl.to(sectionRef.current, { autoAlpha: 1, duration: 0.8 }, 0); 
		tl.fromTo(
			steps[0],
			{ autoAlpha: 0, y: 20 },
			{ autoAlpha: 1, y: 0, duration: 0.5 },
			0.2, 
		);

		
		stepImages.forEach((_, i) => {
			if (i === 0) return;
			const prev = i - 1;

			tl.to(images[prev], { autoAlpha: 0, scale: 0.97 }, i)
				.fromTo(
					images[i],
					{ autoAlpha: 0, scale: 1.05 },
					{ autoAlpha: 1, scale: 1 },
					i,
				)
				.to(steps[prev], { autoAlpha: 0, y: -20 }, i)
				.fromTo(
					steps[i],
					{ autoAlpha: 0, y: 20 },
					{ autoAlpha: 1, y: 0 },
					i,
				)
				.to(lines[prev], { scaleX: 1 }, i)
				.to(
					icons[i],
					{ scale: 1.12, color: '#F4BA1D', borderColor: '#F4BA1D' },
					i,
				);
		});
	}, []);


	return (
		<section id="howItWorks" ref={sectionRef}>
			<div className="container">
				<div className="how__container">
					<div className="img__container">
						{stepImages.map((src, idx) => (
							<img
								key={idx}
								src={src}
								alt="Step"
								ref={(el) => (imageRef.current[idx] = el)}
								className="step-image"
								style={{ willChange: 'transform, opacity' }}
							/>
						))}
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
									text: 'We carefully collect your vehicle from your home or dealership.',
								},
								{
									title: 'Transport',
									text: 'Your vehicle is safely transported by professional drivers.',
								},
								{
									title: 'Delivery',
									text: 'We deliver your vehicle on time and in perfect condition.',
								},
							].map((step, idx) => (
								<div
									key={idx}
									className="step"
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
