import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

import Home from './pages/home/Home'
import Add from './pages/add/Add'
import Gig from './pages/gig/Gig'
import Gigs from './pages/gigs/Gigs'
import Messages from './pages/messages/Messages'
import Message from './pages/message/Message'
import MyGigs from './pages/myGigs/MyGigs'
import Order from './pages/orders/Order'
import Login from './pages/login/Login'
import Register from './pages/register/Register'

import './App.scss'

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/login', element: <Login /> },
        { path: '/register', element: <Register /> },
        { path: '/gigs', element: <Gigs /> },
        { path: '/gig/:id', element: <Gig /> },
        { path: '/orders', element: <Order /> },
        { path: '/mygigs', element: <MyGigs /> },
        { path: '/add', element: <Add /> },
        { path: '/messages', element: <Messages /> },
        { path: '/message/:id', element: <Message /> },
      ],
    },
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
