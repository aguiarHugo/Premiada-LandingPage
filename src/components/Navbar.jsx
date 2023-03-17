import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles/styles";
import { navLinks } from "../constants";
import logo from '../assets/logo.png'
import menu from '../assets/menu.svg'
import close from '../assets/close.svg'

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
            <p className="font-great-vibes text-3xl">Cachaça Premiada</p>
          </div>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                ? 'text-golden' 
                : 'text-primary'
              }text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a className="hover:text-golden" href={`#${link.id}`}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img 
            src={toggle ? close : menu} 
            alt="menu"
            className="w-[24px] h-[24px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-black-200 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                  active === link.title
                  ? 'text-golden' 
                  : 'text-primary'
                  }text-[16px] font-poppins font-medium cursor-pointer`}
                  onClick={() =>{ 
                    setToggle(!toggle)
                    setActive(link.title)
                  }}
                >
                  <a className="hover:text-golden" href={`#${link.id}`}>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar