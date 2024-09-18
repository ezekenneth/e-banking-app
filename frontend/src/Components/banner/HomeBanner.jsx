import React from 'react'
import "./Homebanner.css"
import BannerDesktop from "../../assets/images/banner-image/BannerDesktop.png"
import BannerMobile from "../../assets/images/banner-image/BannerrMobile.png"
const HomeBanner = () => {
  return (
    <div>

            <div>
                {/* Card with Image and Overlay Text */}

                <div class="card text-black border-0">
                    <img src={BannerDesktop} class="card-img img-fluid d-none d-md-block border-0 custom-image" alt="Home banner" />
                    <img src={BannerMobile} class="card-img img-fluid d-block d-md-none border-0" alt="Home banner" />
                    
                    
                    <div class="card-img-overlay topD-25 endD-25 d-none d-md-block mb-4 tr-1">
                        <h5 class="card-title text-color fw-bolder fs-custom px-3 tr-1">Move your money effortlessly</h5>
                        <p class="card-text  px-3 pb-6">Easiest way to Securely  Send, Receive, Save and Invest your Money</p>
                        <span className='ps-3'>
                          <a href="#" className='btn btn-dark text-white fw-bolder rounded-pill px-5 py-2 ms-5 mt-4'>Sign Up Now</a>
                        </span>
                        
                    </div>
                    <div class="card-img-overlay topM-25 d-block d-md-none d-flex flex-column  align-items-center tr-1">
                        <h5 class="card-title text-color fw-bolder fs-3 px-3">Move your money effortlessly</h5>
                        <p class="card-text px-3 pb-2 fw-light">Easiest way to Securely  Send, Receive, Save and Invest your Money</p>
                        <span className=''>
                          <a href="#" className='btn btn-dark text-white rounded-pill px-3  mt-2'>Sign Up Now</a>
                        </span>               
                    </div>
                </div>
            </div>
      
    </div>
  )
}

export default HomeBanner
