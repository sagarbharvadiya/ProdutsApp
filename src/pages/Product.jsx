import React from 'react'
// import Button from '@mui/material/Button';
import Data from "../Data.json"
import Icons from '../components/Header/Icons';
import Subscribe from '../components/Home/Subscribe.jsx';
import { Link } from 'react-router-dom';

const Hotel = () => {
  return (
    <>
      <section className='product'>
        <div className='container'>
          <div className='row'>
            {Data.product.map((value) => {
              return (
                <React.Fragment key={value.id}>
                  <div className='col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 '>
                    <div className='cards'>
                      <Link data-item-id={value.id} to={`/product/${value.id}`} >
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