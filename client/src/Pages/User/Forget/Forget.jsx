import axios from "axios";
import { React, useState, useEffect } from "react";
import backgroundImage from "./cart1.png";
import { Link } from "react-router-dom";

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
      minHeight: "120vh",
    width: "100%",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  
    }}>
       <div className="ml-10 md:flex justify-center items-center md:pt-24 pt-10 ml-12">

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
      
      
       </div>
       
      </div>
      
    </div>
  )
}

export default Forgot
