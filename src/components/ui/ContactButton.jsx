import React from 'react';
import { IoIosMail,IoMdContact} from 'react-icons/io';
import { FaPhone } from 'react-icons/fa';
import { MdContactPage } from 'react-icons/md';
const ContactButton = () => {
	return (
		<>
			<div class="contact__container">
				<div class="contact__button--content">
					<span class="contact__text">Contact Us</span>
					<IoMdContact className="share-icon" />
				</div>
				<div class="contact__content">
					<div class="contact__icons">
						<a
							href="mailto:haulingservices@ec5startransports.com"
							class="contact__icon email contact__effect"
						>
							<IoIosMail />
						</a>
						<a
							href="tel:+4695501176"
							class="contact__icon phone contact__effect"
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
