import axios from "axios";
import {React, useState, useEffect} from "react";
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault()
   try{
    const response =await axios.post('http://localhost:4000/user-login', {
      email,
      password
    })
    console.log(response?.data?.message)

    navigate('/Home')
   }
   catch(err){
    console.log(err)
   }

  }






  return (
    <div className="">
      <div className="block  md:flex md:bg-red-300  lg:flex lg:bg-blue-500  md:justify-center md:items:center h-screen">
        <div className="p-10 bg-white w-[550px] h-[550px] md:mt-16  md:w-[400px] md:h-[590px] lg:rounded-tl-[5px] lg:rounded-bl-[5px] md:rounded-tl-[5px] md:rounded-bl-[5px]">
          <div className="flex justify-center items-center lg:items-center lg:justify-center ">
            <img src="/logo.png" className="w-[50px] h-[50px]"></img>
            <h2>
              <b>TreasureCart</b>
            </h2>
          </div>
          <h1 className="ml-32 mt-4 text-3xl md:ml-14 md:mt-4 md:text-3xl">
            <b>Welcome back</b>
          </h1>


          <button className="flex md:mt-4 p-2 md:bg-blue-500 md:text-white md:w-[320px] md:rounded-xl bg-red-300 bg-blue-200 mt-8">
            <img src="/g.png" className="w-[10px] h-[10px] mt-2 mr-20"></img>
            <p>Log in with Google</p>
          </button>

          <div className="flex md:mt-4 lg:mt-4 mt-8">
            <hr className="lg:w-20 lg:h-1 md:mr-2 lg:bg-blue-400 lg:mb-4 w-20 bg-black md:bg-gray-200 md:h-1 md:mt-3 mt-3"></hr>
            <p className="">Or login with Email</p>
            <hr className="lg:w-20 md:w-18 md:ml-2 lg:h-1 lg:bg-blue-400 lg:mb-4 w-20 bg-black md:bg-gray-200 md:h-1 md:mt-3 mt-3"></hr>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="">
              <h2>
                <b>Email Address</b>
              </h2>
              <input
                type="email"
                name="email"
                placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)}
                className=" border border-2 border-gray-200 bg-gray-100 p-2 outline-none  w-[320px] md:rounded-lg"
              ></input>
            </div>
            <div className="mt-2 md:mt-2">
              <h2>
                <b>Password</b>
              </h2>
              <input
                type="text"
                name="email"
                placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
                className=" border border-2 border-gray-200 bg-gray-100 p-2 outline-none  w-[320px] md:rounded-lg"
              ></input>
            </div>

            <div className="md:flex md:justify-between mt-4">
              <div className="flex ">
                <div className="md:flex md:mr-2">
                  <button className="mt-2">
                    <img
                      src="/checked.svg"
                      className="absolute w-[15px] h-[2px] "
                    ></img>
                    <img
                      src="/notchecked.svg"
                      className="relative w-[15px] h-[15px]"
                    ></img>
                  </button>
                </div>
                <p className="mt-2">
                  <b>Keep me logged in</b>
                </p>
              </div>
              <p className="mt-2 ">
                <b>forgot passoword</b>
              </p>
            </div>

            <button type="submit" value="submit"   className="md:rounded-lg md:p-2 bg-blue-500 md:text-white md:w-[320px] md:mt-4">
              Log in
            </button>
            <div className="flex mt-4 ml-12">
              <p className="mr-2">Dont have an account?</p>
              <Link to={'/Register'}>Sign up</Link>
            </div>
          </form>
        </div>

        <div className="w-[550px] h-[550px] mt-16 bg-red-300 md:w-[400px] md:h-[590px] md:bg-green-300 lg:bg-gray-200 lg:rounded-tr-[5px] lg:rounded-br-[5px]  md:rounded-tr-[5px] md:rounded-br-[5px] ">
          <div className="flex md:mt-12 md:ml-28">
            <img src="/logo.png" className="w-[50px] h-[50px]"></img>
            <h3 className="mt-3">
              <b>TreasureCart</b>
            </h3>
          </div>
          <p className="ml-8 text-xx">
            A place where you can shop any goods online <br /> without any difficulties
          </p>
          <img src="/login.png" className="w[400px] h-[280px] mt-6"></img>
          <button className="md:rounded-lg md:p-2 bg-blue-500 md:text-white md:w-[320px] md:ml-10">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
