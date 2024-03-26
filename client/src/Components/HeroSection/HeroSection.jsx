import React from 'react'
import backgroundImage from './background.png'
import imghome from './removedbg.png'
import './herosection.scss'
import { Link } from 'react-router-dom'

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
      <div className='contentcontainer' style={{ padding: 30 }}>
        <div
          className='navbar  mb-60'
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            fontSize: 20
          }}
        >
          <h1 class='font-bold'>SHOP</h1>
          <h2 class='font-bold'>BESTSELLERS</h2>
          <h3>MEN</h3>
          <h4>WOMEN</h4>
          <h5>KIDS</h5>
        </div>

        <div className='bothdiv relative '>
          <div className='textsection ml-40 absolute -top-10 ' id='text'>
            <h1 class='text-4xl font-bold text-white '>SHOP SAFE.</h1>
            <h1
              className='text-4xl font-bold text-white mb-8 py-1'
              style={{ color: '#1E729D', fontWeight: 'bold' }}
            >
              SHOP ONLINE.
            </h1>
            <p className='w-96 mb-12'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              fugiat laboriosam ab dolorem rerum unde. Quo reprehenderit vitae
              consequatur expedita ullam, sint, error minus quae unde alias
              amet. Veritatis impedit omnis nostrum
            </p>
            <button
              className='bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-40 rounded-full'
              style={{ backgroundColor: '#1E729D' }}
            >
             <Link to={'/login'}> START HERE</Link>
            </button>
          </div>

          <div className='imagesection absolute -top-80 left-80  '>
            <img src={imghome} alt='' id='image' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
