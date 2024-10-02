import React from 'react'
import Logo from '../assets/hyundai_logo.png'
import WidgetsIcon from '@mui/icons-material/Widgets';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

const Menu = () => {
    return (
        <div className=''>
            <div className='flex-col mx-2 text-base text-white max-lg:w-40'>
                <img src={Logo} className='w-20 h-12 mb-5 cursor-pointer' />
                <a href="/"><h4 className='cursor-pointer p-2 flex !text-white'><KeyboardDoubleArrowLeftIcon />  Slides</h4></a>
                <a href="/" className='bg-white text-gray-700 rounded-xl cursor-pointer py-1 px-1 flex text-start justify-left hover:text-gray-700'>
                    <WidgetsIcon /> <h4>
                        Fleets</h4>
                </a>
            </div>
        </div>
    )
}

export default Menu



