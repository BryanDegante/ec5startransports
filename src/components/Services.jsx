import React from 'react'

const Services = () => {
  return (
    <section id='services'>
      <div className="container">
        <div className="row">
          <div className="features__description--heading">
            <header className="section__header">
              <h2>Why Choose Us?</h2>
            </header>
          </div>
          <div className="features__descriptions">
            <div className="feature__description">
              <div className="features__description--icon"></div>
              <div className="features__description--text">
                <h3>Realiable & On-Time Delivery</h3>
                <p className="features__description--para">We understand vehicles are valuable assets, so we prioritize safe and timely delivery.</p>
              </div>
            </div>
            <div className="feature__description">
              <div className="features__description--icon"></div>
              <div className="features__description--text">
                <h3>Certified & Insured Transport</h3>
                <p className="features__description--para">Customers have peace of mind knowing their vehicle is protected throughout the journey.</p>
              </div>
            </div>
            <div className="feature__description">
              <div className="features__description--icon"></div>
              <div className="features__description--text">
                <h3>Door-to-Door Convenience</h3>
                <p className="features__description--para">We pick up and deliver cehicles as close to the customer's location as possible, saving time and effort</p>
              </div>
            </div>
            <div className="feature__description">
              <div className="features__description--icon"></div>
              <div className="features__description--text">
                <h3>Competitive & Transparent Pricing</h3>
                <p className="features__description--para">No hidden fees -- customers know exactly what they're paying for.</p>
              </div>
            </div>
            <div className="feature__description">
              <div className="features__description--icon"></div>
              <div className="features__description--text">
                <h3>Experienced Drivers & Professional Service</h3>
                <p className="features__description--para">Our team handles vehicles carefully, whether standard cars, luxury vehicles, or classic cars</p>
              </div>
            </div>
            <div className="feature__description">
              <div className="features__description--icon"></div>
              <div className="features__description--text">
                <h3>Excellent Customer Support</h3>
                <p className="features__description--para">Customers get updates and support throughout the transport process.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services