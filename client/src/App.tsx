import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
  MyJobs,
} from "./pages";
import { CookiesProvider } from "react-cookie";
import { SingleJob } from "./pages/SingleJob/SingleJob";

export const checkDefaultTheme = () => {
  const isDarkTheme = true;
  document.body.classList.toggle("dark-theme", isDarkTheme);
  return isDarkTheme;
};
checkDefaultTheme();
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error404 />,
    children: [
      { index: true, element: <LandingPage /> },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
          { index: true, path: "all-jobs", element: <Alljobs /> },
          { path: ":status/:id", element: <Addjob /> },
          {
            path: "stats",
            element: <Stats />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "My-jobs",
            element: <MyJobs />,
          },
          {
            path: ":id",
            element: <SingleJob />,
          },
        ],
      },
    ],
  },
]);

export const App = () => {
  return (
    <CookiesProvider>
      <RouterProvider router={router} />
    </CookiesProvider>
  );
};
