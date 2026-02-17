import React, { useRef } from 'react';
import GradiantButton from './ui/GradiantButton';
import ContactButton from './ui/ContactButton';

export default function FinalCTA() {
	const ctaRef = useRef(null);

	return (
		<section className="home-cta bg-black" ref={ctaRef}>
			<div className="home-cta-container">
				<p className="home-cta-eyebrow gold">
					SAFE. SECURE. ON SCHEDULE.
				</p>

				<h2 className="home-cta-title white">
					Ship Your Vehicle With Confidence
				</h2>

				<p className="home-cta-subtitle light-grey">
					Reliable nationwide auto transport backed by professional
					carriers and full insurance coverage — with transparent
					pricing every step of the way.
				</p>

				<div className="home-cta-buttons">
					<GradiantButton
						type="fill regular"
						text="Get My Free Quote"
					/>
					<ContactButton />
				</div>
			</div>
		</section>
	);
}
