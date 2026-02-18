import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
	const sectionRef = useRef(null);
	const imageRef = useRef(null);
	const textRef = useRef(null);
	const bulletsRef = useRef([]);
	const buttonRef = useRef(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			// image slide in
			gsap.from(imageRef.current, {
				x: -80,
				opacity: 0,
				duration: 1,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: sectionRef.current,
					start: 'top 75%',
				},
			});

			// text fade up
			gsap.from(textRef.current, {
				y: 60,
				opacity: 0,
				duration: 1,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: sectionRef.current,
					start: 'top 75%',
				},
			});

			// bullets stagger
			gsap.from(bulletsRef.current, {
				y: 30,
				opacity: 0,
				duration: 0.6,
				stagger: 0.15,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: sectionRef.current,
					start: 'top 70%',
				},
			});

			// luxury button reveal
			gsap.from(buttonRef.current, {
				y: 20,
				opacity: 0,
				duration: 0.8,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: buttonRef.current,
					start: 'top 85%',
				},
			});
		});

		return () => ctx.revert();
	}, []);

	return (
		<section className="about" ref={sectionRef}>
			<div className="about-container">
				{/* LEFT IMAGE */}
				<div className="about-image" ref={imageRef}>
					<img
						src="/images/denali-grass.jpg"
						alt="EC 5 Star Transports truck and trailer"
					/>
				</div>

				{/* RIGHT CONTENT */}
				<div className="about-content" ref={textRef}>
					<p className="about-eyebrow gold">ABOUT OUR COMPANY</p>

					<h2 className="about-title white">
						Built on Trust. Driven by Family.
					</h2>

					<p className="about-text">
						At EC 5 Star Transports, we’re more than a
						transportation company — we’re a family-driven business
						built on hard work, trust, and a commitment to
						dependable vehicle transport. What started as an
						investment in our own truck and trailers quickly grew
						into lasting relationships with customers who value
						reliability and clear communication.
					</p>

					{/* TRUST BULLETS */}
					<div className="about-bullets">
						{[
							'Family-Owned & Operated',
							'Reliable & On-Time Delivery',
							'Clear Communication Every Step',
							'Professional-Grade Equipment',
						].map((item, index) => (
							<div
								className="about-bullet"
								key={index}
								ref={(el) => (bulletsRef.current[index] = el)}
							>
								✓ {item}
							</div>
						))}
					</div>

					{/* SLOGAN */}
					<div className="about-slogan gold">
						Where Every Load Gets Five-Star Care.
					</div>

					{/* 🔥 LUXURY BUTTON */}
					<a
						href="/about"
						className="about-luxury-btn"
						ref={buttonRef}
					>
						Learn Our Story
					</a>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
