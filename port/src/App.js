import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About/About';
import Services from './components/Services/Services';
import Resume from './components/Resume/Resume';
import Connect from './components/Lets-connect/Connect';


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Resume/>
      <Connect/>
    </div>
  )
}

export default App