import React from 'react'
import HotelData from "../HotelData.json";
import Button from '@mui/material/Button';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


const Banner = () => {

    return (
        <>
            <div className='container p-0'>
                <AwesomeSlider className=''>
                    {HotelData.Banner.map((value) => {
                        return (
                            <React.Fragment key={value.id}>
                                <div className='position-relative'>
                                    <img className="d-block w-100" src={value.img} alt="First slide" />
                                    <div className='position-absolute'>
                                        <h3>{value.title}</h3>
                                        <h1>{value.title1}</h1>
                                        <p>{value.text}</p>
                                        <Button variant="contained">Shop Now</Button>
                                    </div>
                                </div>

                            </React.Fragment>
                        )
                    })}
                </AwesomeSlider>

            </div>



        </>
    )
}

export default Banner