import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CertificateForm from './View/Form/Form.js';
import Login from './View/Login/Login.js';
import InternshipOffer from './View/Letter/Letter.js';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import OfferletterData from "./View/Offerletter/Offerletterdata.js";
const routes =createBrowserRouter([


{
    path:'/form',
    element:<CertificateForm/>
},
{
    path:'/',
    element:<Login/>
},
{
    path:'/InternshipOffer',
    element:<InternshipOffer/>
},
{

    path:'/OfferletterData',
    element:<OfferletterData/>
}

])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <RouterProvider router={routes}/>
   </>
);




