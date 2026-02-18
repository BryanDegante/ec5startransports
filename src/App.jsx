import Home from './pages/Home';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import gsap from 'gsap';
import Reviews from './pages/Reviews';
import Gallery from './pages/Gallery';
import Nav from './components/Nav';
import About from './pages/About';
function App() {
	return (
		<Router>
			<div className="App">
				<Nav />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/gallery" element={<Gallery />} />
					<Route path="/reviews" element={<Reviews />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
