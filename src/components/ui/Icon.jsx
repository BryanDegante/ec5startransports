import React from 'react';

const Icon = ({ size,icon  }) => {
	const iconStyle = {
		width: size,
		height: size,
		backgroundColor: '#F4BA1D',
		WebkitMask: `url(/icons/${icon}.svg) no-repeat center`,
		WebkitMaskSize: 'contain',
		mask: `url(/icons/${icon}.svg) no-repeat center`,
		maskSize: 'contain',
		display: 'inline-block',
	};

	return <div style={iconStyle} />;
};

export default Icon;
