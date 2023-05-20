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
        loader: () => fetch('http://localhost:5000/toys')
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
        loader: ({ params }) => fetch(`http://localhost:5000/toys/${params.id}`),
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
