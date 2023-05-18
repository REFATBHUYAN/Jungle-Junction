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
            loader: () => fetch('http://localhost:5000/toys'),
        },
        {
            path: '/toy/:id',
            element: <SingleToy></SingleToy>,
            loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`),
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
            loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`),
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