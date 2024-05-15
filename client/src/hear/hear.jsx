import React from 'react';

export default function HearUs () {
    return (
      <div className="main flex flex-col bg-bck shadow-md p-10 m-12	 items-center justify-center max-[900px]:m-4">
        <h1 className='text-3xl font-body font-bold '>Hear it first </h1> 
        <h1 className='text-xl mb-12 font-body font-medium -mt-2 text-center '>Get updates on product drops, collaborations and all things E-commerce</h1>
        <input type="text" placeholder='Enter your email' className='w-2/5 p-3 mb-4 border-2 outline-0 rounded-full'/>
        <input
             type='submit'
           value='SIGN UP'
            style={{
             backgroundColor: '#fec700',
            color: 'black',
            padding: '13px',
            border: 'none',
             borderRadius: '50px',
             cursor: 'pointer',
             width: '42%'
      }}
    />


      </div>


    )

}

