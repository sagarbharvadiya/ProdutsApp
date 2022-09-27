import React from 'react'
import HotelData from '../HotelData.json'
// import Countdown from "react-countdown";
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
                                                    <span>{value.price}</span>
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