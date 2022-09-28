import React from 'react'
import CollectionCategories from './Collection-Categories'
import CollectionColors from './Collection-Colors'
import CollectionItem from './Collection-item'
import { CollectionSearch } from './Collection-search'
import CollectionSize from './Collection-Size'
import CollectionTag from './Collection-Tag'



const Collections = () => {
    return (
        <>
            <div className='breadcrumb-area'>
                <div className='container'>
                    <div className='row'>
                        <div className='top'>
                            <a aria-current="page" className="active" href="/">Home</a>
                            <span> /</span>
                            <span to="/about">SHOP</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='shop-area'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3 order-2 order-lg-1'>
                            <div className='sidebar-style mr-30'>
                                <CollectionSearch />
                                {/*  */}
                                <CollectionCategories />
                                {/*  */}
                                <CollectionColors />
                                {/*  */}
                                <CollectionSize />
                                {/*  */}
                                <CollectionTag />
                            </div>
                        </div>
                        <div className='col-lg-9 order-1 order-lg-2'>
                            <div className='shop-bottom-area mt-35'>
                                <div className='row grid three-column'>
                                    {/*  */}
                                    <CollectionItem />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Collections