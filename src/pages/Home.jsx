import React from 'react';
import Landing from '../components/Landing';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import HowItWorks from '../components/HowItWorks';
import Reviews from '../components/Reviews';
import GallerySection from '../components/HomeGallery';
import FinalCTA from '../components/FinalCTA';

const Home = () => {
	return (
		<>
			<Landing />
			<main>
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
