import React from 'react'
import "./Footer.css"

const footer = () => {
  return (
    <div>

        <section className='footer-section bg-black p-5 text-white'>
            <div className="row  row-cols-1  row-cols-md-3">
                <div className="col">
                    <h3 className='mb-3 mt-4 fw-bold'>E-Bank</h3>
                    <p>we are the best, join us and make more money</p>
                </div>
                <hr className='d-block d-md-none'/>
                <div className="col ">
                 <h2 className='mb-3 mt-4 fw-bold'>Our Company</h2>
                 <h5><a href="#" className='text-decoration-none text-white'>Home</a></h5>
                 <h5><a href="#" className='text-decoration-none text-white' >About</a></h5>
                 <h5> <a href="#"className='text-decoration-none text-white' >Privacy Policy</a></h5>
                 <h5><a href="#" className='text-decoration-none text-white' >Terms & Conditions</a></h5>
                </div>
                <hr className='d-block d-md-none'/>
                <div className="col fw-bold">
                  <h2 className='mb-3 mt-4 fw-bold'>Contact</h2>
                  <p className='d-flex'>
                    <i class='bx bx-location-plus text-white fs-2 pe-2 '> </i>
                    <span className='pt-2'>22 john umunna street</span>
                  </p>
                  <p className='d-flex'>
                    <i class='bx bx-phone-call text-white fs-2 pe-2'></i>
                    <span className='pt-2'>+1 5589 55488 55s</span>
                  </p>
                  <p className='d-flex'>
                    <i class='bx bx-location-plus text-white fs-2 pe-2 '> </i>
                    <span className='pt-2'>Info@example.com</span>                  
                  </p>
                  <div className="newsletter-input mt-4">
                    <h5>Subscribe To Our Newsletter:</h5>
                    <div class="input-group mb-3">
                      <input type="text" class="form-control" placeholder="Email address" aria-label="Email address" aria-describedby="newsletter-input" />
                      <span class="input-group-text bg-danger text-white" id="newsletter-input">Subscribe</span>
                    </div>
                  </div>
                </div>
            </div>
        </section>
      
    </div>
  )
}

export default footer
