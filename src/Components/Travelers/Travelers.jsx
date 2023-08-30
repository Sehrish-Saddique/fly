import React,{useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

import paris from '../../assets/paris.jpg'
import user1 from '../../assets/user1.jpg'
import user2 from '../../assets/user2.jpg'
import user3 from '../../assets/user3.jpg'
import user4 from '../../assets/user4.jpg'
import user5 from '../../assets/user5.jpg'
import user6 from '../../assets/user6.jpg'

import new_york from '../../assets/new_york.jpg'
import tokyo from '../../assets/tokyo.jpg'
import london from '../../assets/london.jpg'
import sydney from '../../assets/sydney.jpg'
import rio_de_janeiro from '../../assets/rio_de_janeiro.jpg'


const travelers =[
  {
    id:1,
    destinationImage:paris,
    travelerImage:user1,
    travelerName:'John Doe',
    travelerHandle:'@johndoe'
  },
  {
    id: 2,
    destinationImage: new_york,
    travelerImage:user2,
    travelerName: "Jane Smith",
    travelerHandle: "@janesmith"
},
{
  id: 3,
  destinationImage: tokyo,
  travelerImage: user3,
  travelerName: "Alice Johnson",
  travelerHandle: "@alicej"
},
{
  "id": 4,
  "destinationImage": london,
  "travelerImage":  user4,
  "travelerName": "Michael Brown",
  "travelerHandle": "@mikebrown"
},


{
  "id": 5,
  "destinationImage": sydney,
  "travelerImage":  user5,
  "travelerName": "Emily Wilson",
  "travelerHandle": "@emilyw"
},

{
  "id": 6,
  "destinationImage": rio_de_janeiro,
  "travelerImage":  user6,
  "travelerName": "Carlos Rodriguez",
  "travelerHandle": "@carlosr"
}


]



const Travelers = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className='travelers conatiner section'>
          <div className='sectionContainer'>
          <h2>Top travelers of this month!</h2>
          <div className='travelersContainer grid'>
          {/* Single traveler */}
          {
          travelers.map(({id,destinationImage,travelerImage,travelerHandle,travelerName})=>{
              return(
          <div data-aos='fade-up' data-aos-duration='2300' key={id} className='singleTraveler'>
            <img src={destinationImage} className='destinationImage'></img>
            <div className='travelerDetails'>
              <div className="travelerPicture">
                <img src={travelerImage} className='travelerImage'></img>
              </div>
              <div className='travelerName'>
                <span>{travelerName}</span>
                <p>{travelerHandle}</p>
              </div>
            </div>
          </div>)
        })
          }
           
           

          </div>

          </div>

    </div>
  )
}

export default Travelers