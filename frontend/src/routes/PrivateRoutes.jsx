import React from 'react'
import {Route } from 'react-router-dom'
import Dashboard from '../pages/dashboard/Dashboard';



const PrivateRoutes = () => {

  return (
    <>
      <Route  path="/dashboard"  element={ <Dashboard />} />
        
    </>
  );
};


export default PrivateRoutes
