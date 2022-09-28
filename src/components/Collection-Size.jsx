import React from 'react'
import HotelData from '../HotelData.json'
const CollectionSize = () => {
    return (
        <>
            <div className='sidebar-widget mt-50'>
                <h4 className='pro-sidebar-title'>size</h4>
                <div className='sidebar-widget-list mt-20'>
                    <ul>
                        {HotelData.Collecion.Size.map((value) => {
                            return (
                                <React.Fragment key={value.id}>
                                    <li>
                                        <div className='sidebar-widget-list-left'>
                                            <button className=''>
                                                <span className='checkmark'></span>
                                                    {value.size}
                                            </button>
                                        </div>
                                    </li>
                                </React.Fragment>
                            )
                        })

                        }

                    </ul>
                </div>
            </div>
        </>
    )
}

export default CollectionSize