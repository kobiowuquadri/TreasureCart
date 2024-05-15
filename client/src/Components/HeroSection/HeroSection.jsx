import React, {useContext} from 'react'
import './herosection.scss'
import { Link } from 'react-router-dom'
import ProductImageContext from '../productContext/productContext';
import Navbar from '../Navbar/navbar'




function HeroSection ({ selectedProducts = [] }) {
  const { productImage } = useContext(ProductImageContext);
  const cartItemCount = Object.values(productImage).reduce((acc, curr) => acc + curr, 0);

  return (
    <div
      className='full-page-bg font-body bg-home h-screen max-[900px]:bg-responsive max-[900px]:h-screen'
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        margin: '0',
        padding: '0',
        width: '100vw'
      }}
    >
      < Navbar />
      <div className='contentcontainer mt-9'  style={{ padding: 30 }}>

        <div className='bothdiv  max-w-2xl '>
          <div className='textsection mt-[141px] ml-40 max-[900px]:mt-14 max-[900px]:ml-2 ' id='text'>
            <h1 class='text-6xl -mb-8 font-black text-white   '>SHOP SAFE.</h1>
            <h1
              className='text-6xl font-black text-white mb-2  '
              style={{ color: '#ff6b03'}}
            >
              SHOP ONLINE.
            </h1>
            <p className='text-white font-bold text-2xl  '>
              Find the perfect product for every day need and occupation 
            </p>
            <p className=' mb-8 font-bold '>
              Enjoy special discounts and unbeatable price on our new arrivals
            </p>
            <button
              className='bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-8 w-48 h-10 rounded-full hover:opacity-80'
              style={{ backgroundColor: '#ff6b03', border: 'none' }}
            >
             <Link className='text-white no-underline font-body ' to={'/login'}> GET STARTED</Link>
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
