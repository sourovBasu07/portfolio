import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";

import { urlFor, client } from "../../client";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <div className="flex flex-col flex-1 w-full">
      <h2 className="head-text">
        I know that <span>Good Design</span> <br /> means{" "}
        <span>Good Business</span>
      </h2>
      <div className="flex flex-row flex-wrap justify-center items-start mt-8">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            key={index}
            className="w-[190px] flex flex-col justify-start items-start m-8 2xl:w-[370px] 2xl:mx-16 2xl:my-8"
          >
            <img
              src={urlFor(about.imgUrl)}
              alt="about.title"
              className="w-full h-[170px] rounded-[15px] object-cover 2xl:h-[320px]"
            />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
