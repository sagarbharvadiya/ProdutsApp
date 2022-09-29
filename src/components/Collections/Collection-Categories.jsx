import React from 'react'
import Data from '../../Data.json';


const CollectionCategories = () => {
    return (
        <>
            <div className='sidebar-widget'>
                <h4 className='pro-sidebar-title'>Categories </h4>
                <div className='sidebar-widget-list mt-30'>
                    <ul>{
                        Data.Collecion.Categories.map((value) => {
                            return (
                                <React.Fragment key={value.id}>
                                    <li>
                                        <div className='sidebar-widget-list-left'>
                                            <button className=''>
                                                <span className='checkmark'></span>
                                                {value.all}
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
