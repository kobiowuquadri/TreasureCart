import axios from "axios";
import { React, useState, useEffect } from "react";
import backgroundImage from "../Register/cart1.png";
import { Link } from "react-router-dom";
import Navbar from "../../../Components/Navbar/navbar";

const Forgot = () => {
    const [email, setEmail] = useState("");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post("http://localhost:4000/forget-password", {
          email
        });
        console.log(response?.data?.message);
  
      } catch (err) {
        console.log(err);
      }
    };
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


       {/* <div className="ml-10 md:flex justify-center items-center md:pt-24 pt-10 ml-12">

      <div className="bg-white p-6 rounded mt-24 w-[230px] md:w-[370px] md:h-[340px] md:ml-[40%] md:mt-28 rounded-3xl">

          <form onSubmit={handleSubmit}>
          <div className="">
              <h2>
                <b className="text-[rgb(254,177,62)]">Forgot password</b>
              </h2>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=" border border-1 border-gray-200 bg-gray-100 p-2 outline-none  w-[220px] md:w-[330px] md:rounded-lg "
              ></input>
            </div>
          <button type="submit" value="submit" className="border border-none bg-[rgb(255,161,48)] outline-none p-2  w-[220px] text-white md:ml-16 rounded-lg hover:bg-black ml-2 mt-8">
                    continue
                  </button>

          </form>
         
                  <div className="md:flex md:ml-20 ml-6 flex">
              <p className="mr-2">Remember password?</p>
              <div className='md:mt-4 mt-4 text-black no-underline'>
              <Link className='no-underline text-black ' to={"/login"}>login</Link>
              </div>
            </div>
                 
      </div>
      
      
       </div> */}






       <div className="flex justify-end align-end mt-24  max-[900px]:justify-center max-[900px]:align-center max-[900px]:mt-12">
      <div className="bg-white font-body w-1/5  px-32 flex justify-center m-12 mb-0 max-[900px]:mb-12 rounded-3xl p-10 max-[900px]:w-screen max-[900px]:px-12">
        <form onSubmit={handleSubmit}>
          <div>
            <p className="text-[rgb(254,177,62)] mb-2 font-bold text-2xl">Forget Password</p>
            <p className="text-sm font-medium text-slate-700 mt-0">Enter the email address associated with your account and we'll send you a link to rest your password.</p>
          </div>

          <div>
          <input
                type="email"  
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=" h-4 mb-8 text-black p-2 w-[400px] max-[900px]:w-full "
              ></input>
                
          </div>


          <div>
          <button
              type="submit"
              className="border-0 bg-[rgb(255,161,48)] outline-none mb-8 w-full font-body text-white  rounded-lg hover:bg-black p-2 px-8 text-base cursor-pointer  "
            >
             Continue
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

export default Forgot
