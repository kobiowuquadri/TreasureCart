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
}

export default App;
