import React, { useState } from 'react';
import QuoteModal from './QuoteModal';

const GradiantButton = ({ type = '', text = 'Request Quote' }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<>
			<button className={type} onClick={() => setIsModalOpen(true)}>
				<span className="fill-content">{text}</span>
			</button>

			{isModalOpen && (
				<QuoteModal onClose={() => setIsModalOpen(false)} />
			)}
		</>
	);
};

export default GradiantButton;
