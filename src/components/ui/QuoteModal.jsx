import { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import gsap from 'gsap';

export default function QuoteModal({ onClose }) {
	const [time, setTime] = useState('05:00 AM');
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState('idle'); // idle | success | error
	const [errorMessage, setErrorMessage] = useState('');
	const [isVisible, setIsVisible] = useState(true); // for fade-out

	const overlayRef = useRef(null);
	const modalRef = useRef(null);
	const formRef = useRef(null);
	const buttonRef = useRef(null);
	const successRef = useRef(null);

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

	// Smooth close handler
	const handleClose = () => {
		setIsVisible(false);
		gsap.to(overlayRef.current, { opacity: 0, duration: 0.3 });
		gsap.to(modalRef.current, {
			scale: 0.95,
			opacity: 0,
			y: 50,
			duration: 0.3,
			ease: 'power3.in',
			onComplete: () => {
				if (onClose) onClose();
			},
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (isSubmitting) return;

		setIsSubmitting(true);
		setSubmitStatus('idle');
		setErrorMessage('');

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

			let result;
			try {
				result = await response.json();
			} catch {
				result = { error: 'Invalid JSON from server' };
			}

			if (response.ok) {
				setSubmitStatus('success');
				formRef.current.reset();
				setTime('05:00 AM');

				// Animate success panel
				gsap.fromTo(
					successRef.current,
					{ opacity: 0, scale: 0.9 },
					{ opacity: 1, scale: 1, duration: 0.5, ease: 'power3.out' },
				);

				// Auto-close after animation
				setTimeout(() => handleClose(), 2500);
			} else {
				setSubmitStatus('error');
				setErrorMessage(result.error || 'Something went wrong.');
			}
		} catch (err) {
			setSubmitStatus('error');
			setErrorMessage('Server error. Please try again.');
		} finally {
			setIsSubmitting(false);
		}
	};

	useEffect(() => {
		if (!isVisible) return;

		// Animate modal open
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

		if (buttonRef.current) {
			buttonRef.current.addEventListener('mouseenter', () =>
				gsap.to(buttonRef.current, {
					boxShadow: '0 0 15px #F4BA1D, 0 0 30px #F4BA1D',
					duration: 0.3,
				}),
			);
			buttonRef.current.addEventListener('mouseleave', () =>
				gsap.to(buttonRef.current, {
					boxShadow: '0 0 0px #F4BA1D',
					duration: 0.3,
				}),
			);
		}
	}, [isVisible]);

	return createPortal(
		<div ref={overlayRef} className="quote-overlay">
			<div ref={modalRef} className="quote-modal">
				<button onClick={handleClose} className="quote-close-btn">
					&times;
				</button>

				{submitStatus === 'success' ? (
					<div ref={successRef} className="success-panel">
						<div className="success-icon">✓</div>
						<h2>Quote Request Sent!</h2>
						<p>We’ll contact you shortly with pricing details.</p>
					</div>
				) : (
					<>
						<h2 className="quote-heading">Request a Quote</h2>

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

							<input type="date" name="date" required />

							<select
								value={time}
								onChange={(e) => setTime(e.target.value)}
								required
							>
								{times.map((t) => (
									<option key={t} value={t}>
										{t}
									</option>
								))}
							</select>

							<div className="checkbox-group">
								{[
									'Open',
									'Enclosed',
									'Operable',
									'Inoperable',
								].map((type) => (
									<label key={type}>
										<input
											type="checkbox"
											name="transportType"
											value={type}
										/>{' '}
										{type}
									</label>
								))}
							</div>

							<textarea
								name="comments"
								placeholder="Additional Comments"
								rows={4}
							></textarea>

							{submitStatus === 'error' && (
								<div className="form-error">{errorMessage}</div>
							)}

							<div className="submit-container">
								<button
									ref={buttonRef}
									type="submit"
									className="quote-submit-btn"
									disabled={isSubmitting}
								>
									{isSubmitting && (
										<span className="spinner" />
									)}
									{isSubmitting
										? 'Submitting...'
										: 'Submit Quote'}
								</button>
							</div>
						</form>
					</>
				)}
			</div>
		</div>,
		document.body,
	);
}
