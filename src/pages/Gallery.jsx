import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { galleryData } from '../data/gallery';
import GalleryCard from '../components/ui/GalleryCard';
import { gsap } from 'gsap';

const Gallery = () => {
	const [filter, setFilter] = useState('All');
	const [modal, setModal] = useState({ isOpen: false, src: '', title: '' });
	const cardsRef = useRef([]);

	const filteredData =
		filter === 'All'
			? galleryData
			: galleryData.filter((item) => item.type === filter);

	const animateCardsIn = (elements) => {
		gsap.fromTo(
			elements,
			{ opacity: 0, y: 20 },
			{
				opacity: 1,
				y: 0,
				stagger: 0.05,
				duration: 0.35,
				ease: 'power2.out',
			},
		);
	};


	useLayoutEffect(() => {
		if (!cardsRef.current || filteredData.length === 0) return;

		cardsRef.current = cardsRef.current.slice(0, filteredData.length);

		animateCardsIn(cardsRef.current);
	}, [filteredData.length]); 

	const handleFilterChange = (type) => {
		if (filter === type) return;

		const tl = gsap.timeline({
			onComplete: () => setFilter(type),
		});

		tl.to(cardsRef.current, {
			opacity: 0,
			y: -10,
			stagger: 0.03,
			duration: 0.2,
			ease: 'power2.in',
		})
	};

	const openModal = (src, title) => {
		setModal({ isOpen: true, src, title });
		gsap.fromTo(
			'.modal-content',
			{ scale: 0.5, opacity: 0 },
			{ scale: 1, opacity: 1, duration: 0.5, ease: 'power2.out' },
		);
	};

	const closeModal = () => {
		gsap.to('.modal-content', {
			scale: 0.5,
			opacity: 0,
			duration: 0.4,
			ease: 'power2.in',
			onComplete: () => setModal({ isOpen: false, src: '', title: '' }),
		});
	};

	return (
		<section id="GalleryPage">
			<div className="filter__button--container">
				{['All', 'Cars', 'Fleet', 'Special'].map((type) => (
					<button
						type="button"
						key={type}
						className="btn-filter"
						onClick={() => handleFilterChange(type)}
					>
						{type}
					</button>
				))}
			</div>

			<div className="container">
				<div className="row">
					<h2 className="white">{filter}</h2>
					<div className="gallery__cards">
						{filteredData.map((item, index) => (
							<GalleryCard
								key={item.id}
								src={item.src}
								title={item.title}
								onClick={() => openModal(item.src, item.title)}
								ref={(el) => (cardsRef.current[index] = el)}
							/>
						))}
					</div>
				</div>
			</div>

			{modal.isOpen && (
				<div className="modal-overlay" onClick={closeModal}>
					<div
						className="modal-content"
						onClick={(e) => e.stopPropagation()}
					>
						<img src={modal.src} alt={modal.title} />
						<h3>{modal.title}</h3>
						<button
							type="button"
							className="close-btn"
							onClick={closeModal}
						>
							×
						</button>
					</div>
				</div>
			)}
		</section>
	);
};

export default Gallery;
