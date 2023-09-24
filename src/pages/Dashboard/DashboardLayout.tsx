import React, {createContext, useContext, useState} from 'react';
import {Outlet} from 'react-router-dom';
import {SmallSideBar} from '../../components/SmallSideBar';
import {BigSiderBar} from '../../components/BigSideBar';
import {NavBar} from '../../components/NavBar';
import {DashboardWrappter} from '../../css/Dasboard/DashboardWrapper';

export const DashboardContext = createContext({});

export const DashboardLayout = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    console.log('dark');
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    console.log('logout');
  };

  return (
    <DashboardContext.Provider
      value={{
        showSidebar,
        isDarkTheme,
        toggleDarkTheme,
        toggleSidebar,
      }}>
      <DashboardWrappter>
        <main className='dashboard'>
          <SmallSideBar />
          <BigSiderBar />
          <div>
            <NavBar />
            <div className='dashboard-page'>
              <Outlet />
            </div>
          </div>
        </main>
      </DashboardWrappter>
    </DashboardContext.Provider>
  );
};
