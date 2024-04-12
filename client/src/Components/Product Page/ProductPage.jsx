import {React, useState} from 'react'
import logo from './Ppimage/LOGO1.png'
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { FaShoppingCart } from 'react-icons/fa'
import rating from './Ppimage/Rating.png'
import Ppdata from './Ppdata';
import Footer from '../Footer/Footer'

const ProductPage = () => {
  const [ item, setItems ] = useState(Ppdata)
  const [value, setValue ] = useState('All')
  const [ length, setLength ] = useState(item.length)
  const btncategory = [ ...new Set(Ppdata.map((val) => val.category))]
  const filterItems = (cat) => {
    const newItems = Ppdata.filter((newval) => newval.category === cat)
    setItems(newItems)
  }

  const sortItems = e => {
    const price = item
    .sort( (a,b) => {
      return(a.price - b.price)
    })
    setItems(price)
  }

  const allItems = () => {
    const all = window.location.reload()
    setItems(all)
  }

  const proLength = () => {
    const length = item.length
    setLength(length)
    console.log(length)
  }
  setTimeout(proLength, 100)
  return (
    <div >
        
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
          <FaSearch className='text-white mr-8'  />
          <FiUser className='text-white text-xl mr-8' />
          <IoCartOutline  className='text-white text-xl'/>
          </div>

        </div>


        <div className='flex '>

          <div>
                <div className='bg-white border-border border-solid border-2 h-auto w-60 m-4 mt-32 p-5 rounded'>
                    <p className='font-body text-white bg-primary p-3 rounded'>Categories</p>
                    <button className='border-border border-solid border-2 rounded bg-white text-ptext container p-3 text-left font-body mb-3 cursor-pointer hover:bg-primary hover:text-white focus:bg-primary focus:text-white'
                      onClick={() => {
                        setItems(Ppdata)
                        proLength()}}>All</button>
                    {btncategory.map(val => (
                      <button className='border-border border-solid border-2 rounded bg-white text-ptext container p-3 text-left font-body mb-3 cursor-pointer hover:bg-primary hover:text-white focus:bg-primary focus:text-white'
                      onClick={() => {
                        filterItems(val)
                        proLength()
                        }}  
                        >{val}</button>
                    ))}
                    

                    <p className='font-body text-white bg-primary p-3 rounded'>Sort By</p>
                    <button className='border-border border-solid border-2 rounded bg-white text-ptext container p-3 text-left font-body mb-3 cursor-pointer hover:bg-primary hover:text-white focus:bg-primary focus:text-white  '
                    onClick={() => allItems()}
                    >All</button>
                    <input type="button" value="Price" className='border-border border-solid border-2 rounded bg-white text-ptext container p-3 text-left font-body mb-3 cursor-pointer hover:bg-primary hover:text-white focus:bg-primary focus:text-white' 
                    onClick = { e => {
                      sortItems() 
                      setValue(e.target.value)
                      proLength()  
                    }}
                    
                    />
                    <button className='border-border border-solid border-2 rounded bg-white text-ptext container p-3 text-left font-body mb-3 cursor-pointer hover:bg-primary hover:text-white active:bg-primary active:text-white  '>Stars</button>
                    <button className='border-border border-solid border-2 rounded bg-white text-ptext container p-3 text-left font-body mb-3 cursor-pointer hover:bg-primary hover:text-white active:bg-primary active:text-white  '>Date added</button>
                </div>
          </div>


          <div>
                <div className='mt-20 mb-10'>
                <div className='flex text-ptext font-body justify-between m-3 -mb-3 '><p className='-ml-48'> <input type="text" value={length} className='bg-transparent border-none text-primary font-bold font-body text-right pr-1 outline-none text-base' />Products</p> <p>Sort By: <input type="text" value={value} className='bg-transparent border-none text-primary font-bold font-body text-base -mr-36 pr-0 outline-none'/></p></div>
                <div className='grid grid-cols-4 '>
                  {item.map((val) => (
                        <div className='m-2' key={val.id}>
                  
                              <div className='border-border border-solid border-2 flex justify-center '>
                                  <img src={val.image} alt={val.Name} />
                              </div>
                              <div className='border-border border-solid border-2 border-t-0 p-2 '>
                                  <p className='text-xl font-body font-medium text-price mt-0 mb-0 mr-16 '>${val.price}</p>
                                  <p className='text-base font-body text-ptext font-medium mb-0 pb-0 mt-0'>{val.Name}</p>
                                  <img src={rating} alt="" height={20} className='mb-3' />
                                  <div className='flex'><button className='text-white font-body bg-black border-0 rounded-full px-3 mr-1 text-xs hover:opacity-75 cursor-pointer '><Link className='no-underline text-white' to={"/productdetails"}>DETAILS</Link></button> <button className='text-white bg-primary border-0 rounded-full p-2 px-5 text-xs hover:opacity-75 cursor-pointer font-body '>ADD TO CART <FaShoppingCart/>  </button></div>
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
          </div>


        </div>
        <Footer/>
    </div>
  )
}

export default ProductPage