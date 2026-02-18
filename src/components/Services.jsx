import React from 'react';
import Icon from './ui/Icon';
import ServiceCard from './ui/ServiceCard';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

const Services = () => {
	useGSAP(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '#services',
				start: 'top 80%',
				once: true,
			},
		});
		tl.from('.section__title', {
			y: 20,
			opacity: 0,
			duration: 0.35,
			ease: 'power3.out',
		})
			.from(
				'.services__title',
				{
					y: 30,
					opacity: 0,
					duration: 0.45,
					ease: 'power3.out',
				},
				'-=0.15',
			)
			.from(
				'#services h3',
				{
					y: 20,
					opacity: 0,
					duration: 0.35,
					ease: 'power2.out',
				},
				'-=0.2',
			)

			.from(
				'.service__card',
				{
					filter: 'blur(6px)',
					opacity: 0,
					duration: 0.4,
					stagger: 0.15,
					ease: 'power2.out',
				},
				'-=0.1',
			)

			.from(
				'.service-icon',
				{
					scale: 0,
					opacity: 0,
					duration: 0.45,
					stagger: 0.15,
					ease: 'back.out(1.6)',
					transformOrigin: '50% 50%',
					force3D: true,
					clearProps: 'transform', 
				},
				'0',
			)
			.from(
				'.service-text',
				{
					y: 24,
					opacity: 0,
					duration: 0.45,
					stagger: 0.15,
					ease: 'power3.out',
				},
				'0',
			);
	}, []);

	return (
		<section id="services" className="bg-white">
			<div className="container ">
				<div className="row">
					<div className="section__headers--center">
						<p className="section__title">
							<span className="gold">SERVICES</span>
						</p>
						<h2 className="services__title">
							Expert Transport for{' '}
							<span className="gold">Every</span> Vehicle
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
						<ServiceCard
							title="Freight & Heavy Transport"
							text="Secure and reliable shipping for heavy equipment, cargo, and oversized loads."
							icon="freight"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
