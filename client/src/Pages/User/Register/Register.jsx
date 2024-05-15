import React, {  useState, useEffect } from "react";
import backgroundImage from "./cart1.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SignInWithGoogle from '../../../testlogin/testlogin'
import Navbar from "../../../Components/Navbar/navbar";



function Register() {
  const [surname, setsurname] = useState("");
  const [firstname, setfirstname] = useState("");
  const [othername, setothername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/user-register", {
        surname,
        firstname,
        othername,
        email,
        password,
        phoneNumber,
      });
      console.log(response?.data?.message);

      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  // const handleCustomGoogleSignInClick = () => {
  //   // Programmatically trigger Google Sign-In when custom button is clicked
  //   const googleLoginButton = document.getElementById("google-login-button");
  //   if (googleLoginButton) {
  //     googleLoginButton.click();
  //   }
  // };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      
    >
      <div className="flex"><Navbar/></div>
      {/* <div className=" flex justify-end items-center  pt-8 font-body w-3/5 ">
        <div className="bg-white p-6 w-[80%]  rounded-3xl">
          <h2 className="flex justify-center items-center text-[rgb(254,177,62)]">
            Create an account
          </h2>

        

        <div className="bg-white p-6   w-[80%] md:w-[35%] md:h-[440px] md:ml-[40%] md:mt-8 rounded-3xl">
          <h2 className="flex justify-center items-center text-[rgb(254,177,62)]">Create an account</h2>

          <form onSubmit={handleSubmit}>
            <div className="lg:flex md:block block ">
              <div className="  md:ml-4 ml-10">
                <p>
                  <input
                    type="text"
                    placeholder="Surname"
                    name="surname"
                    value={surname}
                    onChange={(e) => setsurname(e.target.value)}
                    className="p-2 bg-gold-100 outline-none  w-[200px] md:rounded-lg"
                  ></input>
                </p>
                <p>
                  <input
                    type="text"
                    placeholder="FirstNmae"
                    name="firstname"
                    value={firstname}
                    onChange={(e) => setfirstname(e.target.value)}
                    className="p-2  bg-gold-100 outline-none  w-[200px] md:rounded-lg"
                  ></input>
                </p>
                <p>
                  <input
                    type="text"
                    placeholder="othername"
                    name="othername"
                    value={othername}
                    onChange={(e) => setothername(e.target.value)}
                    className="p-2 bg-gold-100 outline-none  w-[200px] md:rounded-lg"
                  ></input>
                </p>
              </div>
              <div className="ml-10">
                <p>
                  <input
                    type="email"
                    placeholder="email"
                    value={email}
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-2   bg-gold-100 outline-none  w-[200px] md:rounded-lg"
                  ></input>
                </p>
                <p>
                  <input
                    type="text"
                    placeholder="PhoneNumber"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setphoneNumber(e.target.value)}
                    className="p-2  bg-gold-100 outline-none  w-[200px] md:rounded-lg"
                  ></input>
                </p>
                <p>
                  <input
                    type="text"
                    placeholder="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="p-2  border-  bg-gold-100 outline-none  w-[200px] md:rounded-lg"
                  ></input>
                </p>
              </div>
            </div>
            <div>
              <div className="flex lg:ml-24 md:ml-24 ml-7 ">
                <button className="w-[13px] h-[10px] relative ml-4 mt-5 p-1 ml-24">
                  <img
                    src="./checked.svg"
                    className="w-[10px] h-[10px] absolute inset-0 hidden"
                  />
                  <img
                    src="./notchecked.svg"
                    className="w-[10px] h-[10px] absolute inset-0 "
                  />
                </button>

              <input type="checkbox"></input>
                <p className="w-72 r-32 ml-2 text-sm">
                  <b>Accept Terms of Use & Privacy policy</b>
                </p>
              </div>
            </div>
            <button
              type="submit"
              className="border-0 bg-[rgb(255,161,48)] outline-none p-3  w-[200px] text-white md:ml-40 rounded-lg hover:bg-black ml-12 "
            >
              Create Account
            </button>

            <div className="md:flex mt-4 block">
              <div className="md:mt-4 md:mr-12 md:ml-4 ml-12">
                < SignInWithGoogle />
              
               
              </div>

              <div className="mt-4 md:ml-8 ml-12">
                <button className="w-[200px] h-[35px] p-2 bg-white rounded border  border-black flex items-center ">
                  <img src="./f.svg" className="w-[10px] mr-2" />
                  <p className="text-[rgb(254,177,62)]">
                    Sign up with facebook
                  </p>
                </button>
              </div>
              
            </div>
            
            <div className="md:flex ml-4">
              <p>Already have an account?</p>
              <Link to={"/login"} className="no-underline mt-4 ml-2 text-black">
                Sign in here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div> */}




  
    <div className="flex justify-end align-end mt-12 max-[900px]:justify-center max-[900px]:align-center">
      <div className="bg-white font-body w-2/5 flex justify-center  m-12 mb-0 max-[900px]:mb-12 rounded-3xl p-5 max-[900px]:w-screen max-[900px]:pl-12 ">
        <form onSubmit={handleSubmit}>
          <div>
            <p className="text-[rgb(254,177,62)] font-bold text-xl">Create an account</p>
          </div>
          <div>
                <div>
                  <input
                            type="text"
                            placeholder="Surname"
                            name="surname"
                            value={surname}
                            onChange={(e) => setsurname(e.target.value)}
                            className=" h-4 mr-8 mb-8 text-black p-2 max-[900px]:w-4/5"
                          ></input>
                  
                  
                          <input
                            type="text"
                            placeholder="First Name"
                            name="firstname"
                            value={firstname}
                            onChange={(e) => setfirstname(e.target.value)}
                            className=" h-4 mr-8 mb-8 text-black p-2 max-[900px]:w-4/5"
                          ></input>
                </div>
                
                
                  <div>
                    <input
                      type="text"
                      placeholder="Othername"
                      name="othername"
                      value={othername}
                      onChange={(e) => setothername(e.target.value)}
                      className=" h-4 mr-8 mb-8 text-black p-2 max-[900px]:w-4/5"
                    ></input>
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                      className=" h-4 mr-8 mb-8 text-black p-2 max-[900px]:w-4/5"
                    ></input>
                  </div>
              
              
                  <div>
                    <input
                      type="text"
                      placeholder="PhoneNumber"
                      name="phoneNumber"
                      value={phoneNumber}
                      onChange={(e) => setphoneNumber(e.target.value)}
                      className=" h-4 mr-8 mb-8 text-black p-2 max-[900px]:w-4/5"
                    ></input>
                                    
                                    
                    <input
                      type="text"
                      placeholder="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className=" h-4 mr-8 mb-8 text-black p-2 max-[900px]:w-4/5"
                    ></input>
                  </div>
                
          </div>

          <div>
              <input type="checkbox" name="accept" className="mr-2  mb-0 cursor-pointer"/>
              <label htmlFor="" className="text-sm font-medium mb-0">Accept Terms of Use & Privacy policy</label>
              <p className="text-[rgb(254,177,62)] hover:underline  ml-7 mt-0 cursor-pointer">Terms and Conditions</p>
          </div>

          <div>
          <button
              type="submit"
              className="border-0 bg-[rgb(255,161,48)] outline-none mb-8  text-white  rounded-lg hover:bg-black p-2 px-8 text-base cursor-pointer  "
            >
              Create Account
            </button>
          </div>

          <div className="flex mb-8 max-[900px]:grid">
          < SignInWithGoogle />

          <button className="w-[200px] h-[35px] p-2 bg-white rounded border  border-black flex items-center cursor-pointer max-[900px]:mt-4 ">
                  <img src="./f.svg" className="w-[10px] mr-2" />
                  <p className="text-[rgb(254,177,62)]">
                    Sign up with facebook
                  </p>
                </button>
          </div>

          <div>
              <p className="text-sm font-medium mb-0">Already have an account?</p>
              <p className=" hover:underline mt-0 cursor-pointer"><Link to={"/login"} className="text-[rgb(254,177,62)]  ">
                Sign in here
              </Link></p>
          </div>
          
        </form>
      </div>
    </div>
    </div>
  );
}

export default Register;
