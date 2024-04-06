import React from 'react'
import { Link } from 'react-router-dom'
import { FaXTwitter, FaSquareFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa6'
import google from '../assets/images/pay/play.jpg'
import app from '../assets/images/pay/app.jpg'
import pay from '../assets/images/pay/pay.png'

const footer = () => {
  return <>
  <footer className='footer p-5'>
    <div className='container-xxl'>
      <div className='row'>
        <div className="col-12">
          <div className="col-6 text-center">
            <h3></h3>
          </div>
        </div>
        <div className="col-4 d-flex flex-column">
          <h3 className='mb-4'>Contact Us</h3>
          <div className="footer-details">
          <div className='mb-3'><p><b>Address:</b>  PSG College of Technology, Peelamedu, Coimbatore-641004</p> </div>
          <div className='mb-3'><p><b>Phone:</b>  <a href="tel:+919876543210"> Call us at +91 9876543210</a></p> </div>
          <div className='mb-5'><p><b>Hours open:</b>  From 8 A.M To 6 P.M</p> </div>
          <div className='mb-3'><p><b>Follow Us</b></p></div>
          <div className='col-4 mb-3 social-icons d-flex justify-content-around'>
            <Link><FaXTwitter className='fs-4'/></Link>
            <Link><FaSquareFacebook className='fs-4'/></Link>
            <Link><FaLinkedin className='fs-4'/></Link>
            <Link><FaInstagram className='fs-4'/></Link>
          </div>

          </div>
        </div>
        <div className="col-2">
          <h3>About</h3>
          <div className="footer-details d-flex flex-column">
            <Link className='mb-3'>About Us</Link>
            <Link className='mb-3'>Delivery</Link>
            <Link className='mb-3'>Privacy Policy</Link>
            <Link className='mb-3'>Terms & Conditions</Link>
            <Link className='mb-3'>Free policy</Link>
          </div>
        </div>
        <div className="col-2">
          <h3>Account</h3>
          <div className="footer-details d-flex flex-column">
            <Link className='mb-3'>Profile</Link>
            <Link className='mb-3'>View cart</Link>
            <Link className='mb-3'>help</Link>
            <Link className='mb-3'>Payments</Link>
            <Link className='mb-3'>My Wishlist</Link>
            <Link className='mb-3'>Coupons</Link>
            
          </div>
        </div>
        <div className="col-4">
          <h3 className="mb-3">Install App</h3>
          <div className="footer-details">
            <p>Available On Google Play Services and App Store</p>
            <div className="pay">
              <Link>
                <img src={google} alt="Play Store" className='img-fluid m-1'/>
              </Link>
              <Link>
                <img src={app} alt="App Store" className='img-fluid m-1'/>
              </Link>
            </div>
            <p className='mt-3 mb-1'>Payment Methods</p>
              <Link className='pay'>
                <img src={pay} alt="App Store" className='img-fluid m-1 p-3'/>
              </Link>
          </div>
        </div>
      </div>
      <hr />
      <div className='row d-flex justify-content-between'>
        <div className='col-3'>
          <p>&copy; Developed for WAD Project 2023</p>
        </div>
        <div className='col-3 d-flex justify-content-around'>
          <Link className='text-black'>Privacy Policy</Link>
          <Link className='text-black'>Terms of Use</Link>
          <Link className='text-black'>Contact Me</Link>
        </div>

      </div>
    </div>
  </footer>
  </>
}

export default footer