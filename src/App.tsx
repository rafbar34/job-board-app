import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {
  HomeLayout,
  Login,
  Register,
  DashboardLayout,
  LandingPage,
} from './pages';
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {index: true, element: <LandingPage />},
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
