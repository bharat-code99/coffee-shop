import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Banner from "./components/Banner"
import Appstore from "./components/Appstore"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"
import LoginSignup from "./components/LoginSignup"

export default function App(){

  const [loginPopup, setLoginPopup] = useState(false);
  const handlePopup = () => {
    setLoginPopup(true);
  }

  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    })
  })

  return(
    <div className="overflow-x-hidden overflow-hidden">
      <Navbar handlePopup={handlePopup}/>
      <Hero />
      <Services />
      <Banner />
      <Appstore />
      <Testimonials />
      <Footer />
      {/* <LoginSignup showPopup={loginPopup} setShowPopup={setLoginPopup}/> */}
    </div>
  )
}