import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

const Testimonials = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);

  const test = testimonials[currentIndex];

  return (
    <div className="">
      {testimonials.length && (
        <div className="app__flex flex-col flex-1 w-full">
          <div className="app__flex w-full min-h-[320px] bg-white rounded-[15px] p-8 shadow-[0_0_30px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out 2xl:min-h[450px] max-lg:w-full max-md:flex-col">
            <img
              src={urlFor(test.imgurl)}
              alt={test.name}
              className="w-[100px] h-[100px] 2xl:w-[150px] 2xl:h-[150px] rounded-full object-cover"
            />
            <div className="flex flex-col justify-around items-start flex-1 px-8 py-0 text-left">
              <p className="text-[1.25rem] text-black ">{test.feedback}</p>
              <div className="">
                <h4 className="text-[1rem] font-semibold text-secondary mt-8">
                  {test.name}
                </h4>
                <h5 className="p-text font-medium text-gray">{test.company}</h5>
              </div>
            </div>
          </div>
          <div className="app__flex flex-row mt-4">
            <div
              className="app__flex w-[50px] h-[50px] rounded-full bg-white m-4 transition-all duration-300 ease-in-out group hover:bg-secondary"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft className="w-[20px] h-[20px] text-secondary group-hover:text-white cursor-pointer" />
            </div>
            <div
              className="app__flex w-[50px] h-[50px] rounded-full bg-white m-4 transition-all duration-300 group hover:bg-secondary"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight className="w-[20px] h-[20px] text-secondary group-hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>
      )}

      <div className="app__flex flex-wrap mt-8">
        {brands.map((brand, index) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={index}
            className="w-[150px] m-6 group"
          >
            <img
              src={urlFor(brand.imgUrl)}
              alt={brand.name}
              className="w-full h-auto object-cover grayscale-[1] group-hover:grayscale-0 2xl:w-[210px] 2xl:m-8 max-lg:w-full max-md:w-[120px] max-md:m-4"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Testimonials, "app__testimonials"),
  "testimonials",
  "app__primarybg"
);
