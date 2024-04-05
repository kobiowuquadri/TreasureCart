import React from 'react'
import NewArrival from '../NewArrival/NewArrival'
import Pdata from './Pdata'

const Products = () => {
  return (
    <div>
      <NewArrival />
      <div>
        <div className='grid p-10 grid-cols-3'>
          {Pdata.map((data, index) => (
            <div className=' bg-bck shadow-md m-5 p-10'>
              <div className=' flex justify-center'>
                <img
                  src={data.image}
                  height={200}
                  width={200}
                  id='img'
                  key={index}
                />
              </div>

              <div>
                <p className='text-4xl font-body text-secondary font-medium mb-0 pb-0'> {data.Name}</p>
                <p className=' font-body text-desc text-sm'> {data.desc} </p>
                <div className='flex'>
              <p className='text-2xl font-body font-medium text-price mt-0 mb-0 mr-16 '>{data.price}</p> <button className='text-white bg-black border-0 rounded-full px-10 mx-0  text-xs hover:opacity-75 cursor-pointer '>BUY NOW</button>
            </div> 
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-center'>
      <button className='text-black font-bold bg-primary border-0 rounded-full px-16 py-5 text-1xl hover:opacity-75 cursor-pointer '>VIEW ALL</button>
      </div>
    </div>
  )
}

export default Products
