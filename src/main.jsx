import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home';
import Root from './Component/Root';
import ErrorPage from './Component/ErrorPage';
import Dashboard from './Component/Dashboard';
import ProductDetails from './Component/ProductDetails';
import AboutUs from './Component/AboutUs';
import Statistics from './Component/Statistics';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "product/:product_id",
        element: <ProductDetails></ProductDetails> ,
        loader: () => fetch('/Product.json')
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        loader: () => fetch('/Product.json')
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "aboutUs",
        element: <AboutUs></AboutUs>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
 