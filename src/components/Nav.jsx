import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';
import { FaInstagram, FaTiktok, FaSnapchat, FaFacebook } from 'react-icons/fa';

const Nav = () => {
	useGSAP(() => {
		const NavAnimation = gsap.timeline();
		NavAnimation.from('nav', {
			y: -100,
			autoAlpha: 0,
		})

			.from('.icon__animation', {
				stagger: 0.05,
				x: 100,
				ease: 'power3.inOut',
				autoAlpha: 0,
				duration: 1,
			});
	});
	return (
		<nav>
			<div className="nav__container">
				<div className="logo__container">
					<figure className="nav__logo">
						<img src="/logo.png" alt="" />
					</figure>
					<p className="nav__text white split">
						EC 5 Star Transports
					</p>
				</div>
				<ul className="social__list">
					<li className="icon__animation">
						<a
							href="/"
							className="nav__text white page__link link__hover--effect"
						>
							Home
						</a>
					</li>
					<li className="icon__animation">
						<a
							href="/Gallery"
							className="nav__text white page__link link__hover--effect"
						>
							Gallery
						</a>
					</li>
					<li className="icon__animation">
						<a href="" className="social__link insta white">
							<FaInstagram />
						</a>
					</li>
					<li className="icon__animation">
						<a href="" className="social__link tiktok white">
							<FaTiktok />
						</a>
					</li>
					<li className="icon__animation">
						<a href="" className="social__link snap white">
							<FaSnapchat />
						</a>
					</li>
					<li className="icon__animation">
						<a href="" className="social__link facebook white">
							<FaFacebook />
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Nav;
