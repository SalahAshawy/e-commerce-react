import React from 'react'
import{Link} from 'react-router-dom' ;
import {NavLink} from 'react-router-dom' ;
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import { useSelector } from "react-redux";
// import { NavNavLink } from 'react-router-dom'
// import { Link } from 'react-scroll'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faBars } from '@fortawesome/free-solid-svg-icons'
//import logo from './logo.png'

const Navbar = () => {
 const state =useSelector((state)=>state.handleCart);
  return (
    <>
 
   

        <nav className='navbar navbar-expand-lg navbar-dark bg-dark  navbar fixed-top '>
        <div className='container'>
        <Link class="navbar-brand fw-bold fs-4" to="/" > Matgarak
        </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
          <i  class="fa fa-bars"/>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav mx-auto'>
        
                <li className='nav-item'>
                <Link class="nav-link" to ="/" >Home</Link>
                </li>
                <li className='nav-item'>
                <Link class="nav-link" to="/products" >Products</Link>
                </li>
                <li className='nav-item'>
                <Link class="nav-link" to="/about">About</Link>
                </li>
                <li className='nav-item'>
                <Link class="nav-link" to="/contacts">Conatcts</Link>
                </li>
            </ul>
              <div className="buttons">
                <Link to='/login' className='btn btn-outline-light' >
                    <i className='fa fa-sign-in me-1'  />Login
                </Link>
                <Link to='/register' className='btn btn-outline-light ms-2'  > 
                    <i className='fa fa-user-plus me-1'  /> Register
                </Link>
                <Link to="/cart" className='btn btn-outline-light ms-2'> 
                    <i className='fa fa-shopping-cart me-1'  />Cart ({state.length})
                </Link>
              </div>
          </div>
        </div>
      </nav>
   
       
        </>

  )
}

export default Navbar;
