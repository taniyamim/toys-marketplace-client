import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Error from './components/Error/Error';
import AuthProvider from './Providers/AuthProvider';
import AllToys from './components/AllToys/AllToys';
import ToysDetails from './components/ToysDetails/ToysDetails';
import PrivateRoute from './components/Routes/PrivateRoute';
import AddAToy from './components/AddAToy/AddAToy';
import MyToys from './components/MyToys/MyToys';
import UpdateToy from './components/UpdateToy/UpdateToy';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
        loader: () => fetch('https://toys-marketplace-server-taniyamim.vercel.app/toys')
      },
      {
        path: "/addAToy",
        element: <AddAToy></AddAToy>,
      },
      {
        path: "/blogs",
        element: <Blog></Blog>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/toyDetails/:id",
        element: <PrivateRoute><ToysDetails></ToysDetails>,</PrivateRoute>,
        loader: ({ params }) => fetch(`https://toys-marketplace-server-taniyamim.vercel.app/toys/${params.id}`),
      },
      {
        path: "/updateToy/:id",
        element: <PrivateRoute> <UpdateToy></UpdateToy></PrivateRoute>,
        loader: ({ params }) => fetch(`https://toys-marketplace-server-taniyamim.vercel.app/toys/${params.id}`),
      },
      {
        path: "/myToys",
        element: <PrivateRoute> <MyToys></MyToys></PrivateRoute>,
        loader: () => fetch('https://toys-marketplace-server-taniyamim.vercel.app/toys')
      },
      
    ]
  },
  {
    path: '*',
    element: <Error></Error>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
