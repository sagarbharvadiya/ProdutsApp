import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Data from '../../Data.json'
const Footer = () => {
    return (
        <>


            <div className='container'>
                <footer>
                    <div className='row'>
                        <div className='footer-data'>
                            {Data.footer.map((value) => {
                                return (
                                    <React.Fragment key={value.id}>
                                        <div className=' container'>
                                            <img src={value.img} alt="" />
                                            <p className='text'>{value.Text}</p>
                                        </div>
                                    </React.Fragment>
                                )
                            })}
                        </div>
                        <div className='footer-social'>
                            <ul>
                                <li><a href="facebook"><FacebookIcon></FacebookIcon></a></li>
                                <li><a href="facebook"><SportsVolleyballIcon></SportsVolleyballIcon></a></li>
                                <li><a href="facebook"><PinterestIcon></PinterestIcon></a></li>
                                <li><a href="facebook"><TwitterIcon></TwitterIcon></a></li>
                                <li><a href="facebook"><LinkedInIcon></LinkedInIcon></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='footer-bottom text-center'>
                        <div className=' container'>
                            <div className='copyright-2 '>

                                <p>Copyright: <span>©{new Date().getFullYear()} Flone.</span>All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer