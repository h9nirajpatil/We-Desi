import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import Home from '../home/Home'
import Gallary from '../Gallary/Gallary'
import Sweets from '../sweets/Sweets'

function Dashboard() {
  return (
    <div>
        <Navbar/>
           {/* <Home/> */}
           {/* <Gallary/> */}
           <Sweets/>
        <Footer/>
    </div>
  )
}

export default Dashboard