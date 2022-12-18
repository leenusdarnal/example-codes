import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'

import Home from './Components/Home'
// import About from './Components/About'
const LazyAbout = React.lazy(() => import('./Components/About'))
import Navbar from './Components/Navbar'
import OrderSummary from './Components/OrderSummary'
import NoMatch from './Components/NoMatch'
import Product from './Components/Product'
import FeatureProducts from './Components/FeatureProducts'
import NewProducts from './Components/NewProducts'
import Users from './Components/Users'
import UserDetails from './Components/UserDetails'
import Admin from './Components/Admin'
import Profile from './Components/Profile'
import { AuthProvider } from './Components/auth'
import Login from './Components/Login'
import RequiredAuth from './Components/RequiredAuth'

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='about' element={<About />} /> */}
          <Route
            path='about'
            element={
              <React.Suspense fallback='Loading .....'>
                {' '}
                <LazyAbout />
              </React.Suspense>
            }
          />
          <Route path='order-summary' element={<OrderSummary />} />
          <Route path='products' element={<Product />}>
            <Route index element={<FeatureProducts />} />
            <Route path='featured' element={<FeatureProducts />} />
            <Route path='new' element={<NewProducts />} />
          </Route>
          <Route path='users' element={<Users />}>
            <Route path=':userId' element={<UserDetails />} />
            <Route path='admin' element={<Admin />} />
          </Route>
          <Route path='*' element={<NoMatch />} />

          <Route
            path='profile'
            element={
              <RequiredAuth>
                <Profile />
              </RequiredAuth>
            }
          />
          <Route path='login' element={<Login />} />
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App
