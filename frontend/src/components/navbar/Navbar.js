import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = ({ active }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex justify-between items-center bg-white/[0.25] backdrop-blur-[4px] px-8 py-4 border border-solid border-white/[0.18] fixed z-[2]">
      <div className="flex justify-start items-center">
        <h2 className="bold-text w-[90px] h-[20px] 2xl:w-[180px] 2xl:h-[20px]">
          Portfolio
        </h2>
      </div>
      <ul className="flex flex-1 justify-center items-center max-lg:hidden">
        {["home", "about", "works", "skills", "contact"].map((item) => (
          <li
            key={item}
            className="app__flex p-text mx-4 cursor-pointer flex flex-col group transition-all duration-500 ease-in-out"
            style={item === active ? { border: "1px solid #000" } : {}}
          >
            <div className="w-[5px] h-[5px] bg-transparent rounded-full mb-[5px] group-hover:bg-secondary transition-all duration-500 ease-in-out" />
            <a
              className="text-gray hover:text-secondary flex flex-col uppercase font-medium transition-all duration-300 ease-in-out"
              href={`#${item}`}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      <div className="w-[36px] h-[36px] rounded-full relative flex justify-center items-center bg-secondary lg:hidden">
        <HiMenuAlt4
          className="text-white w-[70%] h-[70%]"
          onClick={() => setToggle(true)}
        />
        {toggle && (
          <motion.div
            className="fixed top-0 bottom-0 right-0 z-[5] flex flex-col justify-end items-end w-[80%] h-screen p-4 bg-white bg-bgImage bg-cover bg-repeat shadow-[0_0_20px_rgba(168, 168, 168, 0.15)] lg-hidden"
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeInOut" }}
          >
            <HiX
              className="w-[35px] h-[35px] text-secondary mx-4 my-2"
              onClick={() => setToggle(false)}
            />
            <ul className="w-full h-full flex flex-col justify-start items-center list-none m-0 p-0">
              {["home", "about", "works", "skills", "contact"].map((item) => (
                <li className="m-4" key={item}>
                  <a
                    className="text-gray text-[1rem] hover:text-secondary flex flex-col uppercase font-medium transition-all duration-300 ease-in-out"
                    href={`#${item}`}
                    onClick={() => setToggle(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
