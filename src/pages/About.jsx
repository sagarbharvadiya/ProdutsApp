import React from 'react'
import HotelData from '../HotelData.json'
import Aboutdetails from '../components/About-details'
import Ourvision from '../components/Ourvision'
import Counter from '../components/Counter'
import Ourteam from '../components/Ourteam'
import Footernew from '../components/Footernew'
const About = () => {
  return (
    <>
      <div className='breadcrumb-area'>
        <div className='container'>
          <div className='row'>
            <div className='top'>
              <a aria-current="page" className="active" href="/">Home</a>
              <span> /</span>
              <span to="/about">About us</span>
            </div>
          </div>
        </div>
      </div>

      <section className='about'>
        <div className='container'>
          <div className='row'>
            {HotelData.about.map((value) => {
              return (
                <React.Fragment key={value.id}>
                  <div className='col-md-12'>
                    <div className='title text-center'>
                      <h5>{value.title}</h5>
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
        <Counter />
        <Ourteam />
      </section>
      <Footernew/>

    </>
  )
}

export default About