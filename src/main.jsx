import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Main from './components/Layout/Main';
import Statistics from './components/Statistics/Statistics';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      // {
      //   path: "/",
      //   element: <Home/>,
      //   loader:()=>fetch('/jobs.json'),
      // },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      // {
      //   path: "/appliedjobs",
      //   element: <Appliedjobs/>,
      // },
      // {
      //   path:"/jobdetails/:id",
      //   element:<Jobdetails/>,
      //   loader:({params})=>fetch(`/jobdetails/${params.id}`),
      // },
      // {
      //   path: "/blog",
      //   element: <Blog/>,
      // },
      
      // {
      //   path: "/*",
      //   element: <Error/>,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
