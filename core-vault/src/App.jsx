import React, { useState } from "react"
import Hero from "./components/sections/Hero"
import Features from "./components/sections/Features"
import How from "./components/sections/How"
import Testimonial from "./components/sections/Testimonial"
import Faq from "./components/sections/Faq"
import Footer from "./components/sections/Footer"
import Stats from "./components/sections/Stats"
import Navbar from "./components/sections/Navbar"
import Why from "./components/sections/Why"

function App() {

  const [isNavDark, setIsNavDark] = useState(false)
  return (
    <>
      <Navbar isDark={isNavDark} />
      <Hero setIsNavDark={setIsNavDark} />
      <Stats />
      <Features />
      <How />
      <Testimonial />
      <Faq />
      <Footer />
    </>
  )
}

export default App
