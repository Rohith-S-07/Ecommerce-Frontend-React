import React from 'react'
import {FiPhoneCall} from 'react-icons/fi'
import {CiMail} from 'react-icons/ci'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/Printhub_nobg.png'
import {HiOutlineInboxIn} from 'react-icons/hi'
import {VscAccount} from 'react-icons/vsc'
import {CgShoppingCart} from 'react-icons/cg'

const header = () => {
  const location = useLocation();
  return <>
  <header className='header-top-strip p-1 px-4 shadow-md'>
    <div className='container-xxl'>
      <div className='row align-items-center'>
        <div className="col-6">
          <p>The Trending products at 30% off</p>
        </div>
        <div className="col-6 d-flex justify-content-between">
          <div>
          <a href="tel:+919876543210"> Call us at +91 9876543210</a>
          </div>
          <div>
          <Link><FiPhoneCall  className='fs-5 mx-3'/></Link>
          <Link><CiMail className='fs-5 mx-3'/></Link>
          </div>
        </div>
      </div>
    </div>
  </header>
  <header className='header-upper px-3'>
  <div className="container-xxl">
    <div className="row">
      <div className="col-2 m-auto text-center">
        <Link to='/'><img src={logo} alt="Printhub" className='img-fluid logo' /></Link>  
      </div>
      <div className="col-3 d-flex align-items-center mt-3">
      <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">All</span>
        <input type="text" className="form-control p-2" placeholder="Search products" aria-label="Recipient's username" aria-describedby="basic-addon2" />
        <button className="input-group-text" id="basic-addon2">Search</button>
      </div>
      </div>
      <div className='nav-links col-4 d-flex align-items-center justify-content-between text-center m-auto'>
        <Link to={'/'} className={location.pathname === '/' ? 'active' : 'inactive'}>Home</Link>
        <Link to={'shop'} className={location.pathname === '/shop' ? 'active' : 'inactive'}>Shop</Link>
        <Link to={'blog'} className={location.pathname === '/blog' ? 'active' : 'inactive'}>Blog</Link>     
        <Link to={'about'} className={location.pathname === '/about' ? 'active' : 'inactive'}>About</Link>
        <Link to={'contact'} className={location.pathname === '/contact' ? 'active' : 'inactive'}>Contact</Link>
      </div>
      <div className="nav-links-nav col-3 d-flex align-items-center justify-content-between">
      <Link to={'wishlist'} className={location.pathname === '/wishlist' ? 'active' : 'inactive'}>
        <div className="d-flex">
        <span><HiOutlineInboxIn className='fs-3 mx-2'/></span>
        <p>Wishlist</p>
        </div>
      </Link>
      <Link to={'login'} className={location.pathname === '/login' ? 'active' : 'inactive'}>
        <div className="d-flex">
        <span><VscAccount className='fs-3 mx-2'/></span>
        <p>Account</p> 
        </div>
      </Link>
      <Link to={'cart'} className={location.pathname === '/cart' ? 'active' : 'inactive'}>
        <div className="d-flex">
        <span><CgShoppingCart className='fs-3 mx-2'/></span>  
        <p>Cart</p> 
        </div>
      </Link>
    </div>
    </div>
  </div>
  </header>
  </>
}

export default header