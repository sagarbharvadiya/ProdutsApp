import React from 'react'
import SearchIcon from '@mui/icons-material/Search';


export const CollectionSearch = () => {
    return (
        <>
            <div className='sidebar-widget'>
                <h4 className='pro-sidebar-title'>Search</h4>
                <div className='pro-sidebar-search mb-50 mt-25'>
                    <form action="" className='pro-sidebar-search-form'>
                        <input type="text" placeholder="Search here..." />
                        <button><i><SearchIcon /></i></button>
                    </form>
                </div>
            </div>


        </>
    )
}

