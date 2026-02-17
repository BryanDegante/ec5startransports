import React, { useState } from 'react';
import QuoteModal from './QuoteModal';

const GradiantButton = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<>
			<button
				className="fill regular "
				onClick={() => setIsModalOpen(true)}
			>
				<span className="fill-content">Request a Quote</span>
			</button>

			{isModalOpen && (
				<QuoteModal onClose={() => setIsModalOpen(false)} />
			)}
		</>
	);
};

export default GradiantButton;
