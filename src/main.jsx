import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import ErrorLPage from './components/ErrorPage/ErrorLPage';
import JobsDetails from './components/jobsDetails/jobsDetails';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorLPage></ErrorLPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/appliedJobs',
        element: <AppliedJobs></AppliedJobs>
      },
     
      {
        path: 'job/:id',
        element: <JobsDetails></JobsDetails>,
        loader: () => fetch('jobs.json'),
      },
     
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
