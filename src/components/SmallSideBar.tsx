import React, { useContext } from 'react';
import {links} from '../utils/Links';
import {Link, NavLink} from 'react-router-dom';
import { SmallSidebarWrapper } from '../css/NavBars/SmallSidebar';
import { DashboardContext } from '../pages/Dashboard/DashboardLayout';

export const SmallSideBar = () => {
  const {showSidebar, toggleSidebar} = useContext(DashboardContext);
  return (
    <SmallSidebarWrapper>
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
          <div className='nav-links'>
            {links.map((link) => (
              <NavLink
                end
                to={link.path}
                className={'nav-link'}
                key={link.title}>
                <span className='icon'>{link.title}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </SmallSidebarWrapper>
  );
};
