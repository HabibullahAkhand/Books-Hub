import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './providers/AuthProvider';
import Error from './components/Error/Error';
import AllTouristsSpot from './components/All Tourists Spot/AllTouristsSpot';
import ViewDetails from './components/ViewDetails/ViewDetails';
import PrivateRoute from './routes/PrivateRoute';
import CountryPlace from './components/CountryPlace/CountryPlace';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement:<Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/allTouristsSpots',
        element: <AllTouristsSpot></AllTouristsSpot>
      },
      {
        path: '/countryPlace/:id',
        element: <CountryPlace></CountryPlace>,
        loader:()=>fetch('https://hello-world-server.vercel.app/Country')
      },
      {
        path:'/viewDetails/:_id',
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader:()=>fetch('https://hello-world-server.vercel.app/tourists')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
