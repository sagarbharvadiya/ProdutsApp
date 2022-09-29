import React from 'react'
import Data from '../../Data.json'
const Subscribe = () => {
    return (
        <>
            <section className='Subscribe'>
                <div className=' container'>
                    <div className='row'>
                        {Data.Subscribe.map((value) => {
                            return (
                                <React.Fragment key={value.id}>
                                    <h1>{value.heading}</h1>
                                    <p>{value.Text}</p>
                                    <form action="" method="get">
                                        <input type="email" placeholder='Your Email Address' />
                                        <br/>
                                        <button>{value.btn}</button>
                                    </form>
                                </React.Fragment>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Subscribe