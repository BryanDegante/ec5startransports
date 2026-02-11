import React from 'react';
import Nav from './Nav';
import GradiantButton from './ui/GradiantButton';
import ContactButton from './ui/ContactButton';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import gsap from 'gsap';
gsap.registerPlugin(useGSAP, SplitText);

const Landing = () => {
	useGSAP(() => {
		const LandingAnimation = gsap.timeline();

		LandingAnimation.from('nav', {
			y: -100,
			autoAlpha: 0,
		})

			.from('.landing__container', {
				x: -100,
				ease: 'power3.inOut',
				autoAlpha: 0,
				duration: 1,
			})
			.from('.icon__animation', {
				stagger: 0.05,
				x: 100,
				ease: 'power3.inOut',
				autoAlpha: 0,
				duration: 1,
			},)

		

		SplitText.create('.split', {
			type: 'words, chars',
			onSplit(self) {
				gsap.from(self.chars, {
					duration: 1,
					x: 100,
					ease: 'power2.inOut',
					autoAlpha: 0,
					stagger: 0.03,
				});
			},
		});
		SplitText.create('.split2', {
			type: 'words',
			onSplit(self) {
				gsap.from(self.words, {
					duration: 1,
					x: 100,
					ease: 'power2.inOut',
					autoAlpha: 0,
					stagger: 0.05,
				});
			},
		});
	}, []);
	return (
		<section id="landing">
			<Nav />
			<div className="container">
				<div className="landing__container">
					<h1 className="white split">
						5-Star Vehicle Transport You Can Trust
					</h1>
					<p className="landing__para regular light-grey split2">
						EC 5 Star Transport provides safe, insured, and reliable
						vehicle transport across Texas and nationwide. From
						daily drivers to specialty vehicles, we deliver with
						care.
					</p>
					<div className="landing__buttons">
						<GradiantButton
							type="fill regular "
							text="Get a Quote"
						/>
						<ContactButton  />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Landing;
