import React from 'react'
import { MdSearch } from 'react-icons/md'


const Search = ({ hanleSearchNote }) => {
    return (
        <div className='search'>
            <MdSearch className='search-icons' size='1.3em' />
            <input onChange={(event) => hanleSearchNote(event.target.value.toLocaleLowerCase())} type='text' placeholder='Search....' />

        </div>
    )
}

export default Search

