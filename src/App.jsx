import { BrowserRouter } from "react-router-dom"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import History from "./components/History"
import Production from "./components/Production"
import About from "./components/About"
import Contact from "./components/Contact"


function App() {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black-200">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
        </div>

        <div id="history" className="h-6 md:h-0.5"/>
        <History />

        <div id="production" className="h-6 md:h-0.5"/>
        <Production />

        <div id="about" className="h-6 md:h-0.5"/>
        <About />
        
        <div id="contact" className="h-6 md:h-0.5"/>
        <Contact />
      </div>
    </BrowserRouter>
  )
}

export default App
