import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { links, Bio, socials } from "../../constants/data";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {Link} from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-black fixed px-4 z-10">
        <div className="flex items-center justify-between align-middle w-full mx-auto z-10" style={{maxWidth:'1200px'}}>
      <div>
        <h1 className="text-5xl font-signature ml-2 text-center">{Bio.name}</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            className="px-4 cursor-pointer capitalize font-medium  hover:scale-105 duration-200 text-xl"
            key={id}
          >
           <Link to={link} smooth duration={500}>{link}</Link>
          </li>
        ))}
      </ul>
      <div className="hidden md:flex md:justify-center md:items-center">
        {socials.map(({ href, id, src }) => (
          <a
            className="px-4 cursor-pointer capitalize font-medium hover:scale-110 duration-200"
            href={href}
            target="_blank"
            key={id}
            rel="noopener noreferrer"
          >
     <LinkedInIcon style={{ fontSize: 30 }} />
          </a>
        ))}
      </div>

      <div
        onClick={() => {
          setNav(!nav);
        }}
        className="cursor-pointer p-4 z-10 absolute right-0 hover:scale-105 duration-200 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <div>
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-blue-950 text-white">
            {links.map(({ id, link }) => (
              <li
                className="px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105 duration-100"
                key={id}
              >
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
              </li>
            ))}
            <div className="flex justify-center items-center mt-3">
              {socials.map(({ href, id, src }) => (
                <a
                  className="px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200"
                  href={href}
                  target="_blank"
                  key={id}
                  rel="noopener noreferrer"
                  onClick={() => setNav(!nav)}
                >
                  <LinkedInIcon size={30} />
                </a>
              ))}
            </div>
          </ul>
        </div>
      )}
      </div>
    </div>
  );
};

export default Navbar;
