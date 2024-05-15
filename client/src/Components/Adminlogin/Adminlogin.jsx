import axios from "axios";
import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import backgroundImage from "./cart1 copy.png";
import Navbar from "../Navbar/navbar";
import './Adminlogin.css'

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/user-login", {
        email,
        password,
      });
      console.log(response?.data?.message);

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
//   style={{ backgroundColor: '#ffa030' }}
  return (
    <div className="w-screen h-screen "  >
      <div
        style={{
          minHeight: "100vh",
          width: "100%",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          
          
        }}
      >

        <div className="flex">
        <Navbar/>
        </div>

        {/* <div className="ml-10 md:flex justify-center items-center md:pt-24 pt-10 ">
          <div className="bg-white p-6 rounded w-[70%] md:w-[26%] md:h-[440px] md:ml-[40%] md:mt-20 rounded-3xl">
            <h1 className="flex justify-center font-body items-center text-[rgb(254,177,62)] text-3xl">
              Admin Sign-in
            </h1>

            <form onSubmit={handleSubmit}>
              <div className="ml-6">
                <h2>
                  <b className="font-body  text-base">Username</b>
                </h2>
                <input
                  type="email"
                  name="email"
                  placeholder="username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className=" border-2 border-black  p-3 outline-none  w-[200px] md:w-[300px] md:rounded-lg "
                ></input>
              </div>

              <div className=" ml-6 mt-2 md:mt-2">
                <h2>
                  <b className="font-body text-base">Password</b>
                </h2>
                <input
                  type="text"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className=" border-2 border-black p-3 mb-3 outline-none  w-[200px] md:w-[300px] md:rounded-lg"
                ></input>
              </div>

              <div className="flex ">
                <div className="flex text-center  ">
                  <div className="md:flex md:mr-2">
                    <input
                      type="checkbox"
                      name="checkbox"
                      id="checkbox"
                      className="ml-6 w-4 mb-2"
                    />
                  </div>
                  <p className="mt-2">
                    <b className=" text-xs font-body">Keep me logged in</b>
                  </p>
                </div>
                <p className="md:mt-1 md:ml-24">
                  <b className=" text-xs font-body">Forgot password</b>
                </p>
              </div>
              <button
                type="submit"
                value="submit"
                className="border border-none bg-[rgb(255,161,48)] outline-none p-3  w-[200px] text-white md:ml-24 rounded-lg hover:bg-black ml-6 "
              >
                Sign-in
              </button>
            </form>

            
          </div>
        </div> */}


        
       <div className="flex justify-end align-end mt-24 max-[900px]:justify-center max-[900px]:align-center">
      <div className="bg-white font-body  flex justify-center m-12 mb-0 max-[900px]:mb-12 rounded-3xl p-10  max-[900px]:px-6  ">
        <form onSubmit={handleSubmit}>
          <div>
            <p className="text-[rgb(254,177,62)] font-bold text-2xl">Admin Sign-in</p>
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
          <input type="checkbox" name="accept" className="mr-2  mb-0 cursor-pointer"/>
              <label htmlFor="" className="text-sm font-medium mb-0">Keep me logged in</label>
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

          
        </form>
      </div>
    </div>
      </div>
    </div>
  );
};

export default AdminLogin;
