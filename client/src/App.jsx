
import React from 'react'
import { Routes, Route} from 'react-router'
import Home from './Pages/Home/Home'


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home/Home'


function App() {



  return (
    <>

     
     <Routes>
      
      <Route index element={<Home/>}></Route>

     </Routes>

     <div>
      <Home/>
     </div>

    </>
   
  )
}

export default App
