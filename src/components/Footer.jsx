import React from 'react';
import { FaInstagram, FaTiktok, FaSnapchat, FaFacebook } from 'react-icons/fa';
import ContactButton from './ui/ContactButton';
import GradiantButton from './ui/GradiantButton';

const Footer = () => {
	return (
		<footer>
			<div className="footer__container">
				<figure className="footer__logo">
					<img src="/logo.png" />
				</figure>

				<div className="footer__button--container">
					<ContactButton />
					<GradiantButton type="fill regular " text="Get a Quote" />
				</div>

				<ul className="social__list">
					<li className="">
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
			<p className=" copyright white">
				Copyright &copy; 2026 EC5StarTransports LLC. All Rights
				Reserved.
			</p>
		</footer>
	);
};

export default Footer;
