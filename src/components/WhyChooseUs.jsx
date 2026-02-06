import React from 'react'
import Reason from './ui/Reason';

const WhyChooseUs = () => {
  return (
		<section id="whyChooseUs" className="bg-white">
			<div className="container">
				<div className="row">
					<div className="chooseUs__container">
						<div className="statements">
							<h2 className="statement__title">WHY CHOOSE US</h2>
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
}

export default WhyChooseUs