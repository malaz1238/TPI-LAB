import Login from "./components/Login/Login";
import react from 'react'
import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";

import NotFound from './components/routes/NotFound'
import Shop from "./components/Shop/Shop";

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/Login",
      element: (<Login />),
    },
    {
      path: "/Shop",
      element: (<Shop />),
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
