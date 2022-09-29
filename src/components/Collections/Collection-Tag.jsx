import React from 'react'
import Data from '../../Data.json';
const CollectionTag = () => {
    return (
        <>
            <div className='sidebar-widget mt-50'>
                <h4 className='pro-sidebar-title'>Tag</h4>
                <div className='sidebar-widget-tag'>
                    <ul>
                        {Data.Collecion.Tag.map((value) => {
                            return (
                                <React.Fragment key={value.id}>
                                    <li> 
                                            <button>{value.name}</button>
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
