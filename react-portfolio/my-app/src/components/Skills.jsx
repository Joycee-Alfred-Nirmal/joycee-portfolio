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
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-blue-600 '>Skills </p>
                <p className='py-4'>//These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={java} alt='java.png'/>
                    <p className='my-4'>JAVA</p>

                </div>

        

         
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={html} alt='html.png'/>
                    <p className='my-4'>HTML</p>


                </div>

       

        
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={css} alt='css.png'/>
                    <p className='my-4'>CSS</p>


                </div>

          

          
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={javascript} alt='javascript.png'/>
                    <p className='my-4'>Javascript</p>


                </div>

        

           
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={bootstrap} alt='bootstrap.png'/>
                    <p className='my-4'>Bootstrap</p>


                </div>

          

          
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={angular} alt='angular.png'/>
                    <p className='my-4'>Angular</p>


                </div>

          

         
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={spring} alt='spring.png'/>
                    <p className='my-4'>Spring</p>


                </div>

      

          
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={springboot} alt='springboot.png'/>
                    <p className='my-4'>Spring Boot</p>


                </div>

           

          
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={mysql} alt='mysql.png'/>
                    <p className='my-4'>MySql</p>


                </div>

           

          
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={mongodb} alt='mongodb.png'/>
                    <p className='my-4'>MongoDb</p>


                </div>

</div>
           


        </div>
        
    </div>
  )
}

export default Skills