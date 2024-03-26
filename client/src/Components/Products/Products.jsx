import React from 'react'
import NewArrival from '../NewArrival/NewArrival'
import './Product.css'
import Pdata from './Pdata'

const Products = () => {
  return (
    <div id='bck'>
      <NewArrival />
      <div>
        <strong className=' text-3xl' id='head'>
          PRODUCTS
        </strong>
        <div id='flex2'>
          {Pdata.map((data, index) => (
            <div className='m-1 p-10 px-16 bg-white shadow-md  rounded'>
              <img
                src={data.image}
                height={200}
                width={200}
                id='img'
                className='bg-white'
                key={index}
              />

              <div id='txt'>
                <p className='bg-white content-start'> {data.Name}</p>
                <p className='bg-white justify-start'>
                  <strong className='bg-white'>{data.price}</strong>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products
