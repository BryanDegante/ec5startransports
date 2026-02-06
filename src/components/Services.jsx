import React from 'react';
import Icon from './ui/Icon';
import ServiceCard from './ui/ServiceCard';

const Services = () => {
	return (
		<section id="services" className='bg-white'>
			<div className="container ">
				<div className="row">
					<div class="section__headers--center">
						<p class="section__title">
							<span class="gold">FEATURES</span>
						</p>
						<h2 className="services__title">
							Expert Transport for <span class="gold">Every</span>{' '}
							Vehicle
						</h2>
						<h3 className="light-grey">
							Choose the right transport for your vehicle — we
							make shipping simple, secure, and stress-free
						</h3>
					</div>
					<div className="services__container">
						<ServiceCard
							title="Standard Vehicles"
							text="Sedans,SUVs, and pickup trucks,transported safely and efficiently"
							icon="sedan"
						/>
						<ServiceCard
							title="Luxury & Exotic Cars"
							text="High-end vehicles handled with specialized care and equipment."
							icon="luxury"
						/>
						<ServiceCard
							title="Classic & Collector Cars"
							text="Precision transport for classic and collectible automobiles."
							icon="classic"
						/>
						<ServiceCard
							title="Dealership Transport"
							text="Reliable solutions for dealerships and auto businesses."
							icon="skyline"
						/>
						<ServiceCard
							title="Fleet Vehicles"
							text=" Corporate and commercial fleets moved efficiently, keeping your business on schedule."
							icon="cargo"
						/>
						<ServiceCard
							title="Specialty Vehicles"
							text="Motorcycles, RVs, and other unique vehicles handled safely from start to finish."
							icon="motorcycle"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
