import React ,{useEffect}from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Subscribers = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])


  return (
    <div data-aos='fade-up' data-aos-duration='2300' className='subscribe section'>
    <div className='sectionContainer container'>
      <h2>Subscribe NewLetters & get Latest News</h2>
    <div className='inputDiv flex'>
      <input type='text' placeholder='Enter your email address'/>
      <button className="btn">Subscribe</button>
    </div>

    </div>

    </div>
  )
}

export default Subscribers