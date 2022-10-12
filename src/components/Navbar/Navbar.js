import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <div>
        <nav class="Navbar-gradient">
          <NavLink to='/get-started' activeStyle>
            Get started
          </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/android-to-ios' activeStyle>
          android-to-ios
          </NavLink>
          <NavLink to='/ios-to-android' activeStyle>
          ios-to-android
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </nav>
      </div>
    </>
  );
};

export default Navbar;