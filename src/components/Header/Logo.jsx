import React from 'react'
import Data from '../../Data.json'

const Logo = () => {

    return (
        <>
            <div className='logo'>
                {Data.Logo.map((value) => {
                    return (
                        <React.Fragment key={value.id}>
                            <a href='home'>
                                <img id='myImage' src={value.img} alt="" key={value.id} />
                            </a>
                        </React.Fragment>
                    )
                })}
            </div>

        </>
    )
}

export default Logo;