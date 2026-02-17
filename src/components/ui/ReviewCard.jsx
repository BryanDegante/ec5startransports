import React, { forwardRef } from 'react';

const ReviewCard = forwardRef(({ name, location, review, rating = 5 }, ref) => {
	return (
		<div className="review-card" ref={ref}>
			<div className="review-stars">{'★'.repeat(rating)}</div>

			<p className="review-text">“{review}”</p>

			<div className="review-author">
				<span className="review-name">{name}</span>
				<span className="review-location">{location}</span>
			</div>
		</div>
	);
});

export default ReviewCard;
