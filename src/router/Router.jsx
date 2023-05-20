import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import ErrorPage from '../pages/shared/ErrorPage';
import AddToy from '../pages/add a toy/AddToy';
import AllToys from '../pages/all toys/AllToys';
import SingleToy from '../pages/all toys/SingleToy';
import MyToy from '../pages/my toys/MyToy';
import Update from '../pages/my toys/Update';
import PrivateRoute from './PrivateRoute';
import Blog from '../pages/blog/Blog';

const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage></ErrorPage>,
      element: <MainLayout></MainLayout>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/alltoys',
            element: <AllToys></AllToys>,
            loader: () => fetch('https://assignment-11-batch-7-server.vercel.app/toys'),
        },
        {
            path: '/toy/:id',
            element: <PrivateRoute><SingleToy></SingleToy></PrivateRoute>,
            loader: ({params}) => fetch(`https://assignment-11-batch-7-server.vercel.app/toys/${params.id}`),
        },
        {
            path: '/addtoy',
            element: <AddToy></AddToy>
        },
        {
            path: '/mytoys',
            element: <MyToy></MyToy>
        },
        {
            path: '/update/:id',
            element: <Update></Update>,
            loader: ({params}) => fetch(`https://assignment-11-batch-7-server.vercel.app/toys/${params.id}`),
        },
        {
            path: 'blog',
            element: <Blog></Blog>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'register',
            element: <Register></Register>
        },
      ]
    },
  ]);

export default router;