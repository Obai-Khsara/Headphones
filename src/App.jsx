import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { UpdateFollower } from 'react-mouse-follower'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import Banner from './Components/Banner/Banner'
import BannerText from './Components/Banner/BannerText'
import Blogs from './Components/Blogs/Blogs'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <main className='overflow-x-hidden'>

      <UpdateFollower
      mouseOptions={{
        backgroundColor: "white",
        zIndex: 999,
        followSpeed: 1.5
      }}
      >
        <Navbar/>
        <Hero/>
      </UpdateFollower>




      <UpdateFollower
      mouseOptions={{
        backgroundColor: "black",
        zIndex: 999,
        followSpeed: 1.5
      }}
      >
        <Services/>
        <Banner/>
        <BannerText/>
        <Blogs/>
        <Footer/>
      </UpdateFollower>

      
    </main>
  )
}

export default App