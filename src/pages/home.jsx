import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/hero'

const home = () => {
  return <>
  <section className='banner'>
    <div className="container-xxl">
      <div className="row">
        <div className="banner-details p-5 d-flex flex-column align-items-start justify-content-center">
          <span className='shadow-lg p-2 mt-3'>Great offers to begin with</span>
          <h1>Super value Deals</h1>
          <h2>On all products!</h2>
          <p className='p-3 m-0'>Save more with PrintHub</p>
          <Link className='button-link mb-3'>Shop Now</Link>
        </div>
      </div>
    </div>
  </section>

  <Hero />

  <section className="featured-products p-5">
    <div className="container-xxl">
      <div className="row">
        <div className="text-center">
          <h1>Our Featured Products</h1>
          <p>All Modern Designs </p>
        </div>
        
      </div>
    </div>
  </section>
  </>
}

export default home