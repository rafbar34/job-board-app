import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path:'/',
    element:<h1>test</h1>
  },
  {
    path:'/test',
    element:<h1>tes2t</h1>
  }
])

export const App = () => {
  return <RouterProvider router={router}/>
}
