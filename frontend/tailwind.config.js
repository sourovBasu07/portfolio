module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#edf2f8",
        secondary: "#313bac",
        black: "#030303",
        lightGray: "#e4e4e4",
        gray: "#6b7688",
        brown: "#46364a",
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "900px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "2000px",
        // => @media (min-width: 1536px) { ... }

        "max-2xl": { max: "2000px" },
        // => @media (max-width: 1535px) { ... }

        "max-xl": { max: "1200px" },
        // => @media (max-width: 1279px) { ... }

        "max-lg": { max: "900px" },
        // => @media (max-width: 1023px) { ... }

        "max-md": { max: "450px" },
        // => @media (max-width: 767px) { ... }

        "max-sm": { max: "300px" },
        // => @media (max-width: 639px) { ... }
      },
      backgroundImage: {
        bgImage: "url('../src/assets/bgWhite.png')",
      },
    },
  },
  plugins: [],
};
