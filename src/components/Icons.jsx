import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
const Icons = () => {
    return (
        <>
            <FavoriteBorderIcon titleAccess='Add to wishlist'/>
            <AddShoppingCartIcon titleAccess='Add to cart'/>
            <CompareArrowsIcon titleAccess='Add to compare'/>
            <RemoveRedEyeIcon titleAccess='Quick view'/>
        </>
    )
}

export default Icons