import React from 'react'

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>

        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-1 '>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-blue-600 '>Projects</p>
            <p className='py-6'> //Check out some of my recent works</p>

            <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'>

              <div className='shadow-lg shadow-[#040c26] group container rounded-md flex justify-center items-center mx-auto content-div'>

                <div className='opacity-0 group-hover:opacity-100'>
                  <span className='text-1xl font-bold text-white tracking-wider'>
                   PIZZA WEB APPLICATION :-
                  </span>
                  <div className='text-1xl font-bold text-gray-300 tracking-wider'>

                  Created an intuitive Pizza Ordering System with 
                user-friendly CRUD operations, employing Angular for a dynamic and interactive frontend experience. 
                Utilized Angular to craft a visually appealing and responsive interface , enhancing user engagement in the Pizza Ordering System. 
                Orchestrated a seamless user registration and login process, coupled with intuitive pizza selection and cart management features, providing an exceptional
                ordering experience. 
                Implemented robust frontend technologies , including Angular, to fashion a highly interactive and visually appealing interface, elevating the user experience in the Pizza Ordering System.

                  </div>

                </div>
              </div>

              <div className='shadow-lg shadow-[#040c26] group container rounded-md flex justify-center items-center mx-auto content-div'>

                  <div className='opacity-0 group-hover:opacity-100'>
                       <span className='text-1xl font-bold text-white tracking-wider'>
                       The Jukebox :-
                        </span>
                  <div className='text-1xl font-bold text-gray-300 tracking-wider'>
                       
                  Solo project based on Java and MySql using JDBC. User can register themselves to listen to the songs
                or podcasts available
                add them to playlist and perform other playlist operations. Features in the platform to perform
                operations on the audio for play,pause, rewind and stop .

                  </div>
                  </div>
              </div>


              <div className='shadow-lg shadow-[#040c26] group container rounded-md flex justify-center items-center mx-auto content-div'>

                 <div className='opacity-0 group-hover:opacity-100'>
                   <span className='text-1xl font-bold text-white tracking-wider'>
                   IoT instant contactless COVID test registration automated system :-
                  </span>
                <div className='text-1xl font-bold text-gray-300 tracking-wider'>
     
                A Team of 3 members 
                Our methodology is to use OCR technique to develop an IOT-based contactless automated covid test
                registration system. 
                To reduce the manual entries errors and minimize the time in the registration process. 
                To transfer the data to the lab using IOT .
              

                 </div>
                </div>
              </div>

              <div className='shadow-lg shadow-[#040c26] group container rounded-md flex justify-center items-center mx-auto content-div'>

                 <div className='opacity-0 group-hover:opacity-100'>
                  <span className='text-1xl font-bold text-white tracking-wider'>
                  IoT based gas alert system :-
                 </span>
                <div className='text-1xl font-bold text-gray-300 tracking-wider'>

                A Team of 3 members 
                The primary objective of the Gas leakage detection system is to detect the
                malfunctioning of the pressurized gas system in order to prevent the accumulation of the gases so, that the
                explosion does not
                happen.


              </div>
              </div>
            </div>

            </div>

            </div>

        </div>
    </div>
  )
}

export default Projects