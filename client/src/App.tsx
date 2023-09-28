import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {
  HomeLayout,
  Login,
  Register,
  DashboardLayout,
  LandingPage,
  Error404,
  Addjob,
  Stats,
  Alljobs,
  Profile,
  Admin,
} from './pages';

export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
  document.body.classList.toggle('dark-theme', isDarkTheme);
  return isDarkTheme;
};
checkDefaultTheme()
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error404 />,
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
        element: <DashboardLayout/>,
        children: [
          {
            index: true,
            element: <Addjob />,
          },
          {
            path: 'stats',
            element: <Stats />,
          },
          {
            path: 'all-jobs',
            element: <Alljobs />,
          },
          {
            path: 'profile',
            element: <Profile />,
          },
          {
            path: 'admin',
            element: <Admin />,
          },
        ],
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
