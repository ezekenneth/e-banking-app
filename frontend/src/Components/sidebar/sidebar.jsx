import { useEffect } from "react"
import React  from 'react'
import "./sidebar.css"
import ProfileImage from "./../../assets/images/profile-image.jpg"


const sidebar = () => {

  useEffect(() => {
    const activeItemIndex = localStorage.getItem('activeItemIndex');
    if (activeItemIndex !== null) {

      $('.sidebar ul li').removeClass('active');
      $('.sidebar ul li').eq(activeItemIndex).addClass('active');
    }

    $('.sidebar ul li').on('click', function () {
      $('.sidebar li.active').removeClass('active');
      $(this).addClass('active');

    
      const index = $('.sidebar ul li').index(this);
      localStorage.setItem('activeItemIndex', index);
    });


    return () => {
      $('.sidebar ul li').off('click');
    };
  }, []);
 
  return (
    <div className=''>     

      <div className="sidebar vh-100" id="side_nav">
            
            <ul className="list-unstyled px-2 ">
                <li className="active"><a href="#" class="text-decoration-none px-3 py-2 fw-bold d-block"><i className="fa fa-home pe-3" aria-hidden="true"></i>Dashboard</a></li>
                <li className=""><a href="#" class="text-decoration-none px-3 py-2 fw-bold d-block"><i className="fa fa-user pe-3" aria-hidden="true"></i>Profile</a></li>
                <li className=" dropdown"><a href="#" class=" dropdown-toggle text-decoration-none px-3 py-2 fw-bold d-block" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" ><i className='bx bx-money-withdraw fw-bold pe-3'></i>Deposite Money</a>
                  <div  className="collapse bg-dark" id="collapseExample">
                      <ul className="card card-body list-unstyled bg-dark">
                        <li><a className="dropdown-item text-white pb-3" href="#">Deposite</a></li>
                        <li><a className="dropdown-item text-white pb-3" href="#">Pending Deposit</a></li>
                        <li><a className="dropdown-item text-white pb-3" href="#">Aproved Deposite</a></li>
                        <li><a className="dropdown-item text-white pb-3" href="#">Rejected Deposite</a></li>
                      </ul>  
                  </div>             
                </li>
                <li className=" dropdown"><a href="#" className=" dropdown-toggle text-decoration-none px-3 py-3 fw-bold d-block" type="button" data-bs-toggle="collapse" data-bs-target="#transferLog" aria-expanded="false" ><i className='bx bx-money-withdraw fw-bold pe-3'></i>Transfer Log</a>
                  <div  className="collapse bg-dark" id="transferLog">
                      <ul className="card card-body list-unstyled bg-dark">
                        <li><a className="dropdown-item text-white pb-3" href="#">Transfer Log</a></li>
                        <li><a className="dropdown-item text-white pb-3" href="#">Recieved Log</a></li>
                      </ul>  
                  </div>             
                </li>
                <li className=" dropdown"><a href="#" className=" dropdown-toggle text-decoration-none px-3 py-3 fw-bold d-block" type="button" data-bs-toggle="collapse" data-bs-target="#withdraw" aria-expanded="false" ><i className='bx bx-money-withdraw fw-bold pe-3'></i>Withdraw</a>
                  <div  className="collapse bg-dark" id="withdraw">
                      <ul class="card card-body list-unstyled bg-dark">
                        <li><a className="dropdown-item text-white pb-3" href="#">Withdraw</a></li>
                        <li><a className="dropdown-item text-white pb-3" href="#">Withdraw Log</a></li>
                      </ul>  
                  </div>             
                </li>
                <li className=" dropdown"><a href="#" className=" dropdown-toggle text-decoration-none px-3 py-3 fw-bold d-block" type="button" data-bs-toggle="collapse" data-bs-target="#requestMoney" aria-expanded="false" ><i className='bx bx-money-withdraw fw-bold pe-3'></i>Request Money</a>
                  <div  className="collapse bg-dark" id="requestMoney">
                      <ul class="card card-body list-unstyled bg-dark">
                        <li><a className="dropdown-item text-white pb-3" href="#">Send Request</a></li>
                        <li><a className="dropdown-item text-white pb-3" href="#">Send Request</a></li>
                      </ul>  
                  </div>             
                </li>
                <li class=""><a href="#" className="text-decoration-none px-3 py-3 d-block"><i className="fa fa-bell pe-3" aria-hidden="true"></i>Notification</a></li>

            </ul>

            <hr className="text-white" />

            <ul class="list-unstyled px-2"> 
                <li class=""><a href="#" className="text-decoration-none px-3 py-3 d-block"><i className='bx bx-envelope pe-3 fw-bold' ></i>Support</a></li>
                <li class=""><a href="#" className="text-decoration-none  px-3 py-3 d-block"><i className="fa fa-sign-out pe-3" aria-hidden="true"></i>Logout</a></li>


            </ul>


            <div>
              <div className="profile-image">
                  <img src="" alt="" />
              </div>
            </div>

      </div>

       
     
    </div>
    
  )
}

export default sidebar
