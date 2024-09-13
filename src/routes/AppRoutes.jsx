import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AuthLayout from '../layouts/authLayout/AuthLayout';
import Home from '../pages/home/Home';

const AppRoutes = () => {
  return (
    <div>

        <Router>
           <Routes>

              <Route path='/' element={ <Home />} />

              <Route element = {<AuthLayout />} >
                 <Route  />
              </Route>
              
           </Routes>




        </Router>
      
    </div>
  )
}

export default AppRoutes
