import React from 'react'
import Landing from '../components/Landing'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'

const Home = () => {
  return (
    <>
      <Landing />
      <main>
      <Services />
      <WhyChooseUs />
      </main>
    </>
  )
}

export default Home