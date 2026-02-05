import React from 'react'
import Nav from './Nav'
import GradiantButton from './ui/GradiantButton';

const Landing = () => {
  return (
		<section id="landing">
      <Nav />
      <div className="container">
			<div className="landing__container">
				<h1 className="white">
					5-Star Vehicle Transport You Can Trust
				</h1>
				<p className="regular light-grey">
					EC 5 Star Transport provides safe, insured, and reliable
					vehicle transport across Texas and nationwide. From daily
					drivers to specialty vehicles, we deliver with care.
        </p>
        <div className="landing__buttons">
          <button className='gold__fill regular'>Get a Quote</button>
					  <button className='gold__outline regular'>Call Now</button>
        </div>
			</div>
      </div>
		</section>
  );
}

export default Landing