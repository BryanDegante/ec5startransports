import React from 'react';

const GalleryCard = React.forwardRef(({ src, title, onClick }, ref) => {
	return (
		<div className="gallery-card" ref={ref} onClick={onClick}>
			<div className="gallery-image-wrapper">
				<img src={src} className="gallery-image" alt={title} />
				<div className="gallery-overlay" />
			</div>

			<div className="gallery-content">
				<h3 className="gallery-title">{title}</h3>
			</div>
		</div>
	);
});

export default GalleryCard;
