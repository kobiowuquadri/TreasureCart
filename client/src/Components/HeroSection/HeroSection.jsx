import React, {useContext} from 'react'
import backgroundImage from './backgrounddd.png'
import logo from './LOGO1.png'
import './herosection.scss'
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import ProductImageContext from '../productContext/productContext';
import Navbar from '../Navbar/navbar'




function HeroSection ({ selectedProducts = [] }) {
  const { productImage } = useContext(ProductImageContext);
  const cartItemCount = Object.values(productImage).reduce((acc, curr) => acc + curr, 0);

  return (
    <div
      className='full-page-bg '
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
      < Navbar />
      <div className='contentcontainer mt-9'  style={{ padding: 30 }}>

        <div className='bothdiv relative '>
          <div className='textsection mt-[141px] ml-40 absolute -top-10 ' id='text'>
            <h1 class='text-6xl -mb-8 font-bold text-white '>SHOP SAFE.</h1>
            <h1
              className='text-6xl font-bold text-white mb-8 py-1'
              style={{ color: '#ff6b03', fontWeight: 'bold' }}
            >
              SHOP ONLINE.
            </h1>
            <p className='w-96 mb-8'>
              Lorem ipsum doloryyy sit amet consectetur adipisicing elit. Veniam
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
