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
                <nav>
                    <ul ref={navRef} className='d-flex'>
                        <li className='d-inline-block mx-4 my-2'> <NavLink exact activeclassName="active" to="/" className='text-decoration-none' >Home</NavLink></li>
                        <li className='d-inline-block mx-4 my-2'> <NavLink activeclassName="active" to="Product" className='text-decoration-none'>Product Details</NavLink></li>
                        <li className='d-inline-block mx-4 my-2'> <NavLink activeclassName="active" to="About" className='text-decoration-none'>About</NavLink></li>
                        <li className='d-inline-block mx-4 my-2'> <NavLink activeclassName="active" to="Collection" className='text-decoration-none'>Collection</NavLink></li>
                        <li className='d-inline-block mx-4 my-2'> <NavLink activeclassName="active" to="Blog" className='text-decoration-none'>Blog</NavLink></li>
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
                <button className='nav-btn' onClick={showNavbar}>
                    <DehazeIcon />
                </button>
            </header>


        </>
    )
}

export default NavbarMain;