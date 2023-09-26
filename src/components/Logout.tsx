import React, {useContext, useState} from 'react';
import {DashboardContext} from '../pages/Dashboard/DashboardLayout';

export const Logout = () => {
  const [showLogout, setShowLogout] = useState(false);
  const {user, logoutUser} = useContext(DashboardContext);
  return (
    <LogoutWrapper>
      <button
        onClick={() => setShowLogout(!showLogout)}
        type='button'
        className='btn logout-btn'>
        {user}
      </button>
      <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
        <button
          onClick={logoutUser}
          type='button'
          className='dropdown-btn'>
          logout
        </button>
      </div>
    </LogoutWrapper>
  );
};
