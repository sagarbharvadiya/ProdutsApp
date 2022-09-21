import React from 'react'
import HotelData from '../HotelData.json'

const Logo = () => {

    return (
        <>
            <div className='logo'>
                {HotelData.Logo.map((value) => {
                    return (
                        <>
                            <a href='home'>
                                <img id='myImage' src={value.img} alt="" key={value.id} />
                            </a>
                        </>
                    )
                })}
            </div>

        </>
    )
}

export default Logo;