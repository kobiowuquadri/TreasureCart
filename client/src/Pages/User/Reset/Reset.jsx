import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import backgroundImage from "./cart1.png";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const { userId, token } = useParams(); // Get userId and token from URL params

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      console.error('Passwords do not match');
      // Handle password mismatch error
      return;
    }

    try {
      const response = await axios.post('http://localhost:4000/resetpassword', {
        userId,
        token,
        newPassword,
      });

      console.log(response.data); // Handle response appropriately
      navigate('/login'); // Navigate to the login page after resetting password
    } catch (error) {
      console.error('Error resetting password:', error);
      // Handle error appropriately
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
       <div className="ml-10 md:flex justify-center items-center md:pt-24 md:pt-10 pt-20 ">

      <div className="bg-white p-6 rounded md:h-[300px] w-[250px] md:w-[400px] md:ml-[40%] md:mt-32 rounded-3xl">
          

          <form onSubmit={handleResetPassword}>
          <div className="">
              <h2>
                <b  className='text-[rgb(254,177,62)] '>Reset Password</b>
              </h2>
              <input
                type="password"
                name="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className=" border border-1 border-gray-200 bg-gray-100 p-2 outline-none  w-[230px] md:w-[370px] md:rounded-lg "
              ></input>
            </div>
            <div className="">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className=" border border-1 border-gray-200 bg-gray-100 p-2 outline-none  w-[230px] md:w-[370px] md:rounded-lg mt-2"
              ></input>
            </div>
          <button type="submit" value="submit" className="border border-none bg-[rgb(255,161,48)] mt-4 outline-none p-2  w-[200px] text-white md:ml-24 rounded-lg hover:bg-black ml-6 ">
                    Submit
                  </button>

          </form>
         
                  <div className="md:flex md:ml-24 flex ml-4">
              <p className="mr-2">Don't have an account?</p>
              <div className='md:mt-4 mt-4 text-black no-underline'>
              <Link className='no-underline text-black' to={"/login"}>Sign up</Link>
              </div>
            </div>
                 
      </div>
      
      
       </div>
       
      </div>
      
    </div>
  );
};

export default ResetPassword;
