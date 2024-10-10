import React from 'react'
import "./sidebarNav.css"
import ProfileImage from "./../../assets/images/profile-image.jpg"

const sidebarNav = () => {
  return (
    <div className='nav-body'>
       <div className="nav d-flex justify-content-between pt-4 pb-1 px-3">
            <div className='nav-logo'>
                <span>E-bank</span>
            </div>
            <div className='nav-list  d-flex justify-content-around '>

          
               <div className='  px-3'>
                   <button type="button" className="btn btn-info btn-sm  position-relative rounded-circle">
                        <i className='bx bx-bell' ></i>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            99+
                            <span className="visually-hidden">unread messages</span>
                        </span>
                    </button>
                 </div>

                 <div className='  px-3'>
                   <button type="button" className="btn btn-info btn-sm position-relative rounded-circle">
                        <i className='bx bx-message-dots' ></i>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            99+
                            <span className="visually-hidden">unread messages</span>
                        </span>
                    </button>
                 </div>

                 <div className="profile-toggle d-flex px-3">
                      
                        <div className="profile-image pb-2 justify-content-center" data-bs-toggle="dropdown">
                           <img src={ProfileImage} alt="" className=" rounded-circle  custom-image-size" />    
                        </div>
                    <div type="button" className=" mt-2 ms-2 transperant text-white dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                
                    </div>
                    <ul class="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Profile</a></li>
                      <li><a className="dropdown-item" href="#">Settings</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item" href="#">Separated link</a></li>
                    </ul>
                </div>
            </div>
       </div>
    </div>
  )
}

export default sidebarNav
