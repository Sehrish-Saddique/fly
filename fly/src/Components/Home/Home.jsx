import React, { useEffect } from 'react'
import airplane from '../../assets/airplane.png'
import video from '../../assets/video.mp4'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Home = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className="home flex container">

      <div className="mainText">
        <h1 data-aos='fade-up' data-aos-duration='2300'>Create Ever-lasting Memories with us</h1>
      </div>

      <div className='homeImages flex'>
      <div className="videoDiv">  
      <video className="video"  src={video}   autoPlay loop muted></video>
      </div>
        <img src={airplane} className='plane'/>
      </div>
    </div>
  )
}

export default Home