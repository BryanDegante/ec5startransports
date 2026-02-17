import React, { useRef } from 'react';
import GalleryCard from './ui/GalleryCard';

export default function HomeGallery() {
	const sectionRef = useRef(null);

	const featured = [
		{
			src: '/images/multi-vehicle.jpg',
			title: 'Multi-Vehicle Transport',
		},
		{
			src: '/images/fleet.jpg',
			title: 'Fleet Transport',
		},
		{
			src: '/images/pickup.png',
			title: 'Pickup Truck Delivery',
		},
	];

	const handleCardClick = () => {
		window.location.href = '/gallery';
	};

	return (
		<section className="home-gallery bg-white" ref={sectionRef}>
			<div className="home-gallery-container">
				<div className="home-gallery-header">
					<p className="home-gallery-eyebrow gold">ON THE ROAD</p>
					<h2 className="black">Recent Transports</h2>
				</div>

				<div className="gallery-grid">
					{featured.map((item, index) => (
						<GalleryCard
							key={index}
							src={item.src}
							title={item.title}
							onClick={handleCardClick}
						/>
					))}
				</div>

				<div className="home-gallery-cta">
					<a href="/Gallery" className="view-gallery-btn">
						View Full Gallery →
					</a>
				</div>
			</div>
		</section>
	);
}
