import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <div className="app__flex flex-col flex-1 w-full">
      <h2 className="head-text">Skills & Experience</h2>
      <div className="mt-12 flex flex-row max-lg:w-full max-lg:flex-col">
        <motion.div className="app__flex flex-wrap flex-1 justify-start items-start mr-20 max-lg:mr-0 max-lg:justify-center max-lg:items-center">
          {skills.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__flex flex-col text-center m-4 transition-all duration-300 ease-in-out 2xl:mx-8 2xl:my-4"
              key={index}
            >
              <div
                className="app__flex w-[90px] h-[90px] rounded-full bg-white hover:shadow-[0_0_25px_#fef4f5] 2xl:w-[150px] 2xl:h-[150px] max-md:w-[70px] max-md:h-[70px]"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img
                  src={urlFor(skill.icon)}
                  alt={skill.name}
                  className="w-[50%] h-[50%]"
                />
              </div>
              <p className="p-text font-semibold mt-2 2xl:mt-4">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="flex flex-col flex-1 justify-start items-start max-lg:mt-8">
          {experiences.map((experience) => (
            <motion.div
              className="w-full flex flex-row justify-start items-start mx-0 my-4"
              key={experience.year}
            >
              <div className="mr-12 max-md:mr-4">
                <p className="bold-text font-bold text-secondary">
                  {experience.year}
                </p>
              </div>
              <motion.div className="flex-1">
                {experience.works.map((work, index) => (
                  <div key={index}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="flex flex-col justify-start items-start mb-4 cursor-pointer"
                      data-tip
                      data-for={work.name}
                    >
                      <h4 className="bold-text font-semibold">{work.name}</h4>
                      <p className="p-text font-medium text-gray mt-[5px]">
                        {work.company}
                      </p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="white"
                      className=""
                    >
                      {work.desc}
                    </ReactTooltip>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
