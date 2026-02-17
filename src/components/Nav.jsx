import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useState, useRef } from 'react';
import {
	FaInstagram,
	FaTiktok,
	FaSnapchat,
	FaFacebook,
	FaBars,
	FaTimes,
} from 'react-icons/fa';

const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isClosing, setIsClosing] = useState(false);
	const modalRef = useRef(null);
	const overlayRef = useRef(null);

	// Desktop nav animation
	useGSAP(() => {

	
		const tl = gsap.timeline();
		tl.from('nav', { y: -100, autoAlpha: 0, duration: 1 })
			.from(
			'.icon__animation',
			{
				stagger: 0.05,
				x: 100,
				autoAlpha: 0,
				ease: 'power3.inOut',
				duration: 1,
			},'0'
		);
	}, []);

	// Animate modal on open
	useGSAP(() => {
		if (isOpen && modalRef.current && overlayRef.current) {
			const tl = gsap.timeline();
			tl.fromTo(
				overlayRef.current,
				{ autoAlpha: 0 },
				{ autoAlpha: 1, duration: 0.5 },
			)
				.fromTo(
					modalRef.current,
					{ x: '100%' },
					{ x: '0%', duration: 0.6, ease: 'power4.out' },
					0,
				)
				// Animate main links first
				.from(
					'.modal__link:not(.social)',
					{
						y: 40,
						autoAlpha: 0,
						stagger: 0.1,
						duration: 0.5,
						ease: 'power3.out',
					},
					'-=0.3',
				)
				// Animate social icons slightly after
				.from(
					'.modal__link.social',
					{
						y: 30,
						autoAlpha: 0,
						stagger: 0.1,
						duration: 0.4,
						ease: 'power3.out',
					},
					'-=0.2',
				);
		}
	}, [isOpen]);

	// Close handler with staggered animation
	const handleClose = () => {
		if (modalRef.current && overlayRef.current) {
			setIsClosing(true);

			const tl = gsap.timeline({
				onComplete: () => {
					setIsClosing(false);
					setIsOpen(false);
				},
			});

			// Animate social icons first
			tl.to('.modal__link.social', {
				y: 30,
				autoAlpha: 0,
				stagger: 0.05,
				duration: 0.3,
				ease: 'power3.in',
			})
				// Animate main links
				.to(
					'.modal__link:not(.social)',
					{
						y: 40,
						autoAlpha: 0,
						stagger: 0.05,
						duration: 0.3,
						ease: 'power3.in',
					},
					'<',
				)
				// Slide modal out and fade overlay
				.to(
					modalRef.current,
					{ x: '100%', duration: 0.5, ease: 'power4.in' },
					'<',
				)
				.to(overlayRef.current, { autoAlpha: 0, duration: 0.5 }, '<');
		}
	};

	return (
		<>
			<nav>
				<div className="nav__container">
					<div className="logo__container">
						<figure className="nav__logo">
							<img
								src="/images/logo.png"
								alt="EC 5 Star Transports Logo"
							/>
						</figure>
						<p className="nav__text white split">
							EC 5 Star Transports
						</p>
					</div>

					{/* Desktop nav */}
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

					{/* Hamburger for tablet/mobile */}
					<button
						className="hamburger"
						onClick={() => setIsOpen(true)}
					>
						<FaBars />
					</button>
				</div>
			</nav>

			{/* Tablet modal */}
			{(isOpen || isClosing) && (
				<>
					<div
						ref={overlayRef}
						className="modal__overlay"
						onClick={handleClose}
					/>

					<div className="modal__panel" ref={modalRef}>
						<button className="modal__close" onClick={handleClose}>
							<FaTimes />
						</button>

						<ul className="modal__menu">
							{/* Main links */}
							<li className="modal__link">
								<a
									href="/"
									className="nav__text white page__link link__hover--effect"
								>
									Home
								</a>
							</li>
							<li className="modal__link">
								<a
									href="/Gallery"
									className="nav__text white page__link link__hover--effect"
								>
									Gallery
								</a>
							</li>
							{/* Social icons */}
							<li className="modal__link social">
								<a href="" className="social__link insta white">
									<FaInstagram />
								</a>
							</li>
							<li className="modal__link social">
								<a
									href=""
									className="social__link tiktok white"
								>
									<FaTiktok />
								</a>
							</li>
							<li className="modal__link social">
								<a href="" className="social__link snap white">
									<FaSnapchat />
								</a>
							</li>
							<li className="modal__link social">
								<a
									href=""
									className="social__link facebook white"
								>
									<FaFacebook />
								</a>
							</li>
						</ul>
					</div>
				</>
			)}
		</>
	);
};

export default Nav;
