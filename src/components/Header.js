// import React, { useState } from 'react'
import { MdDarkMode, MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'
// import { MdLightMode } from 'react-icons/md'

const Header = ({ handleToggleDarkModes, changeLogo }) => {

    return (
        <div className='Header'>
            <h1>Notes</h1>
            {console.log(changeLogo)}
            <button onClick={() => handleToggleDarkModes()} className='save'>
                {changeLogo ? < MdOutlineLightMode size='1.6em' className='logo' /> : < MdOutlineDarkMode size='1.6em' className='logo' />}

            </button>

        </div>
    )
}

export default Header
