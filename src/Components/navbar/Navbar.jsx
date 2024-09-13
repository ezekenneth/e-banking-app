import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>






        <nav className="navbar navbar-expand-lg ps-3 py-2 glass-container fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">E-bank</a>                    
              
            <a className="nav-link ms-auto text-black me-3 d-block d-lg-none" href="#">Login</a>            
            <a href="#" className="btn btn-info btn-sm d-block d-lg-none ">Register</a>

            <a className="btn navbar-toggler btn-custom" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </a>
      

            <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-2 me-5 p-2 list-color">
                <li className="nav-item fw-bold  ">
                  <a className="nav-link active list-color" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fw-bold list-color" href="#">Services</a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link fw-bold list-color" aria-disabled="true" href="#">About Us</a>
                </li>
          
              </ul>
              
             
                  <a className="nav-link text-black ms-auto pe-5 d-none d-lg-block list-color fw-bold" aria-disabled="true" href="#">Login</a>
              <a href="#" className="btn btn-info ms-2 d-none d-lg-block px-5 fw-bold">Register</a>
            </div>
          </div>
      </nav>
    </div>
  )
}

export default Navbar
