import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../Register/cart1.png";
import Navbar from "../../../Components/Navbar/navbar";

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:4000/user-login', {
        email,
        password
      })
      console.log(response?.data?.message)

      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='w-screen h-screen'>
      <div style={{
      minHeight: "100vh",
    width: "100%",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  
    }}>
      <div className="flex">
        <Navbar/>
      </div>


       {/* <div className="ml-10 md:flex justify-center items-center md:pt-24 pt-10 ">

      <div className="bg-white p-6 rounded w-[70%] md:w-[26%] md:h-[440px] md:ml-[40%] md:mt-20 rounded-3xl ">
          <h1 className="flex justify-center items-center text-[rgb(254,177,62)] text-4xl">Sign in</h1>

          <form onSubmit={handleSubmit}>
          <div className="">
              <h2>
                <b>Email</b>
              </h2>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=" border border-1 border-gray-200 bg-gray-100 p-2 outline-none  w-[230px] md:w-[370px] md:rounded-lg "
              ></input>
            </div>


            <div className="mt-2 md:mt-2">
              <h2>
                <b>Password</b>
              </h2>
              <input
                type="text"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className=" border border-[1px] border-gray-200 bg-gray-100 p-2 outline-none  w-[230px] md:w-[370px] md:rounded-lg"
              ></input>
            </div>

            <div className="md:flex mt-4">
            <div className="flex gap-1">
            <div className="mt-1">
         <input type="checkbox"></input>
         </div>
          <p className="mt-1">
        <b>Keep me logged in</b>
          </p>
          </div>
         <p className="md:mt-1 md:ml-24">
         <Link className="no-underline text-black" to={"/password"}>forgot password</Link>
           </p>
          </div>
          <button type="submit" value="submit" className="border border-none bg-[rgb(255,161,48)] outline-none p-2  w-[200px] text-white md:ml-24 rounded-lg hover:bg-black ml-6 ">
                    Sign-in
                  </button>

          </form>
         
                  <div className="md:flex">
              <p className="mr-2">Don't have an account?</p>
              <div className='md:mt-4 text-black no-underline'>
              <Link className='no-underline text-black' to={"/Register"}>Sign up</Link>
              </div>
            </div>
                 
      </div>
      
      
       </div> */}
       





       <div className="flex justify-end align-end mt-24 max-[900px]:justify-center max-[900px]:align-center">
      <div className="bg-white font-body  flex justify-center m-12 mb-0 max-[900px]:mb-12 rounded-3xl p-10  max-[900px]:px-6 ">
        <form onSubmit={handleSubmit}>
          <div>
            <p className="text-[rgb(254,177,62)] font-bold text-2xl">Sign-in</p>
          </div>
          <div>
                <div>
                <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=" h-4 mb-8 text-black p-2 w-[400px] max-[900px]:w-[300px]"
              ></input>
                  </div>

                <div>
                <input
                type="text"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className=" h-4 mb-8 text-black p-2 w-[400px] max-[900px]:w-[300px]"
              ></input>
                </div>
                
          </div>

          <div>
              <p className=" hover:underline  mt-0 cursor-pointer "><Link className=" text-[rgb(254,177,62)]" to={"/password"}>forgot password</Link></p>
          </div>

          <div>
          <button
              type="submit"
              className="border-0 bg-[rgb(255,161,48)] outline-none mb-8 w-full font-body text-white  rounded-lg hover:bg-black p-2 px-8 text-base cursor-pointer  "
            >
             Sign-in
            </button>
          </div>

          <div>
              <p className="text-sm font-medium mb-0">Don't have an account?</p>
              <p className=" hover:underline mt-0 cursor-pointer"><Link to={"/Register"} className="text-[rgb(254,177,62)]  ">
                Sign-up here
              </Link></p>
          </div>
          
        </form>
      </div>
    </div>
      </div>
      
    </div>
  )
}

export default Login
