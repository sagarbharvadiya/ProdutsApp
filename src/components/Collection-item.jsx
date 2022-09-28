import React from 'react'
import HotelData from '../HotelData.json'
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
const CollectionItem = () => {
    return (
        <>
            {HotelData.Collecion.CollecionItem.map((value) => {
                return (
                    <React.Fragment key={value.id}>
                        <div className='col-xl-4 col-sm-6 '>
                            <div className='product-wrap mb-25'>
                                <div className='product-img'>
                                    <a href="/">
                                      
                                        <img className='default-img' src={value.img} alt="" />
                                            <img className='hover-img' src={value.img1} alt="" />
                                    </a>
                                    <div className='product-img-badges'>
                                        <span className='pink'>-{value.discount}</span>
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
                                    <h3><a href="/">{value.Text}</a></h3>
                                    <div className='product-rating'>
                                        <Stack spacing={1}>
                                            <Rating name="half-rating" defaultValue={3} precision={0.5} color="yellow" />
                                        </Stack>
                                    </div>
                                    <div className='product-price'>
                                        <span>{value.price} <del>{value['del-price']}</del></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </React.Fragment>
                )
            })

            }

        </>
    )
}

export default CollectionItem