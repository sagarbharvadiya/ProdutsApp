import React, { useState } from 'react'


const Addcart = () => {

    let [num, setNum] = useState(1);
    let incNum = () => {
        if (num < 10) {
            setNum(Number(num) + 1);
        }
    };
    let decNum = () => {
        if (num > 1) {
            setNum(num - 1);
        }
    }
    let handleChange = (e) => {
        setNum(e.target.value);
    }
    return (
        <>
            <button className="btn btn-outline-primary" type="button" onClick={decNum}>-</button>
            <input type="text" className="form-control" value={num} onChange={handleChange} disabled />
            <button className="btn btn-outline-primary" type="button" onClick={incNum}>+</button>

            <button className=' btn btn-primary'>ADD TO CART</button>
        </>
    )
}

export default Addcart