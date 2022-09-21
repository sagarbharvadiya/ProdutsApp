import React from 'react'
import HotelData from '../HotelData.json'

const Logo = () => {
    return (
        <>
            <div className='container'>
                <div className='logo'>
                    {HotelData.Logo.map((value) => {
                        return (
                            <>
                                <img src={value.img} alt="" key={value.id} />
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Logo