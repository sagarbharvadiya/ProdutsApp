import React from 'react'
import Data from '../../Data.json';

const CollectionColors = () => {
    return (
        <>
            <div className='sidebar-widget mt-50'>
                <h4 className='pro-sidebar-title'>Color</h4>
                <div className='sidebar-widget-list mt-20'>
                    <ul>
                        {Data.Collecion.Color.map((value) => {
                            return (
                                <React.Fragment key={value.id}>
                                    <li>
                                        <div className='sidebar-widget-list-left'>
                                            <button className=''>
                                                <span className='checkmark'></span>
                                                {value.color}
                                            </button>
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

export default CollectionColors