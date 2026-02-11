import React from 'react';
import { IoIosMail, IoMdContact } from 'react-icons/io';
import { FaPhone } from 'react-icons/fa';
import { MdContactPage } from 'react-icons/md';
const ContactButton = () => {
	return (
		<>
			<div className="contact__container">
				<div className="contact__button--content">
					<span className="contact__text">Contact Us</span>
					<IoMdContact className="share-icon" />
				</div>
				<div className="contact__content">
					<div className="contact__icons">
						<a
							href="mailto:haulingservices@ec5startransports.com"
							className="contact__icon email contact__effect"
						>
							<IoIosMail />
						</a>
						<a
							href="tel:+14695501176"
							className="contact__icon phone contact__effect"
						>
							<FaPhone />
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default ContactButton;
