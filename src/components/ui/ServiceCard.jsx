import React, { useState, useEffect } from 'react';
import Icon from './Icon';

const ServiceCard = ({ title, text, icon }) => {
  const [size, setSize] = useState(65);

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 480) setSize(20);
      else if (window.innerWidth < 768) setSize(28);
      else if (window.innerWidth <= 1280) setSize(55);
      else setSize(40);
    };

    updateSize(); // run once on mount
    window.addEventListener('resize', updateSize);

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div className="service__card">
      <Icon size={size} icon={icon} />
      <h3 className="service__title">{title}</h3>
      <p className="service__para regular charcoal">
        {text}
      </p>
    </div>
  );
};

export default ServiceCard;
