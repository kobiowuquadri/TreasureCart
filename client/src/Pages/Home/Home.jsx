import HeroSection from '../../Components/HeroSection/HeroSection'
import Footer from '../../Components/Footer/Footer'
import Products from '../../Components/Products/Products'
import BestSeller from '../../Components/BestSeller/Bestseller'
import SpecialOffer from '../../Components/Special/special'
import NewArrival from '../../Components/NewArrival/NewArrival'
import HearUs from '../../hear/hear'
import './home.css'

function Home () {
  return (
    <>
      <HeroSection />
      <BestSeller />
      <NewArrival />
      <SpecialOffer />
      <Products/>
      <HearUs/>
      <Footer/>
    </>
  )
}

export default Home
