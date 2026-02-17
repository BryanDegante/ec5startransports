import React, { useEffect, useRef } from 'react';
import ReviewCard from './ui/ReviewCard';
import { ReviewsData } from '../data/reviews';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Reviews = () => {
	const sectionRef = useRef(null);
	const gridRef = useRef(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			// Animate whole section fade in
			gsap.fromTo(
				sectionRef.current,
				{ opacity: 0, y: 60 },
				{
					opacity: 1,
					y: 0,
					duration: 1,
					ease: 'power3.out',
					scrollTrigger: {
						trigger: sectionRef.current,
						start: 'top 85%',
						toggleActions: 'play none none none',
					},
				},
			);

			// Animate review cards staggered
			if (gridRef.current) {
				const cards = Array.from(gridRef.current.children); // safer than HTMLCollection
				gsap.fromTo(
					cards,
					{ opacity: 0, y: 20 },
					{
						opacity: 1,
						y: 0,
						duration: 0.8,
						stagger: 0.2,
						ease: 'power3.out',
						scrollTrigger: {
							trigger: sectionRef.current,
							start: 'top 80%',
							toggleActions: 'play none none none',
						},
					},
				);
			}
		}, sectionRef); // scope

		return () => ctx.revert();
	}, []);

	return (
		<section className="reviews" ref={sectionRef}>
			<div className="reviews-container">
				<div className="reviews-header">
					<p className="reviews-eyebrow gold">CLIENT FEEDBACK</p>
					<h2 className="white">What Our Clients Say</h2>
				</div>

				<div className="reviews-grid" ref={gridRef}>
					{ReviewsData.map((item, index) => (
						<ReviewCard key={index} {...item} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Reviews;
