import React, { Children } from 'react';
import Navbar from './components/navbar/Navbar';
import './App.scss';
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import Footer from './components/footer/footer';
import Home from './pages/home/Home';
import Gig from './pages/gig/Gig';
import Gigs from './pages/gigs/Gigs';
import Login from './pages/login/Login';
import Message from './pages/message/Message';
import Messages from './pages/messages/Messages';
import MyGigs from './pages/myGigs/MyGigs';
import Orders from './pages/orders/Orders';
import Register from './pages/register/Register';
import Add from './pages/add/Add';



function App() {
  const Layout = ()=>{
    return(
      <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:'/gigs',
          element:<Gigs/>
        },
        {
          path:'/gig/:id',
          element:<Gig/>
        },
        {
          path:'/add',
          element:<Add/>
        },
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/messages',
          element:<Messages/>
        },
        {
          path:'/message/:id',
          element:<Message/>
        },
        {
          path:'/mygigs',
          element:<MyGigs/>
        },
        {
          path:'/orders',
          element:<Orders/>
        },
        {
          path:'/register',
          element:<Register/>
        },
        
      ]
    },
  ]);
  return (
    <div className='App'>
     
      <RouterProvider router={router}/>
      
    </div>
  );
}

export default App;
