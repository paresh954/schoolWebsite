import React, { useState } from 'react'
import Navbar from './component/navbar/Navbar'
import Hero from './component/Hero/Hero'
import Programs from './component/Programs/Programs'
import Title from './component/Title/Title'
import About from './component/About/About'
import Campus from './component/Campus/Campus'
import Testimonials from './component/Testimonials/Testimonials'
import Contact from './component/Contact/Contact'
import Footer from './component/Footer/Footer'
import VideoPlayer from './component/VideoPlayer/VideoPlayer'

const App = () => {

  const [playState,setPlayState]=useState(false);


  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subTitle='Over Program' title='what we offer'/>
        <Programs />
        <About setPlayState={setPlayState}/>
        <Title subTitle='Gallery' title='Campus Photos '/>
        <Campus />
        <Title subTitle='Testimonials' title='what student says'/>
        <Testimonials />
        <Title subTitle='contact us' title='get in touch'/>
        <Contact />
        <Footer/> 
      </div>
        <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App