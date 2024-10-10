import React from 'react'
import "./Register"

const Register = () => {
  return (
    <div>

        <div className=' d-flex flex-column align-items-center vh-100  justify-content-center'>
            <div className='login-container text-center'>
                <h2 className='mb-4'>Welcome to E-bank</h2>
                <form action="#" className=''>  
                 <h3 className=' pb-3'>Register</h3>
                <div className="input-group mb-3">
                    <span className="input-group-text login-color" id="register-name"><i className='bx bx-user fw-bold' ></i></span>
                    <input type="text" className="form-control" placeholder="Full Name.." aria-label="UserName" aria-describedby="register-name" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text login-color" id="login-email"><i className='bx bx-envelope' ></i></span>
                    <input type="email" className="form-control" placeholder="Email Address.." aria-label="UserEmail" aria-describedby="login-email" />
                </div>

                
                <div>
                    <div className="input-group mb-3">
                        <span className="input-group-text login-color" id="login-password"><i className='bx bx-lock-alt fw-bold '></i></span>
                        <input type="password" className="form-control" placeholder="password" aria-label="Username" aria-describedby="login-email" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text login-color" id="login-password"><i className='bx bx-lock-alt fw-bold '></i></span>
                        <input type="password" className="form-control" placeholder="confirm password" aria-label="Username" aria-describedby="login-email" />
                    </div>
                </div>
                <div className='d-flex justify-content-between mt-2'>
                    <div> 
                       <div className="form-check">
                            <input className="form-check-input text-danger border-danger" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                 I Agree To The Privacy Policy
                            </label>
                        </div>
                    </div>
                </div>
                <div className='login-button  d-grid mt-4 pb-4'>
                  <button type="button" className="btn btn-danger">Login</button>
                </div>

                <div>Already have an Account <a href="#" className='text-decoration-none text-danger'> Log In</a></div>

            </form>
            </div>
        </div>
      
      
    </div>
  )
}

export default Register
