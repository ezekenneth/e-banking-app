import React from 'react'
import { BrowserRouter as Router, Routes} from 'react-router-dom'
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes'


const AppRoutes = () => {
  return (
        <Router>
           <Routes>
               {PublicRoutes()}
               {PrivateRoutes()}       
           </Routes>
        </Router>
      
  );
};

export default AppRoutes
