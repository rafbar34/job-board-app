import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {HomeLayout} from './pages/Home/HomeLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
  },
  {
    path: '/test',
    element: <h1>tes2t</h1>,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
