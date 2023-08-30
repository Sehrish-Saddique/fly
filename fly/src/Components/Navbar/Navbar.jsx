import React,{useState} from 'react'
 
//Importing Icons
import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";

//Importing Images
 const Navbar = () => {

  //REmove the Navbar in small width screens

 const [active, SetActive] = useState("navBarMenu");
 const showNavBar = () => {
   SetActive("navBarMenu showNavBar");
 };
 const removeNavBar = () => {
   SetActive("navBarMenu");
 };


//Add background color to second Navbar
const [noBg, addBg] = useState("navBarMenu");
 const addBgColor = () => {
    if(window.scrollY>=10){
        addBg("navBarTwo navbar_with_bg")
    }
    else{
        addBg("navBarTwo")
    }
 };

window.addEventListener('scroll', addBgColor)







  return (
    <div className="navBar flex">
    <div className="navBarOne flex"> 
    <div>
    <SiConsul className="icon"/>
    </div>
    <div className="none flex">
        <li className='flex'> <BsPhoneVibrate className="icon"/>Support</li>
        <li className='flex'> <AiOutlineGlobal className="icon"/>Languages</li>
    </div>
    
    <div className="atb flex">
        <span>Sign In</span>
        <span>Sign Out</span>
     </div>
    </div>
   
   <div className={noBg}>
    <div className="logoDiv">
    <img width="48" height="48" src="https://img.icons8.com/doodle/48/airplane-take-off.png" alt="airplane-logo" className='logo'/>
   </div>

    <div className={active}>
       <ul className='menu flex'>
        <li onClick={removeNavBar} className='listItem'>Home</li>
        <li onClick={removeNavBar} className='listItem'>About</li>
        <li onClick={removeNavBar} className='listItem'>Offers</li>
        <li onClick={removeNavBar} className='listItem'>Seats</li>
        <li onClick={removeNavBar} className='listItem'>Destinations</li>
     
        <button onClick={removeNavBar}  className='btn flex btnOne'>
            Contact
        </button>
        </ul>
     </div>
     
        <div onClick={showNavBar} className="toggleIcon">
        <CgMenuGridO className='icon'/>
        </div>
    </div>
    </div>
  )
}

export default Navbar