import React, { useState, useEffect } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };
  return (
    <div className="app__flex w-full flex-col flex-1">
      <h2 className="head-text">Take A Coffee & Chat With Me</h2>
      <div className="flex flex-row justify-evenly items-center flex-wrap-reverse mx-8 mt-16 mb-8 w-[60%] last:bg-[#f2f7fb]">
        <div className="flex flex-row justify-start items-center min-w-[290px] mx-0 my04 p-4 rounded-[10px] cursor-pointer bg-[#fef4f5] transition-all duration-300 ease-in-out max-lg:w-full">
          <img
            src={images.email}
            alt="email"
            className="w-[40px] h-[40px] mx-3 my-0 hover:shadow-[0_0_25px_#fef4f5] max-md:w-full"
          />
          <a href="mailto:hello@gravity.com" className="p-text font-semibold">
            hello@gmail.com
          </a>
        </div>
        <div className="flex flex-row justify-start items-center min-w-[290px] mx-0 my04 p-4 rounded-[10px] cursor-pointer bg-[#fef4f5] transition-all duration-300 ease-in-out max-lg:w-full">
          <img
            src={images.mobile}
            alt="email"
            className="w-[40px] h-[40px] mx-3 my-0 hover:shadow-[0_0_25px_#fef4f5] max-md:w-full"
          />
          <a href="tel:hello@gravity.com" className="p-text font-semibold">
            +1 (123) 456 789
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__flex w-[60%] flex-col mx-8 my-4 max-lg:w-full max-lg:mx-0 max-lg:my-4">
          <div className="app__flex w-full mx-0 my-3 rounded-[10px] cursor-pointer bg-primary transition-all duration-300 ease-in-out hover:shadow-[0_0_25px_primary">
            <input
              type="text"
              className="p-text w-full p-4 border-none rounded-[7px] bg-primary text-secondary outline-none"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex w-full mx-0 my-3 rounded-[10px] cursor-pointer bg-primary transition-all duration-300 ease-in-out hover:shadow-[0_0_25px_#edf2f8]">
            <input
              type="email"
              className="p-text w-full p-4 border-none rounded-[7px] bg-primary text-secondary outline-none"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div className="w-full mx-0 my-3 rounded-[10px] cursor-pointer bg-primary transition-all duration-300 ease-in-out hover:shadow-[0_0_25px_primary">
            <textarea
              className="p-text w-full p-4 border-none rounded-[7px] bg-primary text-secondary outline-none h-[170px] resize-none"
              placeholder="Your Message"
              name="message"
              value={message}
              onChange={handleChangeInput}
            />
          </div>
          <button
            className="text-[12px] 2xl:text-[21px] text-left px-8 py-4 rounded-[10px] bg-secondary font-semibold text-white outline-none mt-8 cursor-pointer"
            onClick={handleSubmit}
          >
            {loading ? "sending..." : "Send Message"}
          </button>
        </div>
      ) : (
        <div className="">
          <h3 className="head-text">Thank you for getting in touch !</h3>
        </div>
      )}
    </div>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
