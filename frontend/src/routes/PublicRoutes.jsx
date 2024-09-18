import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../pages/home/Home';
import Login from '../pages/login/Login'
import Register from '../pages/register/Register';

const PublicRoutes = () => {
    
  return (
    <>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={ <Login/>} />
        <Route path='/register' element={ <Register/>} />
    </>
  )
    
}

export default PublicRoutes
