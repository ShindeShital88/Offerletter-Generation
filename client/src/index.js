import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CertificateForm from './View/Form/Form.js';
import Login from './View/Login/Login.js';
import InternshipOffer from './View/Letter/Letter.js';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const routes =createBrowserRouter([


{
    path:'/CertificateForm',
    element:<CertificateForm/>
},
{
    path:'/Login',
    element:<Login/>
},
{
    path:'/InternshipOffer',
    element:<InternshipOffer/>
}


])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <RouterProvider router={routes}/>
   </>
);




