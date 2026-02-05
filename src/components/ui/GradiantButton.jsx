import React from 'react';

const GradiantButton = ({ type, text }) => {
	return (
		<button className={type}>
			<span className="button-content">{text}</span>
		</button>
	);
};

export default GradiantButton;
