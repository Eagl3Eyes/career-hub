import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Main from './components/Layout/Main';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Appliedjobs from './components/Appliedjobs/Appliedjobs';
import Jobdetails from './components/Jobdetails/Jobdetails';
import Error from './components/Error/Error';
import Blog from './components/Blog/Blog';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:()=>fetch('/jobs.json'),
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/appliedjobs",
        element: <Appliedjobs></Appliedjobs>,
      },
      {
        path:"/jobdetails/:id",
        element: <Jobdetails></Jobdetails>,
        loader:({params})=>fetch(`/jobdetails/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/*",
        element: <Error></Error>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
