import React from 'react'
import Data from '../../Data.json'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Brand from './Brand';
const Ourteam = () => {
    return (
        <>
            <section className='our-team'>
                <div className='container'>
                    <div className='text-center section-title-2'>
                        <h2> Team Members</h2>
                        <p>Lorem ipsum dolor sit amet conse ctetu.</p>
                    </div>
                    <div className='row'>
                        {Data.ourteam.map((value) => {
                            return (
                                <React.Fragment key={value.id}>
                                    <div className='col-lg-3 col-md-6 col-sm-6'>
                                        <div className='team-wrapper'>
                                            <div className='team-img'>
                                                <img src={value.img} alt="" />
                                                <div className='team-action'>
                                                    <a href={value.link} target={"_blank"} rel="noreferrer" >
                                                        <FacebookIcon className='facebook' /><TwitterIcon className='twitter' /><InstagramIcon className='instagram' />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className='team-content text-center'>
                                                <h4>{value.title}</h4>
                                                <span>{value.post}</span>
                                            </div>
                                        </div>
                                    </div>

                                </React.Fragment>
                            )
                        })

                        }

                    </div>
                </div>
            </section>
            <Brand />

        </>
    )
}

export default Ourteam