import React, { useState, useRef, useEffect } from "react"
import Hero from "./components/sections/Hero"
import Features from "./components/sections/Features"
import How from "./components/sections/How"
import Testimonial from "./components/sections/Testimonial"
import Faq from "./components/sections/Faq"
import Footer from "./components/sections/Footer"
import Stats from "./components/sections/Stats"
import Navbar from "./components/sections/Navbar"
import Why from "./components/sections/Why"
import Contact from './components/sections/Contact'
import Price from "./components/sections/Price"
// import Test from "./components/sections/Test"
function App() {

  const [isNavDark, setIsNavDark] = useState(false)
  const heroRef = useRef(null);
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <>
      <Navbar isDark={isNavDark} heroRef={heroRef} />
      <Hero setIsNavDark={setIsNavDark} heroRef={heroRef} />
      <Stats />
      <Features />
      <Price />
      {/* <How /> */}
      {/* <Test /> */}
      <Testimonial />
      <Faq />
      <Footer />
    </>
  )
}

export default App
