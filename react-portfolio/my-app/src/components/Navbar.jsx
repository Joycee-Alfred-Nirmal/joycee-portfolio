import React , {useState}from 'react';
import {FaBars , FaGithub, FaLinkedin, FaTimes} from 'react-icons/fa';
import { Link } from 'react-scroll'



const Navbar = () => {

  const [nav , setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
   <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-blue-300'>
     
     <h1 className='text-2xl font-semibold'>Joycee</h1>
     {/* menu */}
     <div>
        <ul className='hidden md:flex'>
          <li>
              <Link to="home" smooth={true} duration={700} >Home</Link>
          </li>
          <li>  
             <Link to="about" smooth={true} duration={700} >About </Link>
            </li>
          <li> 
             <Link to="skills" smooth={true} duration={700} >Skills </Link>
          </li>
          <li>
             <Link to="projects" smooth={true} duration={700} >Projects</Link>
          </li>
          <li>
             <Link to="contact" smooth={true} duration={700} >Contact</Link>
          </li>
        
         
        </ul>
     </div>

     <div onClick={handleClick} className='md:hidden z-10'>
      {!nav ? <FaBars/> : <FaTimes/>}
     </div>

      {/* modile view */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="home" smooth={true} duration={500} >Home</Link></li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="about" smooth={true} duration={500} >About</Link></li>
          <li className='py-6 text-4xl'>  
             <Link onClick={handleClick} to="projects" smooth={true} duration={500} >Projects</Link></li>
             <li className='py-6 text-4xl'>  
             <Link onClick={handleClick} to="contact" smooth={true} duration={500} >Contact</Link></li>
        
      </ul>

      {/* social icons */}
      <div className='lg:flex fixed flex-col top-[35%] left-0'>
        <ul>

            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href="https://github.com/dashboard">
              Github <FaGithub size={30}/>
            </a>
            </li>

            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href="https://www.linkedin.com/in/joycee-alfred-nirmal/">
              Linkedin <FaLinkedin size={30}/>
            </a>
            </li>

        </ul>

      </div>
  </div>
 
  )
}

export default Navbar