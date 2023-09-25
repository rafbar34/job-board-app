import React from 'react';
import { NavbarWrapper } from '../css/NavBars/Navbar';

export const NavBar = () => {
  return (
    <NavbarWrapper>
      <div className='nav-center'>
        <button type='button' className='toggle-btn'>icon</button>
        <div>
          logo
        </div>
          <h4 className='logo-text'>Dashboard</h4>
          <div>
            <div className='btn-container'>toggle/logout</div>
          </div>
      </div>
    </NavbarWrapper>
  );
};
