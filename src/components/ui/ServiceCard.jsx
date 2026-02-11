import React, { useState, useEffect } from 'react';
import Icon from './Icon';

const ServiceCard = ({ title, text, icon }) => {
	const [size, setSize] = useState(65);

	useEffect(() => {
		const updateSize = () => {
			if (window.innerWidth <= 550) setSize(40);
			else if (window.innerWidth <= 768) setSize(45);
			else if (window.innerWidth <= 1280) setSize(55);
			else setSize(65);
		};

		updateSize();
		window.addEventListener('resize', updateSize);
		return () => window.removeEventListener('resize', updateSize);
	}, []);

	return (
		<div className="service__card">
			<div className="service-icon">
				<Icon size={size} icon={icon} />
			</div>

			<div className="service-text">
				<h3 className="service__title">{title}</h3>
				<p className="service__para regular charcoal">{text}</p>
			</div>
		</div>
	);
};

export default ServiceCard;
