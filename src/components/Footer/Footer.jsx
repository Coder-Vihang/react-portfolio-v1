import React from 'react'
import { links, socials, Bio } from '../../constants/data'
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Footer = () => {
    return (
        <div name='footer' className='w-full bg-gradient-to-b from-black to-blue-950 p-4 text-white gap-3'>
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full items-center'>
                <h1 className='text-3xl font-signature ml-2 py-1'>{Bio.name}</h1>
                <ul className='flex justify-center items-center mt-3'>
                    {links.map(({ id, link }) => (
                        <li className='px-4 cursor-pointer capitalize font-medium  hover:scale-105 duration-200' key={id}>
                            {link}
                        </li>
                    ))}
                </ul>

            </div>
            <div className='flex justify-center items-center'>
                {socials.map(({ href, id, src }) => (
                    <a className='px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200' href={href} target="_blank" key={id} rel="noopener noreferrer">
                        <LinkedInIcon />
                    </a>
                ))}
            </div>
            <div className='flex justify-center items-center mt-3'>
               &copy; {new Date().getFullYear()} {" "} All rights reserved.
            </div>
        </div>
    )
}

export default Footer