import React from 'react'
import Data from '../../Data.json'
const Ourvision = () => {
  return (
    <>
    <section className='about-mission-area pb-7'>
        <div className=' container'>
            <div className=' row'>
                {Data['Our Vision'].map((value)=>{
                    return(
                        <React.Fragment key={value.id}>
                            <div className='col-lg-4 col-md-4'>
                                <div className='single-mission mb-5'>
                                    <h3>{value.title}</h3>
                                    <p>{value.p}</p>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                })

                }
            </div>
        </div>
    </section>
    
    </>
  )
}

export default Ourvision