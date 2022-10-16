import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div className="flex flex-row flex-1 w-full h-full max-xl:flex-col px-8 pt-24 pb-0 2xl:pt-32 max-sm:px-4 max-sm:pt-24 max-sm:pb-8">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="flex flex-col flex-[0.65] justify-start items-start h-full max-2xl: w-full max-2xl:mr-0"
      >
        <div className="w-full flex flex-col justify-end items-end">
          <div className="app__flex px-8 py-4 border-white rounder-[15px] flex flex-row w-auto shadow-[0_0_20px_rgba(0,0,0,0.1)] max-xl:justify-start max-xl:items-start">
            <span className="text-[2.5rem] 2xl:text-[5rem]">👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Sourav</h1>
            </div>
          </div>
          <div className="app__flex mt-12 px-8 py-4 border-white rounded-[15px] flex flex-col w-auto shadow-[0_0_20px_rgba(0,0,0,0.1)]">
            <p className="p-text w-full uppercase text-right">Web Developer</p>
            <p className="p-text w-full uppercase text-right">Freelancer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="h-full"
      >
        <img src={images.profile} alt="Profile_bg" className="" />
        {/* <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="Profile_circle"
          className=""
        /> */}
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="flex flex-col flex-[0.75] justify-evenly items-center h-full ml-4"
      >
        {[images.react, images.redux, images.sass].map((circle, index) => (
          <div
            className="app__flex justify-center w-[100px] h-[100px] rounded-full bg-white shadow-[0_0_20px_rgba(0,0,0,0.1)]"
            key={`circle-${index}`}
          >
            <img src={circle} alt="Circle" className="w-[60%] h-[60%]" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
