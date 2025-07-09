
import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Services from './components/Services'
import RecentWork from './components/RecentWork'
import Tools from './components/Tools'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection  />
      <About/>
      <Services/>
      {/* <RecentWork/>
      <Tools/> */}
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App