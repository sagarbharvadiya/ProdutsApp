// import { color } from '@mui/system';
import React, { useState, useEffect } from 'react'
// import Logo from './Logo';
import ClipLoader from "react-spinners/ClipLoader";
// import App from '../App';

const Loader = () => {
    const [loading, setLoading] = useState(false);

    useState(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    }, [])
    return (
        <>

            {/* loading ? */}
            <ClipLoader color={'#D0021B'} loading={loading} size={150} />



        </>
    )
}

export default Loader