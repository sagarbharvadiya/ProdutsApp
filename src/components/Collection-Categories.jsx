import React from 'react'
import HotelData from '../HotelData.json';


const CollectionCategories = () => {
    return (
        <>
            <div className='sidebar-widget'>
                <h4 className='pro-sidebar-title'>Categories </h4>
                <div className='sidebar-widget-list mt-30'>
                    <ul>{
                        HotelData.Collecion.Categories.map((value) => {
                            return (
                                <React.Fragment key={value.id}>
                                    <li>
                                        <div className='sidebar-widget-list-left'>
                                            <button className=''>
                                                <span className='checkmark'>
                                                   {value.all}
                                                </span>
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

export default CollectionCategories
