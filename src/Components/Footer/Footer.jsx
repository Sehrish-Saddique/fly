import React ,{useEffect}from 'react'
import { AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'
import { TiSocialFacebook } from 'react-icons/ti'
import { FaPinterest } from 'react-icons/fa'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div data-aos='fade-up' data-aos-duration='2300' className='footer'>
       <div className='sectionContainer container grid'>
        <div className='gridOne'>
          <div className='LogoDiv flex'>
            <img className='Logo' src='https://img.icons8.com/doodle/48/airplane-take-off.png' alt='logo'/>
          </div>
          <p>Your,mind should be stronger than your feelings, fly!</p>
          <div className='socialIcon flex'>
            <TiSocialFacebook className='icon'/>
            <AiOutlineTwitter className='icon'/>
            <AiFillYoutube className='icon'/>
            <FaPinterest className='icon'/>
          </div>
        </div>

        <div className='footerLinks'>
          <span className='linkTitle'>Information</span>
          <li><a href=''>Home</a></li>
          <li><a href=''>Explore</a></li>
          <li><a href=''>Flight Status</a></li>
          <li><a href=''>Travel</a></li>
          <li><a href=''>Check-In</a></li>
          <li><a href=''>Check-Out</a></li>
        </div>

        <div className='footerLinks'>
          <span className='linkTitle'>Quick Guide</span>
          <li><a href=''>FAQ</a></li>
          <li><a href=''>How to</a></li>
          <li><a href=''>Features</a></li>
          <li><a href=''>Baggage</a></li>
          <li><a href=''>Route Map</a></li>
          <li><a href=''>Our Communities</a></li>
        </div>


        <div className='footerLinks'>
          <span className='linkTitle'>Quick Guide</span>
          <li><a href=''>Chauffer</a></li>
          <li><a href=''>Our partners</a></li>
          <li><a href=''>Destination</a></li>
          <li><a href=''>Careers</a></li>
          <li><a href=''>Transportation</a></li>
          <li><a href=''>Programme Rules</a></li>
        </div>
       </div>  


       <div className='copyRight flex'>
        <p>
          Courtesy Design | Developed by <a href='www.linkedin.com/in/sehrish-saddique-51b55621a' target='_blank'>Sehrish</a>
        </p>
       </div>
    </div>
  )
}

export default Footer