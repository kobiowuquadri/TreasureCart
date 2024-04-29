import React, {useContext} from 'react';
import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import logo from './LOGO1.png';
import { Link } from 'react-router-dom'
import ProductImageContext from '../productContext/productContext';




export default function Navbar (){
    const { productImage } = useContext(ProductImageContext);
    const cartItemCount = Object.values(productImage).reduce((acc, curr) => acc + curr, 0);



    return(

         <div
          className='navbar bg-[#945F21] font-body'
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            fontSize: 18
          }}
        >
          <img src={logo} alt='' id='logo' className='w-10 h-10' />
          <Link className='no-underline' to={"/productpage"}><h4 className='text-white font-light'>PRODUCTS</h4></Link>
          <h4 className='text-white font-light'>ABOUT</h4>
          <h4 className='text-white font-light'>CONTACT US</h4>

          <div className="menuicon ">
          <Link className='no-underline' to={"/search"}><FaSearch className='text-white mr-8'  /></Link>
          <FiUser className='text-white text-xl mr-8' />
          
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
    )
}