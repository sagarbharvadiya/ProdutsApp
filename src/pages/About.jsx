import React from 'react'
import HotelData from '../HotelData.json'
import Aboutdetails from '../components/About-details'
import Ourvision from '../components/Ourvision'
const About = () => {
  return (
    <>

      <section className='about'>
        <div className=' container'>
          <div className='row'>
            {HotelData.about.map((value) => {
              return (
                <React.Fragment key={value.id}>
                  <div className='col-md-12'>
                    <div className='title text-center'>
                      <h3>{value.title}</h3>
                      <h2>{value.heading}</h2>
                      <p>{value.p}</p>
                    </div>
                  </div>
                </React.Fragment>
              )
            })
            }
          </div>
        </div>
        <Aboutdetails />
        <Ourvision />
      </section>

    </>
  )
}

export default About