import React from 'react';
import { FaInstagram, FaTiktok, FaSnapchat, FaFacebook } from 'react-icons/fa';

const Nav = () => {
	return (
		<nav>
			<div className="row">
				<div className="nav__container">
					<div className="logo__container">
						<figure className="nav__logo">
							<img src="/logo.png" alt="" />
						</figure>
						<p className="nav__text white split">EC 5 Star Transports</p>
					</div>
					<ul className="social__list">
						{/* <li>
							<a
								href="/Gallery"
								className="nav__text white  link__hover--effect"
							>
								Gallery
							</a>
						</li> */}
						<li className='icon__animation' >
							<a href="" className="social__link insta white">
								<FaInstagram />
							</a>
						</li>
						<li className='icon__animation'>
							<a href="" className="social__link tiktok white">
								<FaTiktok />
							</a>
						</li>
						<li className='icon__animation'>
							<a href="" className="social__link snap white">
								<FaSnapchat />
							</a>
						</li>
						<li className='icon__animation'>
							<a href="" className="social__link facebook white">
								<FaFacebook />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
