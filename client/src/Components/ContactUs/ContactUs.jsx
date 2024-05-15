import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import mapImage from "./image/map_image.png";
import backgroundImage from "./image/footerBackground.png";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/Footer";
function ContactUs() {
  return (
    <div className="mainContainer">

      <div className="flex">
        <Navbar/>
      </div>

      <div className="mt-[61px]">
        <div className="map">
          <img src={mapImage} alt="" className="max-w-full"/>
        </div>
        <div className="getInTouch mx-12">
          <h1 className=" flex justify-center text-center font-body font-thin mt-8 mb- max-[900px]:text-2xl">
            Get In Touch With Us
          </h1>
          <hr className=" shortLine mb-8 h-[1.5px] w-16 bg-[#fbb331] border-none" />
          <p className=" flex justify-center text-center items centre mb-12 font-body text-[#979797]">
            We are here to help. Want to learn more about our services? Please get
            in touch, we want to hear from you!
          </p>
        </div>
        <div className=" middle flex items-center justify-center max-[900px]:flex-col-reverse max-[900px]:mt-48 max-[900px]:px-24">
          <div className="inputForm">
            <form>
              <div className="mt-10 mr-[8rem] max-[900px]:mr-0 max-[900px]:mx-0">
                <div className="userName">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    placeholder="Name"
                    className="p-4 w-[400px] mb-[30px] border-2 max-[900px]:w-[300px]"
                  />
                </div>
                <div className="userMail">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="p-4 w-[400px] mb-[30px] border-2 max-[900px]:w-[300px]"
                  />
                </div>
                <div className="userNumber">
                  <input
                    type="number"
                    name="phone-number"
                    id="phone-number"
                    placeholder="Phone"
                    className="p-4 w-[400px] mb-[30px] border-2 max-[900px]:w-[300px]"
                  />
                </div>
                <div className="messageUs">
                  <input
                    type="text"
                    name="message"
                    id="message"
                    placeholder="Message"
                    className=" p-4 w-[400px] h-[120px] mb-[30px] border-2 max-[900px]:w-[300px] "
                  />
                </div>
                <button className=" p-4 w-56 rounded bg-[#ff971f] text-white border-none font-body cursor-pointer hover:bg-black">
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
          <div className=" right p-12 pb-[50px] -mt-[10rem] h-[200px] w-[300px] border-dashed border-black/[.3] border-1 max-[900px]:px-5">
            <h2 className="font-body -mt-[15px] font-thin ">HEADQUATER</h2>
            <div className=" findus mb-8 location flex items-center font-body">
              <div className=" locationIcon text-[#ff971f]">
                <FaLocationPin />
              </div>
              <p className="ml-4 text-[#979797]">
                K16 Zango Street, Gwarimpa Abuja
              </p>
            </div>
            <div className=" callus flex items-center font-body">
              <div className=" phoneIcon text-[#ff971f]">
                <BsFillTelephoneFill />
              </div>
              <p className="ml-4 text-[#979797]">+622025550117</p>
            </div>
            <div className=" mailus flex items-center font-body">
              <div className=" envelopeIcon text-[#ff971f]">
                <FaEnvelope />
              </div>
              <p className="ml-4 text-[#55acee] underline underline-offset-1  ">
                hitreasurecart@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className=" bottom ">
          {/* <div className="bottomImage opacity-25 h-[150px]">
            <img className="object-fill w-[100%]" src={backgroundImage} alt="" />
          </div> */}
          {/* <div className="bottomImage opacity-25 h-[150px]">
            <img
              className="object-fill w-full h-full"
              src={backgroundImage}
              alt=""
            />
          </div> */}
          <div className="  flex text-center items-center justify-center gap-44 bg-[#eff2ec]/[.6] h-40 mt-16 font-body z-0 max-[900px]:gap-0 max-[900px]:p-8 max-[900px]:grid">
            <div className="bottomLeft">
              <h2 className="text-[#fbb331] font-thin">
                Do You Like Treasure Cart? Download it Now
              </h2>
              <p className="-mt-4 font-body text-[#979797]  ">
                Available on playstore and AppStore
              </p>
            </div>
            <div className="bottomRight">
              <button className="p-[12px] rounded w-68 bg-[#ff971f] -mt-8 text-white border-none font-body cursor-pointer hover:bg-black">
                DOWNLOAD NOW! - FOREVER FREE
              </button>
            </div>
          </div>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
