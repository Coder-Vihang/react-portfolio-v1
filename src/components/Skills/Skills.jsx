// import React from 'react'
// import { Technologies } from '../../constants/data'
// const Skills = () => {
//     return (
//         <div name='skills' className='w-full h-screen bg-gradient-to-b from-blue-950 to-black'>
//             <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
//                 <div>
//                     <p className='text-4xl font-bold text-center'>Skills</p>
//                     <p className='sm:py-6 sm:text-2xl text-1xl py-1 text-center'>
//                         These are the technologies that I've worked on
//                     </p>
//                 </div>
//                 <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-5 px-12 sm:px-0'>
//                     {Technologies.map(({ id, src, title, style }) => (
//                         <div key={id} className={`shadow-md rounded-2xl py-5 px-5 hover:scale-105 duration-500 ${style}`}>
//                             <img src={src} alt='Html' className='w-20 mx-auto'></img>
//                             <p className='mt-4'>{title}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Skills

import React, { useState } from "react";
import { Technologies } from '../../constants/data'

const Skills = () => {
    const [selectedCategory, setSelectedCategory] = useState("frontend");

    const gradientBackground = "bg-gradient-to-r from-teal-500 to-blue-500";

    const ToggleButton =
      "py-2 px-4 rounded-md cursor-pointer transition-transform duration-200 transform";
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const frontendSkills = Technologies.filter((tech) => tech.category === "frontend");
    const backendSkills = Technologies.filter((tech) => tech.category === "backend");
    const otherSkills = Technologies.filter((tech) => tech.category === "other");

    return (
        <div name='skills' className='w-full h-screen bg-gradient-to-b from-blue-950 to-black'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-4xl font-bold text-center'>Skills</p>
                    <p className='sm:py-6 sm:text-2xl text-1xl py-1 text-center'>
                        These are the technologies that I've worked on
                    </p>
                    <div className='flex justify-center mb-4'>
                    <button
  onClick={() => handleCategoryChange("frontend")}
  className={`${ToggleButton} ${
    selectedCategory === "frontend"
      ? `font-bold ${gradientBackground} scale-105`
      : "hover:bg-blue-208 scale-100"
  }`}
>
  Frontend
</button>

<button
  onClick={() => handleCategoryChange("backend")}
  className={`${ToggleButton} ${
    selectedCategory === "backend"
      ? `font-bold ${gradientBackground} scale-105`
      : "hover:bg-blue-208 scale-100"
  }`}
>
  Backend
</button>

<button
  onClick={() => handleCategoryChange("other")}
  className={`${ToggleButton} ${
    selectedCategory === "other"
      ? `font-bold ${gradientBackground} scale-105`
      : "hover:bg-blue-208 scale-100"
  }`}
>
  Others
</button>
                    </div>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-5 px-12 sm:px-0'>
                    {selectedCategory === "frontend" ? (
                        frontendSkills.map(({ id, src, title, style }) => (
                            <div key={id} className={`shadow-md rounded-2xl py-5 px-5 hover:scale-105 duration-500 ${style}`}>
                                <img src={src} alt={title} className='w-20 mx-auto'></img>
                                <p className='mt-4'>{title}</p>
                            </div>
                        ))
                    ) : selectedCategory === "backend" ? (
                        backendSkills.map(({ id, src, title, style }) => (
                            <div key={id} className={`shadow-md rounded-2xl py-5 px-5 hover:scale-105 duration-500 ${style}`}>
                                <img src={src} alt={title} className='w-20 mx-auto'></img>
                                <p className='mt-4'>{title}</p>
                            </div>
                        ))
                    ) : (
                        otherSkills.map(({ id, src, title, style }) => (
                            <div key={id} className={`shadow-md rounded-2xl py-5 px-5 hover:scale-105 duration-500 ${style}`}>
                                <img src={src} alt={title} className='w-20 mx-auto'></img>
                                <p className='mt-4'>{title}</p>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Skills;
