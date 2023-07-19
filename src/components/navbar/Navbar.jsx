import React from 'react';
import './navbar.scss';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar__container'>
        <div className='navbar__logo'>
          <span className='navbar__logo-text'>fiverr</span>
          <span className='navbar__logo-dot'>.</span>
        </div>
        <div className='navbar__links'>
          <ul>
            <li className='navbar__link'>
              <a href='#'>Fiverr Business</a>
            </li>
            <li className='navbar__link'>
              <a href='#'>Explore</a>
            </li>
            <li className='navbar__link'>
              <a href='#'>English</a>
            </li>
            <li className='navbar__link'>
              <a href='#'>Become a Seller</a>
            </li>
            <li className='navbar__link'>
              <a href='#'>Sign In</a>
            </li>
            <li className='navbar__button'>
              <a href='#'>JOIN</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
