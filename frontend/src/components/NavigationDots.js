import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "about", "works", "skills", "testimonials", "contact"].map(
        (item, index) => (
          <a
            className="app__navigation-dot"
            href={`#${item}`}
            key={index}
            style={active === item ? { backgroundColor: "#313BAC" } : {}}
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;
