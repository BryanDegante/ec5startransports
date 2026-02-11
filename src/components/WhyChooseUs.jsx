import React from 'react';
import Reason from './ui/Reason';
import { useGSAP } from '@gsap/react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedTitle from './ui/AnimatedTitle';

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
	useGSAP(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '#whyChooseUs',
				start: 'top 80%',
				once: true,
			},
		});

		tl.from('.statement__title', {
			y: 24,
			opacity: 0,
			duration: 0.4,
			ease: 'power3.out',
		})
			.from(
				'.statements h3',
				{
					y: 24,
					opacity: 0,
					duration: 0.45,
					ease: 'power3.out',
				},
				'-=0.2',
			)
			.from(
				'.statements p',
				{
					y: 16,
					opacity: 0,
					duration: 0.35,
					ease: 'power2.out',
				},
				'-=0.25',
			);

		tl.from(
			'.reason',
			{
				x: 40,
				opacity: 0,
				duration: 0.45,
				stagger: 0.12,
				ease: 'power3.out',
			},
			'-=0.1',
		);

		tl.from(
			'.reason__icon',
			{
				scale: 0.85,
				opacity: 0,
				duration: 0.3,
				stagger: 0.12,
				ease: 'back.out(1.4)',
				transformOrigin: '50% 50%',
				clearProps: 'transform',
			},
			'-=0.35',
		);
	}, []);

	

	const splitText = (text) => {
		return text.split('').map((char, i) => (
			<span key={i} className="letter">
				{char}
			</span>
		));
	};

	return (
		<section id="whyChooseUs" className="bg-white">
			<div className="container">
				<div className="row">
					<div className="chooseUs__container">
						<div className="statements">
							<AnimatedTitle text="WHY CHOOSE US" />
							<h3>
								We deliver vehicles safely and on time — giving
								our customers peace of mind.
							</h3>
							<p className="regular light-grey">
								100% Insured Shipments
							</p>
						</div>
						<div className="reasons">
							<Reason
								title="Realiable & On-Time Delivery"
								text="We understand vehicles are valuable assets, so we prioritize safe and timely delivery."
								icon="delivery"
							/>
							<Reason
								title="Competitive & Transparent Pricing"
								text="Fair, upfront rates with no hidden fees — what you see is what you pay."
								icon="money"
							/>
							<Reason
								title="Certified & Insured Transport"
								text="Peace of mind knowing your vehicle is fully covered during transport."
								icon="shield"
							/>
							<Reason
								title="Experienced Drivers & Professional Service"
								text="Skilled drivers handle every car, truck, or motorcycle with care."
								icon="wheel"
							/>
							<Reason
								title="Door-to-Door Convenience"
								text="We pick up and deliver your vehicle directly to your desired location."
								icon="map"
							/>
							<Reason
								title="Excellent Customer Support"
								text="Friendly, responsive assistance and real-time updates every step of the way."
								icon="mic"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhyChooseUs;
