import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Responsive} from './specialdata'




function Resspecial() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <div>

      

    <div className="justify-center p-5 min-[900px]:hidden ">
    <Slider {...settings}>
    {Responsive.map((data, index) => (
      
      <div key={index}><img src={data.image} alt="" className="max-w-full shadow-lg " /></div>
      ))}
       </Slider>

    </div>
    
   

    </div>
  )
}

export default Resspecial