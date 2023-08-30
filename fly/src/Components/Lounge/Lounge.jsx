import React ,{useEffect}from 'react'
import grid from '../../assets/grid2.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Lounge = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className='lounge container section'>
    <div className='sectionContainer grid'>
    <div  data-aos='fade-left' data-aos-duration='2300' className='imgDiv'>
      <img src={grid} alt="lounge"></img>
    </div>
    <div className='textDiv'>
      <h2  data-aos='fade-down' data-aos-duration='2300'>Unaccompanied Minor Lounge</h2>
      <div className='grids grid'>
    {/* Single Grid */}
      <div  data-aos='fade-down' data-aos-duration='2300' className='singlegrid'>
        <span className='gridTitle'>
          Help through the airport
        </span>
        <p>
          You can also call airlines from your phone and book a flight for your child to one of your favorite destinations.
        </p>
      </div>
      

      {/* Single Grid */}
      <div  data-aos='fade-down' data-aos-duration='2300' className='singlegrid'>
        <span className='gridTitle'>
          Care on the flight
        </span>
        <p>
          You can also call airlines from your phone and book a flight for your child to one of your favorite destinations.
        </p>
      </div>

      {/* Single Grid */}
      <div  data-aos='fade-down' data-aos-duration='2300' className='singlegrid'>
        <span className='gridTitle'>
          Priority boarding
        </span>
        <p>
          You can also call airlines from your phone and book a flight for your child to one of your favorite destinations.
        </p>
      </div>

      {/* Single Grid */}
      <div  data-aos='fade-down' data-aos-duration='2300' className='singlegrid'>
        <span className='gridTitle'>
          Chauffer-drive service
        </span>
        <p>
          You can also call airlines from your phone and book a flight for your child to one of your favorite destinations.
        </p>
      </div>
    </div>
    </div>
    
    </div>

    </div>
  )
}

export default Lounge