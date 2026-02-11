import React, { useEffect, useState } from 'react';
import Icon from './Icon';

const Reason = ({ title, text, icon }) => {
	const [size, setSize] = useState(50);
	 useEffect(() => {
		const updateSize = () => {
		  if (window.innerWidth < 550) setSize(30);
		  else if (window.innerWidth < 768) setSize(35);
		  else if (window.innerWidth <= 1280) setSize(40);
		  else setSize(40);
		};
	
		updateSize(); 
		window.addEventListener('resize', updateSize);
	
		return () => window.removeEventListener('resize', updateSize);
	  }, []);
	
	return (
		<div className="reason">
			<div className="reason__icon">

			<Icon size={size} icon={icon} />
			</div>
			<div className="reason__text">
				<h3>{title}</h3>
				<p className="regular charcoal reason__para">{text}</p>
			</div>
		</div>
	);
};

export default Reason;
