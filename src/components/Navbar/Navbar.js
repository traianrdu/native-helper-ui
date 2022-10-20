import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';

const classNameFunc = ({ isActive }) => (isActive ? "Navbar-button" : "Navbar-button"); // either is active or not, it will show the same css

const Navbar = () => {
  return (
    <nav className="Navbar">
      <NavLink className={classNameFunc} to='/'>
        Home
      </NavLink>
      <NavLink className={classNameFunc} to='/features'>
        Features
      </NavLink>
      <NavLink className={classNameFunc} to='/android-to-ios'>
        android-to-ios
      </NavLink>
      <NavLink className={classNameFunc} to='/ios-to-android'>
        ios-to-android
      </NavLink>
      <NavLink className={classNameFunc} to='/contact'>
        Contact
      </NavLink>
      {/* Second Nav */}
      {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
    </nav>
  );
};

export default Navbar;