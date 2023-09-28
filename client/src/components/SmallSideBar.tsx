import React, {useContext} from 'react';
import {links} from '../utils/Links';
import {Link, NavLink} from 'react-router-dom';
import {SidebarWrapper} from '../css/NavBars/SmallSidebar';
import {DashboardContext} from '../pages/Dashboard/DashboardLayout';
import {NavLinks} from './NavLinks';

export const SmallSideBar = () => {
  const {showSidebar, toggleSidebar} = useContext(DashboardContext);
  console.log(showSidebar)
  return (
    <SidebarWrapper>
      awdwad
      <div
        className={
          showSidebar ? 'sidebar-container show-sidebar' : 'side-container'
        }>
        <div className='content'>
          <button
            onClick={toggleSidebar}
            type='button'
            className='close-btn'>
            Icon
          </button>
          <header>logo</header>
          <NavLinks />
        </div>
      </div>
    </SidebarWrapper>
  );
};
