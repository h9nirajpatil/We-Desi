import React from 'react'
import divider from '../../assets/images/divider-free-img-1.png'
import './footer.css'
import { NavLink } from 'react-router-dom'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaYelp } from "react-icons/fa";

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-1'>
        <text className='letseat'>Let’s Eat.</text>
        <img className='divider-image2' src={divider} alt='divider' />
        <div className='footer-1-p'>
          <p className='footer-1-p1'>Wedesi is the first Indian restaurant in Montreal to bring the Indian sweets and authentic street foods from all over India under one roof.</p>
        </div>
        <NavLink
          to='/menu'
          activeClassName='active'
        >
          <button className='reservation'>Our Menu</button>
        </NavLink>
        <div className='footer-1-p'>
          <p className='footer-1-p2'>Or Call Us : 5146840007</p>
        </div>
        <div className='footer-1-2'>
          <div className='footer-1-1'>
            <a href="https://www.facebook.com/profile.php?id=100093700947943" target="_blank">
              <FaFacebookSquare size={22} style={{ color: 'black' }} />
            </a>
          </div>
          <div className='footer-1-1'>
            <a href="/" target="_blank">
              <FaTwitter size={22} style={{ color: 'black' }} />
            </a>
          </div>
          <div className='footer-1-1'>
            <a href="https://www.instagram.com/wedesi_mtl/" target="_blank">
              <FaInstagramSquare size={22} style={{ color: 'black' }} />
            </a>
          </div>
          <div className='footer-1-1'>
            <a href="/menucard" target="_blank">
              <FaGoogle size={22} style={{ color: 'black' }} />
            </a>
          </div>
          <div className='footer-1-1'>
            <a href="/" target="_blank">
              <FaYelp size={22} style={{ color: 'black' }} />
            </a>
          </div>
        </div>
        <div className='footer-1-3'>
          <span className='footer-1-3-1'>
            <p>We-Desi Copyright © 2024 We-Desi</p>
          </span>
          <span className='footer-1-3-1'>
            <a href='https://shikshaway.com/' target='_blank'>Powered by <span className='shikshaway'>shikshaway</span></a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer