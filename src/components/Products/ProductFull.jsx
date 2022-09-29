import React from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Addcart from './Addcart';
import FacebookIcon from '@mui/icons-material/Facebook';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useParams } from "react-router-dom"
import Data from '../../Data.json'


const ProductFull = () => {
    const { productId } = useParams()
    const thisProduct = Data.productdetails.find(prod => prod.id === productId)

    return (
        <>
            <div className=' container'>
                <div className='row'>
                    <div className='d-flex gap-5 align-items-center'>
                        <div className='img'>
                            <img className='default-img' src={thisProduct.img} alt="" />
                        </div>
                        <div className='details'>
                            <h6>{thisProduct.Text}</h6>
                            <p>{thisProduct.price} <span>{thisProduct.delprice}</span></p>
                            <Stack spacing={1}>
                                <Rating name="half-rating" defaultValue={3} precision={0.5} />
                            </Stack>
                            <div className='del'>
                                <p>{thisProduct.details}</p>
                            </div>
                            <div className='add_cart'>
                                <Addcart />
                            </div>
                            <div className='categories'>
                                <h6>{thisProduct.cat}</h6>
                                <h6>{thisProduct.tag}</h6>
                            </div>
                            <div className='product-icon'>
                                <ul>
                                    <li><a href="facebook"><FacebookIcon></FacebookIcon></a></li>
                                    <li><a href="facebook"><SportsVolleyballIcon></SportsVolleyballIcon></a></li>
                                    <li><a href="facebook"><PinterestIcon></PinterestIcon></a></li>
                                    <li><a href="facebook"><TwitterIcon></TwitterIcon></a></li>
                                    <li><a href="facebook"><LinkedInIcon></LinkedInIcon></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductFull