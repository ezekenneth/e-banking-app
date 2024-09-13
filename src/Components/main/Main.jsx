import React, { useState, useEffect } from 'react'
import "./Main.css"
import WomanPic from "../../assets/images/womanpic.png"
import Lowfee from "../../assets/images/logo/low-fee.png"
import Fast from "../../assets/images/logo/fast.png"
import Easy from "../../assets/images/logo/easy.png"
import Anounce from "../../assets/images/logo/anounce.png"
import RecieveImg from "../../assets/images/logo/recieve.png"
import SendImg from "../../assets/images/logo/send.png"
import InvestImg from "../../assets/images/logo/invest.png"
import LoanImg from "../../assets/images/logo/loan.png"

const Main = () => {
        // Define states for the counters
        const [activeUsers, setActiveUsers] = useState(0);
        const [totalDeposit, setTotalDeposit] = useState(0);
        const [totalWithdraw, setTotalWithdraw] = useState(0);
        const [totalInvestment, setTotalInvestment] = useState(0);
      
        // Function to handle the counting effect
        const animateValue = (start, end, duration, setter) => {
          const range = end - start;
          let current = start;
          const increment = end > start ? Math.ceil(range / (duration / 10)) : -Math.ceil(range / (duration / 10));
          const stepTime = Math.abs(Math.floor(duration / (range / increment)));
      
          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              setter(end);
              clearInterval(timer);
            } else {
              setter(current);
            }
          }, stepTime);
        };
      
        // Run the counter animations on mount
        useEffect(() => {
          animateValue(0, 500000, 2000, setActiveUsers); // 500K in 3 seconds
          animateValue(0, 1000000000, 2000, setTotalDeposit); // 1B in 3 seconds
          animateValue(0, 600000000, 2000, setTotalWithdraw); // 600M in 3 seconds
          animateValue(0, 900000000, 2000, setTotalInvestment); // 900M in 3 seconds
        }, []);

  return (

   <div className='overflow-hidden'>
        <section>
            <div className='bg-black text-white fw-bold text-center p-2'>
                    <div className="row row-cols-2 row-cols-md-4  px-5 py-4">
                        <div className="col border py-3">
                            <span className='fs-3 text-danger' >{(activeUsers / 1000).toFixed(0)}K</span>
                            <p>Active Users</p>
                        </div>
                        <div className="col border py-3">
                            <span className='fs-3 text-danger'>{(totalDeposit / 1000000000).toFixed(1)}B</span>
                            <p>Total Deposit</p>
                        </div>

                        <div className="col border py-3">
                            <span className='fs-3 text-danger'>{(totalWithdraw / 1000000).toFixed(0)}M</span>
                            <p>Total Withdraw</p>
                        </div>

                        <div className="col border py-3">
                            <span className='fs-3 text-danger'>{(totalInvestment / 1000000).toFixed(0)}M</span>
                            <p>Total Investment</p>
                        </div>
                    </div>
            </div>
        </section>
        <section className='bg-light'>
                <div className='row' >
                    <div className='col col-12 col-lg-6'>
                       <img src={WomanPic} alt="happy-customer" className=' w-100  h-100 ' />
                      
                    </div>
                    <div className='col col-12 col-lg-6 bg-light p-5 container-fluid'>
                       <h3 className='fw-bold fs-1 pt-3 pb-3'>Transfer Money Instantly</h3>
                        <div>
                            <div className='d-flex mt-2'>
                                <img src={Lowfee} alt="" className=' logo-s rounded-1' /> 
                                <span className='ps-3 '>
                                    <h3>Low fee</h3>
                                    <p className=''>For Your Loved One, Every Dollar You Save Is A Dollar More.</p>
                                </span>
                            </div>
                            <div className='d-flex mt-2'>
                                <img src={Fast} alt="" className=' logo-s rounded-1' /> 
                                <span className='ps-3 '>
                                    <h3>Fast</h3>
                                    <p className=''>Send Whenever. Most Transfers Take A Few Seconds To Complete.</p>
                                </span>
                            </div>
                            <div className='d-flex mt-2'>
                                <img src={Easy} alt="" className=' logo-s rounded-1' /> 
                                <span className='ps-3 '>
                                    <h3>Simple</h3>
                                    <p className=''>With Only A Few Taps, Send To Mobile Wallets Or Cash Pickup Locations worldwide</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
        <section>
            <div className=' '>
                 <div className='d-flex justify-content-center'>
                    <img src={Anounce} alt="" className='img-fluid' /> 
                 </div>
                <div className='row row-cols-2 row-cols-md-4 p-2 '>

                    <div className="col mt-3 text-center">
                      <img src={SendImg} alt="" className='w-50 h-50 ' />
                      <h3 className='fw-bold'>Send money</h3>
                      <p>Send worldwide or to another E-bank customer.</p>
                    </div>

                    <div className="col mt-3 text-center ">
                      <img src={RecieveImg} alt="" className='w-50 h-50 ' />
                      <h3 className='fw-bold'>Recieve money</h3>
                      <p>Send worldwide or to another E-bank customer.</p>
                    </div>

                    <div className="col mt-3 text-center">
                      <img src={InvestImg} alt="" className='w-50 h-50' />
                      <h3 className='fw-bold'>Invest Money</h3>
                      <p>Invest and Earn Massively</p>
                    </div>

                    <div className="col mt-3 text-center">
                      <img src={LoanImg} alt="" className='w-50 h-50' />
                      <h3 className='fw-bold'>Collect Loan</h3>
                      <p>Premium Users have Acces to Loan</p>
                    </div>
                </div>
            </div>
        </section>
       
   </div>
  )
}

export default Main
