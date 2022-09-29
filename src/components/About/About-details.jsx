import React from 'react'
import { Link } from 'react-router-dom'
import Data from '../../Data.json'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const Aboutdetails = () => {
    return (
        <>
            <div className='banner-area'>
                <div className='container'>
                    <div className='row'>
                        {
                            Data['about-details'].map((value) => {
                                return (
                                    <React.Fragment key={value.id}>
                                        <div className='col-lg-4 col-md-4'>
                                            <div className='single-banner mb-5'>
                                                <Link to={process.env.PUBLIC_URL + "/shop/product/" + Data.productdetails.id}>
                                                    <img src={value.img} alt="" />
                                                </Link>
                                                <div className='banner-content'>
                                                    <h3>{value.heading}</h3>
                                                    <h4>{value.text}<span>{value.price}</span></h4>
                                                    <Link to={process.env.PUBLIC_URL + "/shop/product/" + Data.productdetails.id}>
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
            </div>


        </>
    )
}

export default Aboutdetails