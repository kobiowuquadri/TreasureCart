import React from 'react'
import NAdata from './NAdata'
import './NewArrival.css'

function NewArrival() {
  return (
    <div>
      <div >
      <strong className='ml-4 text-3xl' id='head'>NEW ARRIVALS</strong>
      <div id='flex' >
        
              {NAdata.map((data, index) => (

                <div className='m-4 p-10 px-16 bg-white shadow-md  rounded'>
                  <img
                  src={data.image}
                  height= {200}
                  width= {200}
                  id='img'
                  className='bg-white'
                  key = {index}
                  />

                  <div id='txt'>
                    <p className='bg-white content-start'> {data.Name}</p>
                    <p className='bg-white justify-start'><strong className='bg-white'>{data.price}</strong></p>
                  </div>
                </div>

                
              
              ))}
              

            </div>
      </div>
    </div>
  )
}

export default NewArrival