import React from 'react'
import {form}from '../../constants/data'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gradient-to-b from-blue-950 to-black p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold text-center'>Contact me</p>
                <p className='py-6 sm:text-2xl text-1xl text-center'>Submit the form below to get in touch with me</p>
            </div>
            <div className="flex justify-center items-center">
            <form action={form.formLink} method= {form.formMethod}className='flex flex-col w-full md:w-1/2'>
    <input
        type="text"
        name="name"
        placeholder='Enter your name'
        className='my-4 p-2 bg-transparent bottom-2 rounded-md text-white focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200'
    />
    <input
        type="text"
        name="email"
        placeholder='Enter your Email'
        className='my-4 p-2 bg-transparent bottom-2 rounded-md text-white focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200'
    />
    <textarea
        name='message'
        rows="10"
        placeholder="Enter your message"
        className='my-4 p-2 bg-transparent bottom-2 rounded-md text-white focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200'
    ></textarea>
    <button
        type='submit'
        className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'
    >
        Let's Connect
    </button>
</form>


            </div>
        </div>
    </div>
  )
}

export default Contact