import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
	const heroRef = useRef(null);
	const storyRef = useRef(null);
	const trustRef = useRef(null);

	useEffect(() => {
		// HERO ANIMATION
		gsap.fromTo(
			heroRef.current.querySelectorAll('p, h1'),
			{ opacity: 0, y: 40 },
			{
				opacity: 1,
				y: 0,
				duration: 1,
				stagger: 0.2,
				ease: 'power3.out',
			},
		);

		// STORY TEXT ANIMATION
		gsap.fromTo(
			storyRef.current.querySelectorAll('h2, p, .about-page-slogan'),
			{ opacity: 0, y: 40 },
			{
				opacity: 1,
				y: 0,
				duration: 0.8,
				stagger: 0.15,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: storyRef.current,
					start: 'top 75%',
				},
			},
		);

		// TRUST CARDS ANIMATION
		gsap.fromTo(
			trustRef.current.querySelectorAll('.trust-item'),
			{ opacity: 0, y: 60, scale: 0.95 },
			{
				opacity: 1,
				y: 0,
				scale: 1,
				duration: 0.8,
				stagger: 0.15,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: trustRef.current,
					start: 'top 80%',
				},
			},
		);
	}, []);

	return (
		<main className="about-page">
			<section className="about-hero" ref={heroRef}>
				<div className="about-hero-overlay" />
				<div className="about-hero-content">
					<p className="gold">ABOUT EC 5 STAR TRANSPORTS</p>
					<h1>Family Built. Customer Focused.</h1>
				</div>
			</section>

			<section className="about-story" ref={storyRef}>
				<div className="about-story-container">
					<h2 className="white">Our Story</h2>

					<p>
						At EC 5 Star Transports, we’re more than just a
						transportation company — we’re a family business built
						on hard work, trust, and a leap of faith.
					</p>

					<p>
						My fiancé and I started this journey by investing in our
						own truck and trailers with a dream of building
						something for our future while providing dependable
						transportation services people could truly rely on.
						Operating under another company’s authority allowed us
						to gain valuable experience and build strong
						relationships with customers who trusted our work.
					</p>

					<p>
						Over time, many of those customers began calling us
						directly because they valued our reliability and
						service. That trust inspired us to take the next big
						step and operate under our own authority as EC 5 Star
						Transports.
					</p>

					<p>
						In today’s world, a five-star reputation means
						everything. We work hard every day to earn it through
						reliable service, clear communication, and complete
						transparency with our customers.
					</p>

					<p>
						Along with hotshot and freight transportation, we’ve
						also invested in quality trailers available for rent,
						allowing us to serve customers with a wider range of
						transportation needs.
					</p>

					<p>
						As a family-driven business, we take pride in providing
						safe, timely, and professional service while continuing
						to grow and serve our community.
					</p>

					<div className="about-page-slogan gold">
						Where Every Load Gets Five-Star Care.
					</div>
				</div>
			</section>

			{/* TRUST STRIP */}
			<section className="about-trust" ref={trustRef}>
				<div className="about-trust-container">
					<div className="trust-item">
						<h3>Family-Owned</h3>
						<p>Built on relationships, not volume.</p>
					</div>

					<div className="trust-item">
						<h3>Reliable Service</h3>
						<p>Safe, on-time delivery you can count on.</p>
					</div>

					<div className="trust-item">
						<h3>Professional Equipment</h3>
						<p>Modern trucks and quality trailers.</p>
					</div>

					<div className="trust-item">
						<h3>Clear Communication</h3>
						<p>Transparency from pickup to delivery.</p>
					</div>
				</div>
			</section>
		</main>
	);
};

export default About;
