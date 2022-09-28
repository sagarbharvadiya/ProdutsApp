import React from 'react'
import SearchIcon from '@mui/icons-material/Search';


export const CollectionSearch = () => {
    return (
        <>
            <div className='sidebar-widget'>
                <h4 className='pro-sidebar-title'>Search</h4>
                <div className='pro-sidebar-search'>
                    <form action="" className='pro-sidebar-search-form'>
                        <input type="text" placeholder="Search here..." />
                        <button><SearchIcon /></button>
                    </form>
                </div>
            </div>


        </>
    )
}

