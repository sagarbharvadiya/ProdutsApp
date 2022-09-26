import React from 'react'
import { Link } from 'react-router-dom'
import HotelData from '../HotelData.json'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const Aboutdetails = () => {
    return (
        <>
            <div className=' container'>
                <div className='row'>
                    {
                        HotelData['about-details'].map((value) => {
                            return (
                                <React.Fragment key={value.id}>
                                    <div className='col-lg-4 col-md-4'>
                                        <div className='single-banner mb-5'>
                                            <Link to={process.env.PUBLIC_URL + "/shop/product/" + HotelData.productdetails.id}>
                                                <img src={value.img} alt="" />
                                            </Link>
                                            <div className='banner-content'>
                                                <h3>{value.heading}</h3>
                                                <h4>{value.text}<span>{value.price}</span></h4>
                                                <Link to={process.env.PUBLIC_URL + "/shop/product/" + HotelData.productdetails.id}>
                                                    <ArrowCircleRightIcon />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </React.Fragment>
                            )
                        })
                    }


                </div>
            </div>

        </>
    )
}

export default Aboutdetails