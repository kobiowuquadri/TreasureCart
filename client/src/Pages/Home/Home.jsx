import React, { useState } from 'react'

import HeroSection from '../../Components/HeroSection/HeroSection'
import Footer from '../../Components/Footer/Footer'
import Products from '../../Components/Products/Products'
import BestSeller from '../../Components/BestSeller/Bestseller'
import NewArrival from '../../Components/NewArrival/NewArrival'
import HearUs from '../../hear/hear'
import SpecialOffer from '../../Components/Special/special'
import './home.css'

// function Home () {
//   return (
//     <>
//       <HeroSection />
//       <BestSeller />
//       <NewArrival />
//       <SpecialOffer />
//       <Products/>
//       <HearUs/>
//       <Footer/>
//     </>
//   )
// }

function Home () {
  const [selectedProducts, setSelectedProducts] = useState([])

  return (
    <>
      <HeroSection selectedProducts={selectedProducts} />
      <BestSeller />
      <NewArrival />
      <SpecialOffer />
      <Products  selectedProducts={selectedProducts}
        setSelectedProducts={setSelectedProducts} />
      <HearUs/>
      <Footer/>
    </>
  )
}

export default Home