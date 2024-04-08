import React from 'react'
import backgroundImage from './backgrounddd.png'
import logo from './LOGO1.png'
import './herosection.scss'
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";



function HeroSection () {
  return (
    <div
      className='full-page-bg'
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',

        margin: '0',
        padding: '0',
        height: '100vh',
        width: '100vw'
      }}
    >
      <div className='contentcontainer'  style={{ padding: 30 }}>
        <div
          className='navbar bg-[#945F21] -ml-10 w-dvw -mt-8 mb-40'
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            fontSize: 18
          }}
        >
          <img src={logo} alt='' id='logo' className='w-10 h-10' />
          <h4 className='text-white font-light'>PRODUCTS</h4>
          <h4 className='text-white font-light'>ABOUT</h4>
          <h4 className='text-white font-light'>CONTACT US</h4>

          <div className="menuicon ">
          <FaSearch className='text-white mr-8'  />
          <FiUser className='text-white text-xl mr-8' />
          <IoCartOutline  className='text-white text-xl'/>
          </div>

        </div>

        <div className='bothdiv relative '>
          <div className='textsection ml-40 absolute -top-10 ' id='text'>
            <h1 class='text-6xl -mb-8 font-bold text-white '>SHOP SAFE.</h1>
            <h1
              className='text-6xl font-bold text-white mb-8 py-1'
              style={{ color: '#ff6b03', fontWeight: 'bold' }}
            >
              SHOP ONLINE.
            </h1>
            <p className='w-96 mb-8'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              fugiat laboriosam ab dolorem rerum unde. Quo reprehenderit vitae
              consequatur expedita ullam, sint, error minus quae unde alias
              amet. Veritatis impedit omnis nostrum
            </p>
            <button
              className='bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-8 w-48 h-10 rounded-full'
              style={{ backgroundColor: '#ff6b03', border: 'none' }}
            >
             <Link className='text-white no-underline' to={'/login'}> GET STARTED</Link>
            </button>
          </div>

          {/* <div className='imagesection absolute -top-80 left-80  '>
            <img src={imghome} alt='' id='image' />
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default HeroSection
