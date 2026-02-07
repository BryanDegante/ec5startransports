import React, { useEffect, useState } from 'react';
import Icon from './Icon';

const Reason = ({ title, text, icon }) => {
	const [size, setSize] = useState(50);
	 useEffect(() => {
		const updateSize = () => {
		  if (window.innerWidth < 480) setSize(20);
		  else if (window.innerWidth < 768) setSize(28);
		  else if (window.innerWidth <= 1280) setSize(40);
		  else setSize(40);
		};
	
		updateSize(); // run once on mount
		window.addEventListener('resize', updateSize);
	
		return () => window.removeEventListener('resize', updateSize);
	  }, []);
	
	return (
		<div className="reason">
			<Icon size={size} icon={icon} />
			<div className="reason__text">
				<h3>{title}</h3>
				<p className="regular charcoal reason__para">{text}</p>
			</div>
		</div>
	);
};

export default Reason;
