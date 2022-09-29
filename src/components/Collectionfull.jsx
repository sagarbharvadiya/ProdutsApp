import React from 'react'
import { useParams } from "react-router-dom"
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import HotelData from '../HotelData.json'

const CollectionFull = () => {
    const { productId } = useParams()
    const thisProduct = HotelData.Collecion.CollecionItem.find(prod => prod.id === productId)
    return (
        <>
            <div className=' container'>
                <div className='row'>
                    <div className='col-xl-4 col-sm-6 '>
                        <div className='product-wrap mb-25'>
                            <div className='product-img'>
                                    <img className='default-img' src={thisProduct.img} alt="" />
                                    {/* <img className='hover-img' src={thisProduct.img1} alt="" /> */}
                                <div className='product-img-badges'>
                                    <span className='pink'>-{thisProduct.discount}</span>
                                </div>
                                <div className='product-action'>
                                    <div className='pro-same-action pro-wishlist'>
                                        <button className='' title='Add to wishlist'>
                                            {<FavoriteIcon />}
                                        </button>
                                    </div>
                                    <div className='pro-same-action pro-cart'>
                                        <a href="/">Select option</a>
                                    </div>
                                    <div className='pro-same-action pro-quickview'>
                                        <button title='Quick View'>
                                            {<VisibilityIcon />}
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='product-content text-center'>
                                <h3><a href="/">{thisProduct.Text}</a></h3>
                                <div className='product-rating'>
                                    <Stack spacing={1}>
                                        <Rating name="half-rating" defaultValue={3} precision={0.5} color="yellow" />
                                    </Stack>
                                </div>
                                <div className='product-price'>
                                    <span>{thisProduct.price} <del>{thisProduct['del-price']}</del></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CollectionFull;