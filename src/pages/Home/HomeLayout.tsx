import React from 'react';
import {Outlet} from 'react-router-dom';

export const HomeLayout = () => {
  return (
    <div>
      <h1>HomeLayout</h1>
      <Outlet />
    </div>
  );
};
