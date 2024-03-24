import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

      navigate("/Login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="block justify-center items-center md:flex">
        <div className=" justify-center items-center flex ">
          <div className="bg-gray-300 p-8 mt-8 w-[400px] h-[650px] md:w-[400px] md:h-[650px] lg:rounded-tl-[5px] lg:rounded-bl-[5px]  md:rounded-tl-[5px] md:rounded-bl-[5px]">
            <div className="flex justify-center items-center lg:items-center lg:justify-center ">
              <img src="/logo.png" className="w-[50px] h-[50px]"></img>
              <h2>
                <b>TreasureCart</b>{" "}
              </h2>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="p-4">
                <div className="mb-4">
                  <p className="text-x">
                    <b>Surname</b>
                  </p>
                  <input
                    type="text"
                    placeholder="enter surname"
                    value={surname}
                    onChange={(e) => setsurname(e.target.value)}
                    className="w-[280px] p-1 rounded-lg outline-none"
                  ></input>
                </div>

                <div className="mb-4">
                  <p className="text-x">
                    <b>Firstname</b>
                  </p>
                  <input
                    type="text"
                    placeholder="enter firstname"
                    value={firstname}
                    onChange={(e) => setfirstname(e.target.value)}
                    className="w-[280px] p-1 rounded-lg outline-none"
                  ></input>
                </div>

                <div className="mb-4">
                  <p className="text-x">
                    <b>Othername</b>
                  </p>
                  <input
                    type="text"
                    placeholder="enter user"
                    value={othername}
                    onChange={(e) => setothername(e.target.value)}
                    className="w-[280px] p-1 rounded-lg outline-none"
                  ></input>
                </div>

                <div className="mb-4">
                  <p className="text-x">
                    <b>Email</b>
                  </p>
                  <input
                    type="email"
                    placeholder="enter user"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-[280px] p-1 rounded-lg outline-none"
                  ></input>
                </div>

                <div className="mb-4">
                  <p className="text-x">
                    <b>password</b>
                  </p>
                  <input
                    type="text"
                    placeholder="enter user"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-[280px] p-1 rounded-lg outline-none"
                  ></input>
                </div>

                <div className="mb-4">
                  <p className="text-x">
                    <b>phoneNumber</b>
                  </p>
                  <input
                    type="number"
                    placeholder="enter user"
                    value={phoneNumber}
                    onChange={(e) => setphoneNumber(e.target.value)}
                    className="w-[280px] p-1 rounded-lg outline-none"
                  ></input>
                </div>

                <div className="flex rounded-xl p-2 bg-blue-500 w-[280px] gap-2">
                  <img src="key.svg" className="w-2 ml-16"></img>
                  <button type="submit" className="text-white">
                    Create Account
                  </button>
                </div>

                <div className="flex gap-3 mt-4 ml-4">
                  <p>
                    <b>Already have an account?</b>
                  </p>
                  <Link to={"/login"}>Log-in</Link>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="w-[550px] h-[550px] mt-8 0 md:w-[400px] md:h-[650px] md:bg-green-300 lg:bg-gray-200 lg:rounded-tr-[5px] lg:rounded-br-[5px]  md:rounded-tr-[5px] md:rounded-br-[5px]  ">
          <div className="flex md:mt-8 md:ml-24">
            <img src="/logo.png" className="w-[50px] h-[50px]"></img>
            <h3 className="mt-3">
              <b>TreasureCart</b>
            </h3>
          </div>
          <p className="ml-8 text-xx md:mb-14">
            A place where you can shop any goods online <br /> without any
            difficulties
          </p>
          <img src="/login2.jpeg" className="w[400px] h-[280px] md:ml-12"></img>
          <button className="md:rounded-lg md:p-2 bg-blue-500 md:text-white md:w-[320px] md:ml-10 md:mt-16">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
