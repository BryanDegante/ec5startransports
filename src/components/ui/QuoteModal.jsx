import { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import gsap from 'gsap';

export default function QuoteModal({ onClose }) {
	const [isOpen, setIsOpen] = useState(true);
	const [time, setTime] = useState('05:00 AM');

	const overlayRef = useRef(null);
	const modalRef = useRef(null);
	const formRef = useRef(null);
	const headingRef = useRef(null);
	const buttonRef = useRef(null);

	const times = [
		'05:00 AM',
		'05:30 AM',
		'06:00 AM',
		'06:30 AM',
		'07:00 AM',
		'07:30 AM',
		'08:00 AM',
		'08:30 AM',
		'09:00 AM',
		'09:30 AM',
		'10:00 AM',
		'10:30 AM',
		'11:00 AM',
		'11:30 AM',
		'12:00 PM',
		'12:30 PM',
		'01:00 PM',
		'01:30 PM',
		'02:00 PM',
		'02:30 PM',
		'03:00 PM',
		'03:30 PM',
		'04:00 PM',
		'04:30 PM',
		'05:00 PM',
		'05:30 PM',
		'06:00 PM',
		'06:30 PM',
		'07:00 PM',
		'07:30 PM',
		'08:00 PM',
		'08:30 PM',
		'09:00 PM',
		'09:30 PM',
		'10:00 PM',
	];

	const closeModal = () => {
		if (onClose) onClose();
		setIsOpen(false);
	};

	const handleTimeChange = (e) => setTime(e.target.value);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const formData = new FormData(formRef.current);

		const data = {
			firstName: formData.get('firstName'),
			lastName: formData.get('lastName'),
			email: formData.get('email'),
			phone: formData.get('phone'),
			vehicles: formData.get('vehicles'),
			origin: formData.get('origin'),
			destination: formData.get('destination'),
			date: formData.get('date'),
			time: time,
			transportType: formData.getAll('transportType'),
			comments: formData.get('comments'),
		};

		try {
			const response = await fetch('/api/quote', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data),
			});

			const result = await response.json();

			if (response.ok && result.success) {
				alert('Quote submitted successfully!');
				closeModal();
			} else {
				alert(result.error || 'Something went wrong.');
			}
		} catch (err) {
			console.error(err);
			alert('Server error.');
		}
	};

	useEffect(() => {
		if (!isOpen) return;

		gsap.fromTo(
			overlayRef.current,
			{ opacity: 0 },
			{ opacity: 1, duration: 0.3 },
		);
		gsap.fromTo(
			modalRef.current,
			{ y: 50, opacity: 0, scale: 0.95 },
			{ y: 0, opacity: 1, scale: 1, duration: 0.5, ease: 'power3.out' },
		);

		const fields = formRef.current.querySelectorAll(
			'input, select, textarea, div.checkbox-group',
		);
		gsap.fromTo(
			fields,
			{ y: 20, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				duration: 0.4,
				stagger: 0.08,
				ease: 'power3.out',
				delay: 0.2,
			},
		);

		const gradientStyle = {
			backgroundImage:
				'linear-gradient(120deg, #7a5a12 0%, #F4BA1D 25%, #fff1b8 45%, #F4BA1D 65%, #7a5a12 100%)',
			backgroundSize: '300% 100%',
			backgroundPosition: '0% 50%',
			WebkitBackgroundClip: 'text',
			backgroundClip: 'text',
			color: 'transparent',
		};

		gsap.set([headingRef.current, buttonRef.current], gradientStyle);
		gsap.to([headingRef.current, buttonRef.current], {
			backgroundPosition: '100% 50%',
			duration: 2,
			repeat: -1,
			yoyo: true,
			ease: 'power1.inOut',
		});
	}, [isOpen]);

	if (!isOpen) return null;

	return createPortal(
		<div ref={overlayRef} className="quote-overlay">
			<div ref={modalRef} className="quote-modal">
				<button onClick={closeModal} className="quote-close-btn">
					&times;
				</button>
				<h2 ref={headingRef} className="quote-heading">
					Request a Quote
				</h2>

				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className="quote-form"
				>
					<div className="flex-row">
						<input
							type="text"
							name="firstName"
							placeholder="First Name"
							required
						/>
						<input
							type="text"
							name="lastName"
							placeholder="Last Name"
							required
						/>
					</div>

					<input
						type="email"
						name="email"
						placeholder="Email"
						required
					/>
					<input
						type="tel"
						name="phone"
						placeholder="Phone Number"
						required
					/>

					<select name="vehicles" required>
						<option value="">Number of Vehicles</option>
						{[...Array(12)].map((_, i) => (
							<option key={i + 1} value={i + 1}>
								{i + 1}
							</option>
						))}
					</select>

					<input
						type="text"
						name="origin"
						placeholder="Origin Address"
						required
					/>
					<input
						type="text"
						name="destination"
						placeholder="Destination Address"
						required
					/>

					<div className="flex-column">
						<label className="input-label">Pick Up Date</label>
						<input type="date" name="date" required />
					</div>

					<div className="flex-column">
						<label className="input-label">Pick Up Time</label>
						<select
							value={time}
							onChange={handleTimeChange}
							required
						>
							{times.map((t) => (
								<option key={t} value={t}>
									{t}
								</option>
							))}
						</select>
					</div>

					<div className="checkbox-group">
						{['Open', 'Enclosed', 'Operable', 'Inoperable'].map(
							(type) => (
								<label key={type}>
									<input
										type="checkbox"
										name="transportType"
										value={type}
									/>{' '}
									{type}
								</label>
							),
						)}
					</div>

					<textarea
						name="comments"
						placeholder="Additional Comments"
						rows={4}
					></textarea>

					<div className="submit-container">
						<button
							ref={buttonRef}
							type="submit"
							className="quote-submit-btn"
							onMouseEnter={() =>
								gsap.to(buttonRef.current, {
									boxShadow:
										'0 0 15px #F4BA1D, 0 0 30px #F4BA1D',
									duration: 0.3,
								})
							}
							onMouseLeave={() =>
								gsap.to(buttonRef.current, {
									boxShadow: '0 0 0px #F4BA1D',
									duration: 0.3,
								})
							}
						>
							Submit Quote
						</button>
					</div>
				</form>
			</div>
		</div>,
		document.body,
	);
}
