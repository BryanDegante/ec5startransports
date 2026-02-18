import React from 'react';
import { FaInstagram, FaTiktok, FaSnapchat, FaFacebook } from 'react-icons/fa';
import { useLocation } from 'react-router-dom'; // <-- import useLocation
import ContactButton from './ui/ContactButton';
import GradiantButton from './ui/GradiantButton';

const Footer = () => {
	const location = useLocation(); 
	const isHomePage = location.pathname === '/'; 

	return (
		<footer>
			<hr className="footer__divider" /> {/* <-- division line here */}
			<div className="footer__container">
				<figure className="footer__logo">
					<img src="/images/logo.png" />
				</figure>

				{!isHomePage && (
					<div className="footer__button--container">
						<ContactButton />
						<GradiantButton
							type="fill regular"
							text="Get a Quote"
						/>
					</div>
				)}

				<ul className="social__list">
					<li>
						<a href="" className="social__link insta white">
							<FaInstagram />
						</a>
					</li>
					<li>
						<a href="" className="social__link tiktok white">
							<FaTiktok />
						</a>
					</li>
					<li>
						<a href="" className="social__link snap white">
							<FaSnapchat />
						</a>
					</li>
					<li>
						<a href="" className="social__link facebook white">
							<FaFacebook />
						</a>
					</li>
				</ul>
			</div>
			<hr className="footer__divider" />{' '}
			{/* optional divider before copyright */}
			<p className="copyright white">
				Copyright &copy; 2026 EC5StarTransports LLC. All Rights
				Reserved.
			</p>
		</footer>
	);
};

export default Footer;
