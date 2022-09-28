import React from 'react'
import HotelData from '../HotelData.json'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
const BlogItem = () => {
    return (
        <>
        <div className='breadcrumb-area'>
                <div className='container'>
                    <div className='row'>
                        <div className='top'>
                            <a aria-current="page" className="active" href="/">Home</a>
                            <span> /</span>
                            <span to="/about">Blog</span>
                        </div>
                    </div>
                </div>
            </div>
            <section className='blog-area '>
                <div className=' container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='mr-20'>
                                <div className='row'>
                                    {HotelData.blog.map((value) => {
                                        return (
                                            <React.Fragment key={value.id}>
                                                <div className='col-lg-4 col-md-6 col-sm-12'>
                                                    <div className='blog-wrap-2 mb-30'>
                                                        <div className='blog-img-2'>
                                                            <a href="/"><img src={value.img} alt="" /></a>
                                                        </div>
                                                        <div className='blog-content-2'>
                                                            <div className='blog-meta-2'>
                                                                <ul>
                                                                    <li>{value.li} <a href="/">{value.li1}</a></li>
                                                                </ul>
                                                            </div>
                                                            <h4>
                                                                <a href="/">{value.title}</a>
                                                            </h4>
                                                            <p>{value.text}</p>
                                                            <div className='blog-share-comment'>
                                                                <div className='blog-btn-2'>
                                                                    <a href="/">{value.btn}</a>
                                                                </div>
                                                                <div className='blog-share'>
                                                                    <span>{value.share}</span>
                                                                    <div className='share-social'>
                                                                        <ul>
                                                                            <li><a href="/"><FacebookIcon /><InstagramIcon /><TwitterIcon />
                                                                            </a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </React.Fragment>
                                        )
                                    })

                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default BlogItem;