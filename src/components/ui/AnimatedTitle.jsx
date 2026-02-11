import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SplitText from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

export default function AnimatedTitle({ text = 'Golden Flow In Words' }) {
	const titleRef = useRef(null);

	useGSAP(() => {
		const splitWords = new SplitText(titleRef.current, {
			type: 'words, chars',
			charsClass: 'char',
			wordsClass: 'word',
		});

		const words = splitWords.words;

		const gradients = [
			'linear-gradient(120deg, #7a5a12 0%, #F4BA1D 25%, #fff1b8 45%, #F4BA1D 65%, #7a5a12 100%)',
			'linear-gradient(120deg, #8c6316 0%, #F4BA1D 25%, #fff5c0 45%, #F4BA1D 65%, #8c6316 100%)',
			'linear-gradient(120deg, #7a5a12 0%, #F4BA1D 25%, #fff1a0 45%, #F4BA1D 65%, #7a5a12 100%)',
			'linear-gradient(120deg, #94691a 0%, #F4BA1D 25%, #fff4b0 45%, #F4BA1D 65%, #94691a 100%)',
		];

		const settledGradient =
			'linear-gradient(180deg, #f9d86a 0%, #F4BA1D 55%, #c99716 100%)';

		gsap.set(splitWords.chars, {
			opacity: 0,
			y: 50,
			backgroundImage: (i, target) => gradients[i % gradients.length],
			backgroundSize: '300% 100%',
			backgroundPosition: '0% 50%',
			WebkitBackgroundClip: 'text',
			backgroundClip: 'text',
			color: 'transparent',
		});

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: titleRef.current,
				start: 'top 80%',
				toggleActions: 'play none none reverse',
			},
			defaults: { ease: 'power3.out' },
		});

		words.forEach((word, index) => {
			const chars = word.querySelectorAll('.char');
			tl.to(
				chars,
				{
					opacity: 1,
					y: 0,
					duration: 0.8,
					stagger: 0.03,
					backgroundPosition: '100% 50%',
				},
				index * 0.1,
			);
		});

		tl.to(
			splitWords.chars,
			{
				backgroundImage: settledGradient,
				backgroundPosition: '50% 50%',
				duration: 0.6,
				stagger: 0.01,
			},
			'-=0.4',
		);

		return () => splitWords.revert();
	}, []);

	return (
		<h1
			ref={titleRef}
			style={{
				
				fontWeight: 600,
				lineHeight: 1.1,
				overflow: 'hidden',
			}}
		>
			{text}
		</h1>
	);
}
