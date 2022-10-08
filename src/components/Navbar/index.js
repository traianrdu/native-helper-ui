import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
    return (
      <>
        <Nav>
          <Bars />
    
          <NavMenu>
            <NavLink to='/get-started' activeStyle>
              Get started
            </NavLink>
            <NavLink to='/about' activeStyle>
              About
            </NavLink>
            <NavLink to='/discover' activeStyle>
              Discover
            </NavLink>
            <NavLink to='/log-in' activeStyle>
              Log in
            </NavLink>
            <NavLink to='/sign-up' activeStyle>
              Sign Up
            </NavLink>
            {/* Second Nav */}
            {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          </NavBtn>
        </Nav>
      </>
    );
  };
    
  export default Navbar;