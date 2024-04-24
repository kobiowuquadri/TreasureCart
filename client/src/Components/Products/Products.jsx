import React, {useContext, useState} from 'react'
import Pdata from './Pdata'
import  ProductImageContext from  '../../Components/productContext/productContext'

const Products = () => {

  const { addToCart } = useContext(ProductImageContext)
  const [selectedProducts, setSelectedProducts] = useState([]);


  const handleAddToCart = (data) => {
    addToCart(data.id);
    setSelectedProducts(prevSelected => [...prevSelected, data]);

  }
  return (
    <div>
      <div>
        <div className='grid p-10 grid-cols-3'>
          {Pdata.map((data) => (
            <div className=' bg-bck shadow-md m-5 p-10 ' key={data.id}>
              <div className=' flex justify-center'>
                <img
                  src={data.image}
                  height={200}
                  width={200}
                  id='img'
                  alt={data.Name}
                />
              </div>

              <div>
                <p className='text-4xl font-body text-secondary font-medium mb-0 pb-0'> {data.Name}</p>
                <p className=' font-body text-desc text-sm'> {data.desc} </p>
                <div className='flex'>
              <p className='text-2xl font-body font-medium text-price mt-0 mb-0 mr-16 '>{data.price}</p> 
              <button className='text-white bg-black border-0 rounded-full px-10 mx-0  text-xs hover:opacity-75 cursor-pointer ' 
              onClick={() => handleAddToCart(data)}>ADD TO CART</button>
            </div> 
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-center'>
      <button className='text-black mb-1 font-bold bg-primary border-0 rounded-full px-16 py-5 text-1xl hover:opacity-75 cursor-pointer '>VIEW ALL</button>
      </div>
    </div>
  )
}

export default Products
