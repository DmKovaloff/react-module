import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ContactsPage from "./components/pages/contacts/ContactsPage";
import AboutPage from "./components/pages/about/AboutPage";
import ProductsPage from "./components/pages/products/ProductsPage";
import SingleProductPage from "./components/pages/product/SingleProductPage";






const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const browserRouter = createBrowserRouter([
    {path:'/',
     element: <MainLayout/>,
     // errorElement:<ErrorLayout/>, // тут кастомная Error Page
    children:[
        {
            path:'about', element: <h2>This text in index.tsx </h2>
        },
        {
            element: <AboutPage/>, index: true
        },
        {
            path:'about2', element: <AboutPage/>
        },
        {
            path:'contacts', element: <ContactsPage/>
        },
        {
            path:'products', element: <ProductsPage/>
        },
        {
            path:'products/:id', element: <SingleProductPage/>
        },
    ]
    }
]);

root.render(
 <RouterProvider router={browserRouter}/>
);
