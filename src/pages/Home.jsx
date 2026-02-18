import React from 'react';
import Landing from '../components/Landing';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import HowItWorks from '../components/HowItWorks';
import Reviews from '../components/Reviews';
import GallerySection from '../components/HomeGallery';
import FinalCTA from '../components/FinalCTA';
import AboutSection from '../components/AboutSection';

const Home = () => {
	return (
		<>
			<Landing />
			<main>
				<AboutSection />
				<Services />
				<HowItWorks />
				<WhyChooseUs />
				<Reviews />
				<GallerySection />
				<FinalCTA />
			</main>
		</>
	);
};

export default Home;
