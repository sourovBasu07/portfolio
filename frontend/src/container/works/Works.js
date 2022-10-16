import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

const Works = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';
    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <div className="app__flex flex-col flex-1 w-full">
      <h2 className="head-text">
        My Creative <span>Portfolio</span>
      </h2>
      <div className="flex flex-row justify-start items-center flex-wrap mt-16 mb-8 mx-0">
        {["UI/UX", "Web App", "Mobile App", "React JS", "All"].map(
          (item, index) => (
            <div
              className={`app__flex text-[12px] 2xl:text-[30px] m-2 px-4 py-2 rounded-[10px] hover:bg-secondary hover:text-white font-bold cursor-pointer transition-all duration-300 ease-in-out 2xl:px-8 2xl:py-4 2xl:rounded-[14px] ${
                activeFilter === item
                  ? "bg-secondary text-white"
                  : "bg-white text-gray"
              }`}
              key={index}
              onClick={() => handleWorkFilter(item)}
            >
              {item}
            </div>
          )
        )}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="flex flex-row flex-wrap justify-center items-center"
      >
        {filterWork.map((work, index) => (
          <div
            className="app__flex w-[270px] flex-col m-8 p-4 rounded-[10px] bg-white text-slate-900 cursor-pointer transition-all duration-300 ease-in-out hover:shadow-[0_0_25px_rgba(0,0,0,0.2)] 2xl:w-[470px] 2xl:p-5 2xl:rounded-[12px] max-sm:w-full max-sm:m-4"
            key={index}
          >
            <div className="app__flex w-full h-[230px] relative">
              <img
                src={urlFor(work.imgUrl)}
                alt={work.name}
                className="w-full h-full rounded-[10px] object-cover 2xl:h-[350px]"
              />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__flex absolute inset-0 w-full h-full bg-[rgba(0,0,0,0.5)] rounded-[10px] opacity-0 transition-all duration-300 ease-in-out"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="app__flex w-[50px] h-[50px] rounded-full bg-[rgba(0,0,0,0.5)] text-white m-4 font-bold cursor-pointer transition-all duration-300 ease-in-out"
                  >
                    <AiFillEye className="w-[50%] h-[50%] text-white" />
                  </motion.div>
                </a>
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="app__flex w-[50px] h-[50px] rounded-full bg-[rgba(0,0,0,0.5)] text-white m-4 font-bold cursor-pointer transition-all duration-300 ease-in-out"
                  >
                    <AiFillGithub className="w-[50%] h-[50%] text-white" />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__flex w-full relative flex flex-col p-2">
              <h4 className="bold-text mt-4 2xl:mt-12">{work.title}</h4>
              <p className="p-text" style={{ marginTio: 10 }}>
                {work.description}
              </p>
              <div className="app__flex absolute px-4 py-2 rounded-[10px] bg-white -top-[25px]">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Works, "app__works"),
  "works",
  "app__primarybg"
);
