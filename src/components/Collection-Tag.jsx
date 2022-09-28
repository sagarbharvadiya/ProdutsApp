import React from 'react'
import HotelData from '../HotelData.json'
const CollectionTag = () => {
    return (
        <>
            <div className='sidebar-widget mt-50'>
                <h4 className='pro-sidebar-title'>Tag</h4>
                <div className='sidebar-widget-list mt-20'>
                    <ul>
                        {HotelData.Collecion.Tag.map((value) => {
                            return (
                                <React.Fragment key={value.id}>
                                    <li>
                                        <div className='sidebar-widget-list-left'>
                                            <button>{value.name}</button>
                                        </div>
                                    </li>
                                </React.Fragment>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default CollectionTag