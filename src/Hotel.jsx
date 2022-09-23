import React, { useState } from 'react'
// import Button from '@mui/material/Button';
import HotelData from "../src/HotelData.json"
import Icons from './components/Icons';
import Subscribe from '../src/components/Subscribe.jsx';
import { Link } from 'react-router-dom';

const Hotel = () => {

  return (
    <>
      <section className='product'>
        <div className='container'>
          <div className='row'>
            {HotelData.product.map((value) => {
              return (
                <React.Fragment key={value.id}>
                  <div className='col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 '>
                    <div className='cards'>
                      <Link to={process.env.PUBLIC_URL + "/shop/product/" + HotelData.productdetails.id} >
                        <img src={value.img} alt="" />
                      </Link>
                      <div className='product-img-badges'>
                        <span className='pink'>{value.discount}</span>
                        <span className='purple'>{value.type}</span>
                      </div>
                      <div className='description'>
                        <div className='product-content-3'>
                          <p>{value.Text}</p>
                          <h6>{value.price} <del>{value['del-price']}</del></h6>
                          <div className="icon">
                            <Icons />
                          </div>
                          {/* <Button variant="contained">Contained</Button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              )
            })}
          </div>
        </div>
      </section>
      <Subscribe />
    </>
  )
}

export default Hotel