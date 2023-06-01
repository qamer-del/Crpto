import { useState } from "react";
import {logo,close,menue,v12,} from "../assets";
import { navLinks } from "../constant";
import { motion } from "framer-motion";
const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: "100%" },
}
const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="w-full p-5  z-[1] bg-secondary relative text-white">
      
      <div className=" container mx-auto h-full flex justify-between items-center relative text-sm font-medium">
        <img src={logo} className="  h-[20.02px] mr-20 " />
        <div className="flex items-center">
          <ul className="list-none  justify-end items-center md:flex hidden  gap-5   ">
            {navLinks.map((nav, index) => (
              <li
                className={` cursor-pointer  ${
                  active === nav.title ? "text-btn  border-b-4 border-btn" : ""
                }`}
                key={nav.id}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden  md:flex">
          <button className="flex bg-transparent items-center justify-between px-6 gap-2 ">
            Login
          </button>
          <button className=" py-3 px-5 rounded-md bg-btn ">Start free</button>
        </div>
        <img
          src={isOpen ? close : menue}
          alt="menue"
          className="md:hidden flex w-[28px] h-[28px] object-contain "
          onClick={() => setIsOpen(!isOpen)}
        />
        < motion.div
        animate={isOpen ? "open" : "closed"}
        variants={variants}
          className={`${
            !isOpen ? "hidden" : "flex"
          } p-6   absolute z-[1] top-10 right-0 w-full rounded-xl md:hidden bg-btn  `}
        >
          <ul className="list-none flex justify-center items-center flex-1 flex-col hover:rounded-md ">
            {navLinks.map((nav) => (
              <li
                className="p-2 hover:bg-font w-[50%] m-auto    "
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <button className="w-[50%]  p-2 m-auto rounded-md bg-gray-700 mt-3 ">
              Login
            </button>
            <button className=" w-[50%] bg-btn p-2 m-auto rounded-md mt-2 hover:bg-font duration-1000 ">
              Start Free
            </button>
          </ul>
        </ motion.div>

        <img
          src={v12}
          alt=""
          className=" w-[140px] z-[2] absolute top-[-20px] left-[-1px]"
        />
      </div>
    </nav>
  );
};
export default Navbar;
