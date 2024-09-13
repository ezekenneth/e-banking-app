import React from 'react'
import Navbar from '../../Components/navbar/Navbar'
import HomeBanner from '../../Components/banner/HomeBanner'
import Main from '../../Components/main/Main'
import Footer from '../../Components/footer/Footer'


const Home = () => {
  return (
    <div>
       <Navbar />
       <HomeBanner />
       <Main />
       <Footer />
    </div>
  )
}

export default Home
