import React, {useState, useContext, useEffect}from 'react';
import logo from '../HeroSection/LOGO1.png'
import './checkout.css'
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import visa from '../Checkout/visacard.png'
import master from '../Checkout/Mastercardcard.png'
import discover from '../Checkout/discovercard.png'
// import bag from '../Checkout/bag1.png'
import Products from  '../Products/Products'
import ProductImageContext from '../productContext/productContext';
import Pdata from '../Products/Pdata';
import { MdOutlineDelete } from "react-icons/md";





export default function Checkout() {

    const { productImage, removeFromCart } = useContext(ProductImageContext);
    const [totalPrice, setTotalPrice] = useState(0);
    const [expirationDate, setExpirationDate] = useState("");
    const [creditCardNumber, setCreditCardNumber] = useState("");
    const cartItemCount = Object.values(productImage).reduce((acc, curr) => acc + curr, 0);
  
    const handleCreditCardInputChange = (event) => {
      // Remove any non-numeric characters
      const input = event.target.value.replace(/\D/g, "");
    
      // Insert a space before the 5th digit
      let formattedInput = input.replace(/(\d{4})(?=\d)/g, "$1 ");
        setCreditCardNumber(formattedInput);
    };
  
    const handleExpirationDateInputChange = (event) => {
      // Remove any non-numeric characters
      const input = event.target.value.replace(/\D/g, "");
    
      // Insert a slash after the second digit
      let formattedInput = input.replace(/^(\d{2})/, "$1/");
    
      // Update the state with the formatted input
      setExpirationDate(formattedInput);
    };
    
    useEffect(() => {
      let totalPrice = 0;
      Object.entries(productImage).forEach(([itemId, quantity]) => {
        const item = Pdata.find((data) => data.id === parseInt(itemId));
        if (item && quantity > 0) {
          const priceNumber = parseFloat(item.price.replace("$", ""));
          totalPrice += priceNumber * quantity;
        }
      });
      setTotalPrice(totalPrice);
    }, [productImage]);
  
  
    return (
      <div className="contentcontainer" style={{ padding: 30 }}>
        <div
          className="navbar bg-[#945F21] -ml-10 -mr-10 -mt-8 mb-40"
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
          </Link>
          <Link to='/productpage' className="underline-none">
          <h4 className=" text-white font-body font-light">PRODUCTS</h4>
          </Link>
          <h4 className="text-white font-body font-light">ABOUT</h4>
          <h4 className="text-white font-body font-light">CONTACT US</h4>
  
          <div className="menuicon ">
            <FaSearch className="text-white mr-8" />
            <FiUser className="text-white text-xl mr-8" />
            <Link to="">
            <IoCartOutline className='text-white text-xl' />
            {cartItemCount > 0 && (
                <span className='text-white text-xs bg-red-500 rounded-full px-1'>
                  {cartItemCount}
                </span>
              )}
          </Link>          </div>
        </div>
  
        <div className="secondary ">
          <div className="primary primaryborder ml-72 flex justify-center">
            <div className="getcard">
              <div className="carddiv  card-border flex space-x-4">
                <div className="visa mt-4 flex flex-col justify-center items-center hover:bg-blue-200 hover:cursor-pointer hover:border-black p-2 ">
                  <img src={visa} alt="" className="w-16" />
                  <h1 className="text-sm font-body font-thin">Ending in 1234</h1>
                </div>
                <div className="master mt-4 flex flex-col justify-center items-center hover:cursor-pointer hover:bg-blue-200 hover:border-black p-2  ">
                  <img src={master} alt="" className="w-16" />
                  <h1 className="text-sm font-body font-thin">Ending in 1234</h1>
                </div>
                <div className="discover mt-4 flex flex-col justify-center hover:cursor-pointer items-center hover:bg-blue-200 hover:border-black p-2 ">
                  <img src={discover} alt="" className="w-16" />
                  <h1 className="text-sm font-body font-thin">Ending in 1234</h1>
                </div>
              </div>
              <h1 className="font-body">New Card</h1>
              <form action="" className="flex flex-col font-body">
                <input
                  type="text"
                  placeholder="Name on Card"
                  style={{
                    padding: "10px",
                    outline: "none",
                    marginBottom: "20px",
                    width: "310px",
                  }}
                />
                <input
                  type="text"
                  placeholder="111- 111- 222- 4444"
                  name="number"
                  id="number"
                  value={creditCardNumber}
                  onChange={handleCreditCardInputChange}
                  style={{
                    padding: "10px",
                    outline: "none",
                    marginBottom: "20px",
                    width: "310px",
                  }}
                />
                <div className="getflex ">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    name="expiry"
                    value={expirationDate}
                    onChange={handleExpirationDateInputChange}
                    id="expiry"
                    style={{
                      padding: "10px",
                      outline: "none",
                      marginBottom: "20px",
                      width: "150px",
                      marginRight: "27px",
                    }}
                  />
                  <input
                    type="text"
                    placeholder="CVC"
                    name="cvc"
                    id="cvc"
                    style={{
                      padding: "10px",
                      outline: "none",
                      marginBottom: "20px",
                      width: "110px",
                    }}
                  />
                </div>
                <div className="getchecout mb-3 flex">
                  <input type="checkbox" name="check" id="check" />{" "}
                  <h1 className="text-sm font-thin">Add Card to wallet</h1>
                </div>
                <input
                  type="submit"
                  value="Continue"
                  style={{
                    padding: "10px",
                    outline: "none",
                    marginBottom: "20px",
                    width: "330px",
                    backgroundColor: "#ffac2f",
                    color: "white",
                    border: "none",
                  }}
                />
              </form>
            </div>
            <div className="getproduct product-border ">
              <div className="getproductconatiner ml-12 font-body text-[7px] h-full w-96 bg-[#fafafa] border-4">
                <div className="theproduct mb-[10rem] flex  ">
                  <ul>
                    {Object.entries(productImage).map(([itemId, quantity]) => {
                      const item = Pdata.find(
                        (data) => data.id === parseInt(itemId)
                      );
                      if (item && quantity > 0) {
                      //   const priceNumber = parseFloat(
                      //     item.price.replace("$", "")
                      //   );
                      //   const totalPrice = priceNumber * quantity;
                        return (
                          // <div className="image mr-2">
                          //   <img src="" alt="Product" className="w-16 h-20 object-cover" />
                          // </div>
  
                          // <div className="description ">
                          //   <h1 className="-mb-2 font-thin">{item.Name}</h1>
                          //   <h2 className="text-sm -mb-0 font-thin">stock</h2>
                          //   <span className="text-[10px] mr-2">Quantity: {quantity}</span>{" "}
                          // </div>
                          // <div className="price">
                          //    <p>Price: ${totalPrice.toFixed(2)}</p> {/* Format price as currency */}
                          // </div>
                          <li className="flex mb-4" key={itemId}>
                            <div className="image mr-10">
                              <img
                                src={item.image}
                                alt={item.Name}
                                className="w-16 h-12 object-cover"
                              />
                            </div>
                            <div className="description mr-10 ">
                              <p className="-mb-2 text-[10px] font-thin">
                                {item.Name}
                              </p>
                              <p className="text-[10px] mr-2">
                                Quantity: {quantity}
                              </p>
                            </div>
                            <div className="price flex text-center space-x-4 items-center text-[10px]">
                              <p>Price: {item.price}</p>{" "}
                              {/* Format price as currency */}
                              <MdOutlineDelete onClick={() => removeFromCart(itemId)} />
                            </div>
                          </li>
                        );
                      }
                      return null;
                    })}
                  </ul>
                </div>
  
                <div className="total gettextborder ml-4 p-2 space-x-56 flex " style={{ position: 'sticky', top: '20px', zIndex: 1 }} >
                  <div className="gettext ">
                    <h1 className="text-sm font-thin">Subtotal</h1>
                    <h1 className="text-sm font-thin">Shipping</h1>
                    <h1 className="text-sm font-thin">Taxes</h1>
                  </div>
                  <div className="showtotal ">
                    <h1 className="text-sm font-thin">${totalPrice.toFixed(2)}</h1>
                    <h1 className="text-sm font-thin">Free</h1>
                    <h1 className="text-sm font-thin">Free</h1>
                  </div>
                </div>
  
                <div className="maintotal maintotalborder ml-4 p-2 space-x-64 flex">
                  <h1 className="text-sm font-thin">Total</h1>
                  <h2 className="text-[13px] font-thin">${totalPrice.toFixed(2)}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

