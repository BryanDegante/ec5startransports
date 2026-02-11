import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);

const AnimatedTitle = ({ text }) => {
	const titleRef = useRef(null);
useGSAP(() => {
  const letters = Array.from(titleRef.current.querySelectorAll('span'));

  // Wave animation
  gsap.from(letters, {
    y: 50,
    opacity: 1,
    stagger: 0.05,
    duration: 0.6,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: titleRef.current,
      start: 'top 80%',
      once: true,
    },
  });

  // Continuous right → left gold flash
  gsap.fromTo(
    titleRef.current,
    { backgroundPosition: '200% 0%' }, // start fully right
    {
      backgroundPosition: '0% 0%',       // move to left
      duration: 1.5,
      ease: 'linear',
      repeat: -1,
      delay: 0.6,
    }
  );
}, []);


	return (
		<h2 className="statement__title" ref={titleRef}>
			{text.split('').map((char, i) => (
				<span key={i}>{char}</span>
			))}
		</h2>
	);
};

export default AnimatedTitle;
