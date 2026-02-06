import React from 'react'
import Icon from './Icon';

const ServiceCard = ({title, text,icon}) => {
  return (
		<div className="service__card">
			<Icon size={65} icon={icon} />
          <h3 className='service__title'>{title}</h3>
			<p className="regular charcoal">
				{text}
			</p>
		</div>
  );
}

export default ServiceCard