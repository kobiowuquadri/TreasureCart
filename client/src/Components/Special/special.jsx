import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrow1 from '../NewArrival/NAimage/Arrow.png'
import arrow2 from '../NewArrival/NAimage/Arrow (1).png'
import plus from '../NewArrival/NAimage/+.png'
import Specialdata from './specialdata'


function NextArrow(props) {
  const { style, onClick } = props;
  return (
    <div
    className= "p-5 mr-20 px-5 py-2.5 pl-6 rounded-full hover:bg-zinc-600 hover:opacity-65 cursor-pointer" 
    style={{ ...style, position: "absolute", right: "0", top: "50%" }}
    onClick={onClick}><img src={arrow2} alt="" /></div>
  );
}

function PrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div 
    className= "z-10 px-5 py-2.5 pr-6 ml-20 rounded-full hover:bg-zinc-600 hover:opacity-75 cursor-pointer"
    style={{ ...style, position: "absolute", top: "50%", }}
    onClick={onClick}><img src={arrow1} alt="" /></div>
  );
}
function SpecialOffer() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  return (
    <div>
    
      <div className='bg-white -mb-20 min-h-screen bg-my-image bg-no-repeat' >
  

    <Slider {...settings}>
    {Specialdata.map((data, index) => (
      <div key={index}>
        <div className='flex justify-center'>
          <div className='p-40 pr-12 pl-5 pb-0 mb-0'>
            <div className="flex">
              <p className='text-5xl font-body font-bold text-secondary mb-4'>Special Offers</p> <div className='pt-16 pl-10'><img src={plus} alt="" /></div>
            </div>
            <p className='text-4xl font-body text-secondary mt-2 mb-0'>{data.Name}</p>
            <p className='text-2xl font-body text-secondary mt-2 mb-0'>{data.stock}</p>
            <div className='flex'>
              <p className='text-4xl font-body text-black mt-2 mb-0 mr-14 '>{data.price}</p> <button className='text-white bg-black border-0 rounded-full px-16 text-xs hover:opacity-90 cursor-pointer '>BUY NOW</button>
            </div>
        </div>
        <div>
              <img src={data.image} alt="air jordan shoe" className='pt-24 pl-20 pb-0 mb-0' />
            </div>
        </div>
      </div>
      ))}
      </Slider>


    </div>
   

    </div>
  )
}

export default SpecialOffer