import React from 'react'
import Navbar from './components/navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Service from './components/Services/Service'
import Mywork from './components/Mywork/Mywork'
import Contant from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
function App() {
  return (

    <div>
      <Navbar />
      <Hero />
      <About />
      <Service/>
      <Mywork/>
      <Contant/>
      <Footer/>
     
    </div>
    
  )



}

export default App