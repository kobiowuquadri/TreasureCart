import React, {useContext} from 'react';
import { useRef } from 'react'
import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import logo from './LOGO1.png';
import { Link } from 'react-router-dom'
import ProductImageContext from '../productContext/productContext';
import { RxHamburgerMenu } from "react-icons/rx";
import { RiHomeLine } from "react-icons/ri";
import { TbShoppingCart } from "react-icons/tb";
import { BsBoxes } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { PiSignInBold } from "react-icons/pi";
import { LiaTimesSolid } from "react-icons/lia";
import './navbar.css'



export default function Navbar (){
    const { productImage } = useContext(ProductImageContext);
    const cartItemCount = Object.values(productImage).reduce((acc, curr) => acc + curr, 0);

    const navRef = useRef();

    const showNavbar = () => {
      navRef.current.classList.toggle('responsive_nav');
    }



    return(

         <div>
         <div className='max-[900px]:hidden'>
           <div
              className='navbar bg-[#945F21] navbar-section font-body '
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                fontSize: 18
              }}
                     >
           
              <Link className='no-underline' to={"/"}><img src={logo} alt='' id='logo' className='w-10 h-10' /></Link>
              <Link className='no-underline' to={"/productpage"}><h4 className='text-white font-light'>PRODUCTS</h4></Link>
              <Link className='no-underline' to={"/aboutpage"}><h4 className='text-white font-light'>ABOUT</h4></Link>
              <Link className='no-underline' to={"/contact-us"}><h4 className='text-white font-light'>CONTACT US</h4></Link>
           
              <div className="menuicon ">
              <Link className='no-underline' to={"/search"}><FaSearch className='text-white mr-8'  /></Link>
              <Link className='no-underline' to={"/register"}><FiUser className='text-white text-xl mr-8' /></Link>
           
           
              <Link to="/checkout">
                <IoCartOutline className='text-white text-xl' />
                {cartItemCount > 0 && (
                    <span className='text-white text-xs bg-red-500 rounded-full px-1'>
                      {cartItemCount}
                    </span>
                  )}
              </Link>
              </div>
           
                     </div>
         </div>

          
        

          
<div className='flex min-[900px]:hidden z-50' >
           <div
              className='navbar bg-[#945F21] navbar-section2 font-body py-2 max-[900px]:z-40  '
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: 18
              }}
                     >
           
           <div className='flex mx-10'>
                <Link className='no-underline mr-4' to={"/"}><img src={logo} alt='' id='logo' className='w-10 h-10' /></Link>
                <RxHamburgerMenu className='text-white text-2xl mt-2 cursor-pointer' onClick={showNavbar}/>
                </div>
             
           
              <div className="menuicon mx-10">
              <Link className='no-underline' to={"/search"}><FaSearch className='text-white mr-8'  /></Link>
              <Link className='no-underline' to={"/register"}><FiUser className='text-white text-xl mr-8' /></Link>
           
           
              <Link to="/checkout">
                <IoCartOutline className='text-white text-xl' />
                {cartItemCount > 0 && (
                    <span className='text-white text-xs bg-red-500 rounded-full px-1'>
                      {cartItemCount}
                    </span>
                  )}
              </Link>
              </div>
                  


              
                     </div>
             
             <div className=' z-50 fixed bg-white h-screen w-screen trans font-body ' ref={navRef}>
             
               <div className='justify-center align-middle flex flex-col p-5 pb-7 bg-gray-50 mb-8'>
               <LiaTimesSolid className='absolute top-5 right-10 text-2xl cursor-pointer hover:border-2 hover:border-gray-300 hover:border-solid' onClick={showNavbar} />
                <p className='tracking-widest text-center font-medium mb-2 text-2xl'>TREASURE<span className='text-[rgb(254,177,62)]'>C</span>ART</p>
                <p className='text-center font-semibold mt-0 text-sm '>E-COMMERCE STORE</p>
               </div>

               <Link className='no-underline text-black' to={"/"}>
                  <div className='flex pl-10 hover:bg-gray-50 hover:text-[rgb(254,177,62)] hover:border-solid hover:border'>
                    <RiHomeLine className='pt-[23px] pr-4 text-xl ' />
                    <p className='text-xl font-semibold '>HOME</p>
                  </div>
               </Link>

               <Link className='no-underline text-black' to={"/productpage"}>
                  <div className='flex pl-10 hover:bg-gray-50 hover:text-[rgb(254,177,62)] hover:border-solid hover:border'>
                    <BsBoxes className='pt-[23px] pr-4 text-xl ' />
                    <p className='text-xl font-semibold '>PRODUCT</p>
                  </div>
               </Link>

               <Link className='no-underline text-black' to={"/search"}>
                  <div className='flex pl-10 hover:bg-gray-50 hover:text-[rgb(254,177,62)] hover:border-solid hover:border'>
                    <FaSearch className='pt-[23px] pr-4 text-xl ' />
                    <p className='text-xl font-semibold '>SEARCH</p>
                  </div>
               </Link>

               <Link className='no-underline text-black' to={"/checkout"}>
                  <div className='flex pl-10 hover:bg-gray-50 hover:text-[rgb(254,177,62)] hover:border-solid hover:border'>
                    <TbShoppingCart className='pt-[23px] pr-4 text-xl ' />
                    <p className='text-xl font-semibold '>CART</p>
                  </div>
               </Link>

               <Link className='no-underline text-black' to={"/aboutpage"}>
                  <div className='flex pl-10 hover:bg-gray-50 hover:text-[rgb(254,177,62)] hover:border-solid hover:border'>
                    <HiOutlineLightBulb className='pt-[23px] pr-4 text-xl ' />
                    <p className='text-xl font-semibold '>ABOUT</p>
                  </div>
               </Link>

               <Link className='no-underline text-black' to={"/contact-us"}>
                  <div className='flex pl-10 hover:bg-gray-50 hover:text-[rgb(254,177,62)] hover:border-solid hover:border'>
                    <FiPhone className='pt-[23px] pr-4 text-xl ' />
                    <p className='text-xl font-semibold '>CONTACT</p>
                  </div>
               </Link>

               <Link className='no-underline text-black' to={"/login"}>
                  <div className='flex pl-10 hover:bg-gray-50 hover:text-[rgb(254,177,62)] hover:border-solid hover:border'>
                    <PiSignInBold className='pt-[23px] pr-4 text-xl ' />
                    <p className='text-xl font-semibold '>LOGIN</p>
                  </div>
               </Link>


               
                
             </div>
         </div>
            
         </div>
    )
}