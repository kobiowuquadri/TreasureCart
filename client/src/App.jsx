
import React from "react";
import Login from "./Pages/User/LogIn/LogIn";
import Register from './Pages/User/Register/Register';
import {Route, Routes } from "react-router"
import Home from "./Pages/Home/Home";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </div>
    </>
  );


import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Footer from "./Components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Footer />
    </>
  );


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

export default App;
