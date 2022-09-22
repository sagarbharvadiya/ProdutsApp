import React, { useState } from 'react'
import HotelData from "../HotelData.json";
import Button from '@mui/material/Button';
import Carousel from 'react-bootstrap/Carousel';


const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <>

            <Carousel activeIndex={index} onSelect={handleSelect}>
                {HotelData.Banner.map((value) => {
                    return (
                        <React.Fragment key={value.id}>
                            <div>
                                <Carousel.Item interval={1000}>
                                    <img className="d-block w-100" src={value.img} alt="First slide" />
                                    <Carousel.Caption>
                                        <h3>{value.title}</h3>
                                        <h1>{value.title1}</h1>
                                        <p>{value.text}</p>
                                        <Button variant="contained">Shop Now</Button>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </div>
                        </React.Fragment>
                    )
                })}
            </Carousel>

        </>
    )
}

export default Banner