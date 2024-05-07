import React, { useState } from "react";
import Ppdata from "../Product Page/Ppdata";
import rating from "../Product Page/Ppimage/Rating.png";
import Footer from "../Footer/Footer";
import logo from "../Product Page/Ppimage/LOGO1.png";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
const Search = () => {
  const [search, setSearch] = useState(" ");
  return (
    <div>
      <div
        className="navbar bg-[#945F21] font-body"
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-evenly",
          fontSize: 18,
        }}
      >
        <Link to="/">
          <img src={logo} alt="" id="logo" className="w-10 h-10" />
        </Link>{" "}
        <Link className="no-underline" to={"/productpage"}>
          <h4 className="text-white font-light">PRODUCTS</h4>
        </Link>
        <h4 className="text-white font-light">ABOUT</h4>
        <h4 className="text-white font-light">CONTACT US</h4>
        <div className="menuicon ">
          <Link className="no-underline" to={"/search"}>
            <FaSearch className="text-white mr-8" />
          </Link>
          <FiUser className="text-white text-xl mr-8" />
          <IoCartOutline className="text-white text-xl" />
        </div>
      </div>

      <div className="flex justify-center m-10 mx-80 max-[900px]:mx-0">
        <FaSearch className="text-zinc-500 text-2xl relative left-10 top-2 " />
        <input
          type="text"
          className=" mr-5 pl-14 container p-3 border-border border-solid border-2 outline-none font-body rounded "
          placeholder="Search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        {/* <button className='bg-primary cursor-pointer font-body border-none px-5 text-white shadow-md rounded font-bold'
                
                >SEARCH</button> */}
      </div>

      <div className="grid grid-cols-4 max-[1200px]:grid-cols-3 max-[900px]:grid-cols-2 mx-20 max-[900px]:mx-5">
        {Ppdata.filter((val) => {
          if (search == "") {
            return val;
          } else if (val.Name.toLowerCase().includes(search.toLowerCase())) {
            return val;
          }
        })
        .map((val) => (
          <div className="m-2 bg-bck hover:shadow-2xl" key={val.id}>
            <div className=" flex justify-center  ">
              <img src={val.image} alt={val.Name} />
            </div>
            <div className=" p-2 ">
              <p className="text-xl font-body font-medium text-price mt-0 mb-0 mr-16 ">
                ${val.price}
              </p>
              <p className="text-base font-body text-ptext font-medium mb-0 pb-0 mt-0">
                {val.Name}
              </p>
              <img src={rating} alt="" height={20} className="mb-3" />
              <button className="container border-none bg-primary text-white font-body font-bold p-3 rounded hover:shadow-lg hover:opacity-80 cursor-pointer  ">
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Search;
