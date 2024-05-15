import React from 'react'
import logo from '../HeroSection/LOGO1.png'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { RiFacebookFill } from "react-icons/ri";

const sections = [
  {
    title: 'Products',
    items: [
      'FASHION',
      'EARPHONES',
      'LAPTOPS',
      'ACCESSORIES',
      'BOOKS',
      'KITCHEN',
    ]
  },
  {
    title: 'Support',
    items: ['PRODUCT HELP', 'REGISTER ','UPDATE BEATS',
     'WARRANTY', 'CONTACT', 'IMTERNATIONAL NUMBERS']
  },
  {
    title: 'Company',
    items: ['PRODUCT HELP', 'NEWS AND EVENTS', 'PROMOTION TERMS', 'PRIVACY POLICY', 'TRADEMARK', 'COOKIES']
  }
]
const items = [
  {
    name: 'Facebook',
    icon: RiFacebookFill,
    link: 'https://facebook.com/'
  },
  {
    name: 'Instagram',
    icon: FaInstagram,
    link: 'https://instagram.com/'
  },
  {
    name: 'Twitter',
    icon: FaTwitter,
    link: 'https://twitter.com/'
  }
]
function Footer () {
  return (
    <div className='w-full 	  mt-24 bg-black text-white -mb-36  py-y px-2'>
      <img src={logo} alt="" className='-mb-36 ml-24 max-[900px]:mb-0 max-[900px]:mt-10 max-[900px]:ml-10 ' />
      <div className='max-w-[1240px] mx-auto grid grid-cols-2 mr-24 md:grid-cols-6 border-b-2 border-white py-8'>
        {sections.map((section, index) => (
          <div key={index}>
            <h6 className='font-bold  font-body ml-56 text-xl max-[900px]:ml-10'>{section.title}</h6>
            <ul className='list-none w-48 font-body ml-48 max-[900px]:ml-0'>
              {section.items.map((item, i) => (
                <li
                  key={i}
                  className='py-1 text-white hover-text-white cursor-pointer'
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className=' flex ml-80 font-body font-bold flex-col sm:w-[300px] pt-4 text-4 max-[900px]:ml-2'>
          <p className='mt-9 ml-8 text-xl'>Follow Us </p>
          <div className='flex gap-5 px-4 py-1'>
            {items.map((x, index) => {
              return (
                <div key={index} className='hover:bg-[#fec700] p-2 rounded-full '>
                <x.icon
                  className='hover:text-white cursor-pointer'
                />
              </div>
              )
            })}
          </div>
        </div>
       
      </div>
      {/* icons and social media */}
      <div
        className='flex fles-col max-w-[1240px] px-2 py-4 mx-auto justify between
      sm:flex-row text-center text-black'
      >
        <p className='py-2'>2024 Treasure Cart</p>
      </div>
      <div className="footer-wrapper" style={{ position: 'relative', top: '-40px'}}>
        <div className="copyright font-body" style={{ marginLeft: '30rem' }}>
       <h1 className='font-thin text-sm'>Copyright 2024 Treasure Cart Inc. - All rights reserved.</h1>
    </div>
</div>

    </div>
  )
}

export default Footer
