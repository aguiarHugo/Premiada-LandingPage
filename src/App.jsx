import { BrowserRouter } from "react-router-dom"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import History from "./components/History"

function App() {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black-200">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
        </div>
        <History />
      </div>
    </BrowserRouter>
  )
}

export default App
