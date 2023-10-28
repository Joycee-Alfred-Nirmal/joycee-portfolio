import React from 'react';
import joy from "../assets/joy.png"

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full '>
        <p className='text-blue-600 text-2xl'> Hi , my name is </p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6] '> Joycee </h1>
        <h2 className='text-blue-600 font-bold text-4xl'> I'm a Web Developer.</h2>

        <div>
          <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:border-blue-600'> View Work</button>
        </div>

      </div>

    

    </div>
  )
}

export default Home