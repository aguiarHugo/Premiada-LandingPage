import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles/styles";
import { navLinks } from "../constants";
import logo from '../assets/logo.png'

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-black`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to='/'
          className="flex items-center gap-20"
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }}
        >
          <div className="flex items-center text-golden">
            <img src={logo} alt="logo" className="w-20 h-20 object-contain"/>
            <p>Cachaça Premiada</p>
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar