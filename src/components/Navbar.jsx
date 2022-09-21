import React from 'react'
// import Container from 'react-bootstrap/Container';

import Logo from './Logo';
import { NavLink } from 'react-router-dom';

const NavbarMain = () => {

    return (
        <>
            <div className='container'>
                <div className='navbar'>
                    <nav className='d-flex'>
                        <ul className='d-flex'>
                            <li> <NavLink to="/">Home</NavLink></li>
                            <li> <NavLink to="Product">Product Details</NavLink></li>
                            <li> <NavLink to="About">About</NavLink></li>
                            <li> <NavLink to="Collection">Collection</NavLink></li>
                            <li> <NavLink to="Blog">Blog</NavLink></li>
                        </ul>
                        <Logo />
                    </nav>
                </div>
            </div>
        </>
    )
}

export default NavbarMain;