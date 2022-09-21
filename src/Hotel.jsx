import React from 'react'
import Button from '@mui/material/Button';
import HotelData from "../src/HotelData.json"
const Hotel = () => {
  return (
    <>
      <div className='container'>
        <h1>
          Hotel Rooms
        </h1>
        {HotelData.Data.map((value) => {
          return (
            <>
              <div className='cards' key={value.id}>
                <img src={value.img} alt="" />
                <h2>{value.title}</h2>
                <p>{value.Text}</p>
                <Button variant="contained">Contained</Button>
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}

export default Hotel