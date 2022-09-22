import React, { useState, Fragment } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Face6Icon from '@mui/icons-material/Face6';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import CloseIcon from '@mui/icons-material/Close';
import DehazeIcon from '@mui/icons-material/Dehaze';
import Logo from './Logo';
import { NavLink } from 'react-router-dom';
import { useRef } from 'react'


const NavbarMain = () => {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
  

    return (
        <>
            <header className={colorChange ? 'Navbar colorChange' : 'Navbar'}>
                <div className=' container'>

                <nav>
                    <ul ref={navRef} className='d-flex'>
                        <li className='d-inline-block mx-3 my-2'> <NavLink  className={(navData) => (navData.isActive ? "active-style" : ' ')} to="/home" >Home</NavLink></li>
                        <li className='d-inline-block mx-3 my-2'> <NavLink  className={(navData) => (navData.isActive ? "active-style" : ' ')} to="Product">Product Details</NavLink></li>
                        <li className='d-inline-block mx-3 my-2'> <NavLink  className={(navData) => (navData.isActive ? "active-style" : ' ')} to="About">About</NavLink></li>
                        <li className='d-inline-block mx-3 my-2'> <NavLink  className={(navData) => (navData.isActive ? "active-style" : ' ')} to="Collection">Collection</NavLink></li>
                        <li className='d-inline-block mx-3 my-2'> <NavLink  className={(navData) => (navData.isActive ? "active-style" : ' ')} to="Blog">Blog</NavLink></li>
                        <li className='d-inline-block mx-3 my-2'> <NavLink  className={(navData) => (navData.isActive ? "active-style" : ' ')} to="Contact">Contact</NavLink></li>
                        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                            <CloseIcon />
                        </button>
                    </ul>
                    <Logo />
                    <div className='icons'>
                        <SearchIcon />
                        <Face6Icon />
                        <ShuffleIcon />
                        <FavoriteBorderIcon />
                        <LocalMallIcon />
                    </div>
                </nav>
                </div>
                <button className='nav-btn' onClick={showNavbar}>
                    <DehazeIcon />
                </button>
            </header>


        </>
    )
}

export default NavbarMain;