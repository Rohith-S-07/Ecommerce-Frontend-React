import React from 'react'
import icon1 from '../assets/images/icons/icon1.png'
import icon2 from '../assets/images/icons/icon2.png'
import icon3 from '../assets/images/icons/icon3.png'
import icon4 from '../assets/images/icons/icon4.png'
import icon5 from '../assets/images/icons/icon5.png'
import icon6 from '../assets/images/icons/icon6.png'

const hero = () => {
  return <>
  <section className="hero p-2">
    <div className="container-xxl">
        <div className="row">
            <div className="hero-details d-flex text-center justify-content-around m-auto">
                <div className='card p-2'>
                    <img src={icon1} alt="icon1" className='img-fluid'/>
                    <p>Fast Orders</p>
                </div>
                <div className='card p-2'>
                    <img src={icon2} alt="icon2" className='img-fluid'/>
                    <p>Quick Shipping</p>
                </div>
                <div className='card p-2'>
                    <img src={icon3} alt="icon3" className='img-fluid'/>
                    <p>High Sales</p>
                </div>
                <div className='card p-2'>
                    <img src={icon4} alt="icon4" className='img-fluid'/>
                    <p>24/7 Support</p>
                </div>
                <div className='card p-2'>
                    <img src={icon5} alt="icon5" className='img-fluid'/>
                    <p>Online Order</p>
                </div>
                <div className='card p-2'>
                    <img src={icon6} alt="icon6" className='img-fluid'/>
                    <p>Quality Assurance</p>
                </div>
            </div>
        </div>
    </div>

  </section>
  </>
}

export default hero