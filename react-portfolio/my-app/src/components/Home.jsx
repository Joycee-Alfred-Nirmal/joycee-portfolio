import React from 'react';
import joy from "../assets/joy.png"

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full '>
        <p className='text-blue-600 text-3xl sm: pb-8 pl-10'> Hi , my name is </p>
        <h1 className='text-4xl sm:text-7xl pl-11 font-bold text-[#ccd6f6] '> Joycee </h1>
        <h2 className='text-blue-600 font-bold text-3xl pl-9 '> I'm a Web Developer.</h2>

      </div>

    

    </div>
  )
}

export default Home