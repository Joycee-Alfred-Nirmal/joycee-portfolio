import React from 'react';
import java from "../assets/java.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import bootstrap from "../assets/bootstrap.png";
import angular from "../assets/angular.png";
import spring from "../assets/spring.png";
import springboot from "../assets/springboot.png";
import mysql from "../assets/mysql.png";
import mongodb from "../assets/mongodb.png";


const Skills = () => {
  return (
    <div name='skills' className='bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-blue-600 '>Skills </p>
                <p className='py-4'>//These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-1 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 px-auto' src={java} alt='java.png'/>

                </div>

            </div>

            <div className='w-full grid grid-cols-1 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 px-auto' src={html} alt='html.png'/>

                </div>

            </div>

            <div className='w-full grid grid-cols-1 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 px-auto' src={css} alt='css.png'/>

                </div>

            </div>

            <div className='w-full grid grid-cols-1 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 px-auto' src={javascript} alt='javascript.png'/>

                </div>

            </div>

            <div className='w-full grid grid-cols-1 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 px-auto' src={bootstrap} alt='bootstrap.png'/>

                </div>

            </div>

            <div className='w-full grid grid-cols-1 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 px-auto' src={angular} alt='angular.png'/>

                </div>

            </div>

            <div className='w-full grid grid-cols-1 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 px-auto' src={spring} alt='spring.png'/>

                </div>

            </div>

            <div className='w-full grid grid-cols-1 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 px-auto' src={springboot} alt='springboot.png'/>

                </div>

            </div>

            <div className='w-full grid grid-cols-1 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 px-auto' src={mysql} alt='mysql.png'/>

                </div>

            </div>

            <div className='w-full grid grid-cols-1 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 px-auto' src={mongodb} alt='mongodb.png'/>

                </div>

            </div>


        </div>
        
    </div>
  )
}

export default Skills