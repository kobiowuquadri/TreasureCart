import React from 'react'
import logo from '../Navbar/LOGO1.png'
import { AiOutlineDashboard } from "react-icons/ai";
import { BsClipboardCheck } from "react-icons/bs";
import { BsGraphUp } from "react-icons/bs";
import { IoPricetagsOutline } from "react-icons/io5";
import { BsBag } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";
import { SlBookOpen } from "react-icons/sl";
import { SlEarphonesAlt } from "react-icons/sl";
import { FaSearch } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import { FiUser } from "react-icons/fi";
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div>
        <div className='flex h-screen font-body bg-[#FAF8F6] '>
            <div className='bg-[#FF9017] flex align-middle flex-col text-white p-10 pr-0 '>
                <div className='flex align-middle justify-center mb-5'><img src={logo} alt="logo" className='w-14 ' /></div>
                <div className="flex my-2 px-5 pr-24 rounded-l-3xl side  text-sm cursor-pointer hover:bg-white hover:text-[#FBB331] focus:bg-white focus:text-[#FBB331]">
                    <AiOutlineDashboard className='mr-4 text-xl mt-3.5 ' />
                    <p>Dashboard</p>
                </div>
                <div className="flex my-2 px-5 pr-24 rounded-l-3xl side  text-sm cursor-pointer hover:bg-white hover:text-[#FBB331] focus:bg-white focus:text-[#FBB331]">
                    <BsClipboardCheck className='mr-4 text-xl mt-3.5 ' />
                    <p>Orders</p>
                </div>
                <div className="flex my-2 px-5 pr-24 rounded-l-3xl side  text-sm cursor-pointer hover:bg-white hover:text-[#FBB331] focus:bg-white focus:text-[#FBB331]">
                    <BsGraphUp className='mr-4 text-xl mt-3.5 ' />
                    <p>Revenue</p>
                </div>
                <div className="flex my-2 px-5 pr-24 rounded-l-3xl side  text-sm cursor-pointer hover:bg-white hover:text-[#FBB331] focus:bg-white focus:text-[#FBB331]">
                    <IoPricetagsOutline className='mr-4 text-xl mt-3.5 ' />
                    <p>Hot Deals</p>
                </div>
                <div className="flex my-2 px-5 pr-24 rounded-l-3xl side  text-sm cursor-pointer hover:bg-white hover:text-[#FBB331] focus:bg-white focus:text-[#FBB331]">
                    <BsBag className='mr-4 text-xl mt-3.5 ' />
                    <p>My Products</p>
                </div>
                <div className="flex my-2 px-5 pr-24 rounded-l-3xl side  text-sm cursor-pointer hover:bg-white hover:text-[#FBB331] focus:bg-white focus:text-[#FBB331]">
                    <IoIosHeartEmpty className='mr-4 text-xl mt-3.5 ' />
                    <p>Wishlist</p>
                </div>


                <div className='flex mr-5 justify-center flex-col align-middle text-center mt-3 border-dashed border-2 border-[#FBB331] p-4 rounded hover:border-white hover:text-[#FBB331] cursor-pointer'>
                    <div className='flex align-middle justify-center text-xl mb-0'><SlBookOpen/></div>
                    <p className='text-lg mt-0 mb-0'>Need Help?</p>
                    <p className='text-xs mt-0'>Check our documentation</p>
                </div>

                <div className='flex justify-center align-middle mt-2 hover:text-[#FBB331] cursor-pointer'>
                    <SlEarphonesAlt className='mt-4 mr-4' />
                    <p>Live Support</p>
                </div>
            </div>





            <div >
                <div className='flex space-x-96'>
                    <div className="flex justify-center mt-10 ml-5">
                        <FaSearch className="text-[#292D34] text-2xl relative left-10 top-2 " />
                        <input
                        type="text"
                        className="  pl-14  p-3 border-none outline-none bg-white font-body rounded w-96 text-black "
                        placeholder="Search here..."
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                        />

                    </div>

                    <div className='mt-10 text-xl '>
                        <IoSettingsOutline className='m-3 cursor-pointer' />
                        <GoBell className='m-3 cursor-pointer' />
                        <FiUser className='m-3 cursor-pointer'  />
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard