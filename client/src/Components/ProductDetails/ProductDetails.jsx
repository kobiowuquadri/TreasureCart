import React, {useState} from 'react'
import logo from '../Product Page/Ppimage/LOGO1.png'
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import Ppdata from '../Product Page/Ppdata'
import rating from './Rating.png'
import { FaShoppingCart } from 'react-icons/fa'
import shoe from './Image.png'
import { FaBagShopping } from "react-icons/fa6";
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/navbar';

const ProductDetails = () => {
const [ Quantity, setQuantity ] = useState(1)
  const increase = () => {
    setQuantity((val) => val + 1)
  }
  const decrease = () => {
   
    if (Quantity > 0){
      setQuantity((val) => val - 1)
    }
  }
  return (
    <div >
      <div className='flex'>
        <Navbar/>
      </div>
        <div className='border-primary border-solid h-auto mx-32 mt-32 border max-[900px]:mx-5'>
          <p className='font-body ml-20 mt-10 text-ptext max-[900px]:ml-5'>Product details</p>
          <div className=' font-body flex justify-between px-20 pt-10 pb-10 max-[1200px]:grid max-[900px]:px-5'>
              <div className='max-[1200px]:flex max-[1200px]:justify-center'>
                  <img src={shoe} alt="" width={400} className='mr-20 max-[900px]:w-80 ' />
                  </div>
          
              <div>
                  <div className='flex justify-start'>
                      <img src={rating} alt="" height={20} className='mt-4 pr-4'/>
                      <p className='text-review pr-4'>132 reviews</p>
                      <FaBagShopping className='text-orders mt-4 pr-2' />
                      <p className='text-orders '>674 orders</p>
                  </div>
                  <p className='font-bold text-ptext mb-0'>BLUE LEATHER ADIDAS SNEAKERS</p>
                  <p className='text-price font-semibold text-3xl my-0'>$52.95</p>
                  <p className='text-ptext mt-0 max-[1200px]:pr-20 max-[900px]:pr-24'>Virgil Abloh's Off-White is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black and brown Odsy-1000 low-top sneakers.</p>
                  <div className='flex mb-0 bg-model max-[900px]:bg-transparent'>
                    <p className='text-ptext pl-3 pr-14 text-sm  '> Model: </p><p className='text-ptext  text-sm'>Adidas</p>
                  </div>
                  <div className='flex mt-3'>
                    <p className='text-ptext  pr-16 pl-3 text-sm mt-0 mb-0'> Color: </p><p className='text-ptext mb-0 mt-0 text-sm'>Brown</p>
                  </div>
                  <div className='flex mt-3 bg-model max-[900px]:bg-transparent'>
                    <p className='text-ptext pl-3  pr-10 text-sm '> Delivery: </p><p className='text-ptext  text-sm'>Nation wide</p>
                  </div>
                  <div className='flex mt-6'>
                    <p className='text-ptext pr-24 text-sm max-[900px]:pr-20'>Quantity</p> <p className='text-ptext text-sm'>Select Size</p>
                  </div>
                  <div className='flex'>
                    <div className='flex mr-10 max-[900px]:mr-4'>
                        <button className='bg-transparent w-10 border-border rounded border-r-0 border-solid border text-2xl text-ptext cursor-pointer'
                        onClick={decrease}
                        >-</button>
                        <input type="text" value={Quantity} className=' text-center h-8 w-8 outline-none bg-transparent border-border border-solid border text-ptext' />
                        <button className='bg-transparent w-10 rounded border-border border-l-0  border-solid border text-xl text-ptext cursor-pointer'
                        onClick={increase}
                        >+</button>
                    </div>
                    <div className='mt-2 '>
                      <input type="radio" name="size" className='cursor-pointer'  />
                      <label for='size' className='text-ptext text-sm pr-10 max-[900px]:pr-1'>UK 9</label>
                      <input type="radio" name="size" className='cursor-pointer'  />
                      <label for='size' className='text-ptext text-sm pr-10 max-[900px]:pr-1'>UK 10</label>
                      <input type="radio" name="size" className='cursor-pointer'  />
                      <label for='size' className='text-ptext text-sm pr-10 max-[900px]:pr-1'>UK 11</label>
                    </div>
                  </div>
                  <button className='text-white bg-primary border-0 rounded-full p-2 px-5 text-xs hover:opacity-75 cursor-pointer font-body mt-5 '>ADD TO CART <FaShoppingCart/>  </button>
              </div>
          </div>
        </div>
        <p className='font-body text-ptext ml-32 max-[900px]:ml-10'>Related Products</p>
          <div className='mt-20 mb-10 mx-40 max-[1200px]:mx-20 max-[900px]:mx-0'>
                <div className='grid grid-cols-4 max-[1000px]:grid-cols-3 max-[900px]:grid-cols-2 '>
                  {Ppdata.map((val) => (
                        <div className='m-2' key={val.id}>
                  
                              <div className='border-border border-solid border-2 flex justify-center '>
                                  <img src={val.image} alt={val.Name} className='max-[650px]:w-[150px] max-[650px]:h-[150px]'  />
                              </div>
                              <div className='border-border border-solid border-2 border-t-0 p-2 '>
                                  <p className='text-xl font-body font-medium text-price mt-0 mb-0 mr-16 '>${val.price}</p>
                                  <p className='text-base font-body text-ptext font-medium mb-0 pb-0 mt-0'>{val.Name}</p>
                                  <img src={rating} alt="" height={20} className='mb-3' />
                                  <div className='flex'><Link className='no-underline text-white' to={"/productdetails"}><button className='text-white font-body bg-black border-0 rounded-full px-3 py-2 mr-1 text-xs hover:opacity-75 cursor-pointer max-[900px]:px-1 max-[900px]:py-1 '>DETAILS</button></Link> <Link className='no-underline text-white' to={""}><button className='text-white bg-primary border-0 rounded-full p-2 px-5 text-xs hover:opacity-75 cursor-pointer font-body max-[900px]:px-1 max-[900px]:py-1 '>ADD TO CART < FaShoppingCart className='max-[900px]:hidden'/>  </button></Link></div>

                              </div>
                        </div>
                  ))}
                </div>
                    <div className='flex font-body justify-end mt-5 mr-2 '>
                      <a href="" className='mr-2 no-underline hover:underline'>1</a>
                      <a href="" className='mr-2 no-underline hover:underline'>2</a>
                      <a href="" className='mr-2 no-underline hover:underline'>3</a>
                      <a href="" className='mr-2 no-underline hover:underline'>4</a>
                      <a href="" className='no-underline hover:underline'>View All</a>
                    </div>
                </div>
                <Footer/>

    </div>
  )
}

export default ProductDetails