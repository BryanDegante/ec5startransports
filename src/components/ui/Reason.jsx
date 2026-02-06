import React from 'react';
import Icon from './Icon';

const Reason = ({ title, text, icon }) => {
	return (
		<div className="reason">
			<Icon size={50} icon={icon} />
			<div className="reason__text">
				<h3>{title}</h3>
				<p className="regular charcoal reason__para">{text}</p>
			</div>
		</div>
	);
};

export default Reason;
