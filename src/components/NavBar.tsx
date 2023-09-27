import React from 'react';
import {NavbarWrapper} from '../css/NavBars/Navbar';
import {Logout} from './Logout';
import { ThemeToggle } from './ThemeToggle';

export const NavBar = () => {
  return (
    <NavbarWrapper>
      <div className='nav-center'>
        <button
          type='button'
          className='toggle-btn'>
          icon
        </button>
        <div>logo</div>
        <h4 className='logo-text'>Dashboard</h4>
        <div>
          <div className='btn-container'>
            <ThemeToggle/>
            <Logout />
          </div>
        </div>
      </div>
    </NavbarWrapper>
  );
};
