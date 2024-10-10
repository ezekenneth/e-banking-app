import React from 'react'
import Sidebar from '../../Components/sidebar/sidebar'
import SidebarNav from '../../Components/sidebarNav/sidebarNav'
import CardImg from "./../../assets/images/cardImg.png"
import "./Dashboard.css"

const Dashboard = () => {
  return (
    <div>
      
         <SidebarNav />
      
      <div className="row">
        <div className='col-md-3'>
          <Sidebar />
        </div>
        <div className='col-md-9 border-none '>
            <div className='row mt-2 m-md-3 m-sm-5'>
                <div className="col-md-8  text-white p-md-2d-flex justify-content-center ">
                      <div className='position-relative'>
                        <img src={CardImg} alt="" className='img-fluid card-size' />

                        <div className="price-name position-absolute top-0 start-0 pt-5 ps-3">
                            <h6> Account Name</h6>
                            <div>Eze kenneth</div>
                         </div>

                         <div className="price-name position-absolute top-0 end-0 pt-5 pe-3">
                            <h6>Available Balance</h6>
                            <div>$ 400.00</div>
                         </div>

                         <div className="price-name position-absolute bottom-0 start-0 pb-5 ps-3">
                            <h6> Account Name</h6>
                            <div>Eze kenneth</div>
                         </div>
                         <div className="price-name position-absolute bottom-0 start-50 translate-middle-x pb-5 ps-3">
                            <h6> Account Name</h6>
                            <div>Eze kenneth</div>
                         </div>

                         <div className="price-name position-absolute bottom-0 end-0 pb-5 pe-3">
                            <h6>Available Balance</h6>
                            <div>$ 400.00</div>
                         </div>
                      </div>            
                </div>
                <div className="col-md-4 bg-dark h-25 w-25 text-white p-2">
                      <div className="card bg-dark text-white">
                        <h5>Total Balance</h5>
                        <p>$ 400.00</p>
                      </div>

                     <div className=" bg-dark text-white">
                        <h5>Total Balance</h5>
                        <p>$ 400.00</p>
                      </div>
                </div>
                
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default Dashboard
