import React from 'react'
import "./Login.css"

const Login = () => {
  return (
    <div className='container-fluid'>

        <div className=' d-flex flex-column align-items-center vh-100  justify-content-center'>
            <div className='login-container text-center'>
                <h2 className='mb-4'>Welcome to Back</h2>
                <form action="#" className=''>  
                 <h3 className=' pb-3'>Login</h3>
                <div className="input-group mb-3">
                    <span className="input-group-text login-color" id="login-email"><i className='bx bx-user fw-bold' ></i></span>
                    <input type="email" class="form-control" placeholder="User Email.." aria-label="UserEmail" aria-describedby="login-email" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text login-color" id="login-password"><i className='bx bx-lock-alt fw-bold '></i></span>
                    <input type="password" class="form-control" placeholder="password" aria-label="Username" aria-describedby="login-email" />
                </div>
                <div className='d-flex justify-content-between mt-2'>
                    <div> 
                       <div class="form-check">
                            <input className="form-check-input text-danger border-danger" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                Remember me
                            </label>
                        </div>
                    </div>
                    <div> <a href="#" className='text-decoration-none text-info'> Forgot password</a></div>
                </div>
                <div className='login-button  d-grid mt-4'>
                <button type="button" className="btn btn-danger">Login</button>
                </div>

            </form>
            </div>
        </div>
      
    </div>
  )
}

export default Login
