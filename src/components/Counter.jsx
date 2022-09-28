import React, { useState } from 'react'
import HotelData from '../HotelData.json'
// import Countdown from "react-countdown";
import CountUp from "react-countup";
// import VisibilitySensor from "react-visibility-sensor";
const Counter = () => {

    return (
        <>
            <section className='counter'>
                <div className='container'>
                    <section className='count'>
                        <div className='row'>
                            {HotelData.Counter.map((value) => {
                                return (
                                    <React.Fragment key={value.id}>
                                        <div className='col-lg-3 col-md-6 col-sm-6'>
                                            <div className='single-count text-center'>
                                                <div className='count-icon'>
                                                    <img className='count-img' src={value.img} alt="" />
                                                </div>
                                                <h2 className='countdown'>
                                                    <CountUp
                                                        start={value.price - 60}
                                                        end={value.price}
                                                        duration={2.0}
                                                    >
                                                    </CountUp>
                                                </h2>
                                                <span>{value.text}</span>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                )
                            })
                            }
                        </div>
                    </section>
                </div>
            </section>

        </>
    )
}

export default Counter