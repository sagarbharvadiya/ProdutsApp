import React from 'react'
// import Button from '@mui/material/Button';
import HotelData from "../src/HotelData.json"
import Icons from './components/Icons'
const Hotel = () => {
  return (
    <>
      <div className='container'>
        <h1>
          Hotel Rooms
        </h1>
        {HotelData.product.map((value) => {
          return (
            <>
              <div className='cards' key={value.id}>
                <img src={value.img} alt="" />
                <div>
                <p>{value.Text}</p>
                <h6>{value.price} <del>{value['del-price']}</del></h6>
                <div>
                <Icons/>
                </div>
                {/* <Button variant="contained">Contained</Button> */}
                </div>
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}

export default Hotel