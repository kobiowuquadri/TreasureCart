import React from 'react'
import { Routes, Route} from 'react-router'
import Home from './Pages/Home/Home'



function App() {



  return (
    <>
     
     <Routes>
      
      <Route index element={<Home/>}></Route>

     </Routes>
    </>
   
  )
}

export default App
