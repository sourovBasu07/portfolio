import React from "react";
import "./index.css";
import {
  Header,
  Footer,
  About,
  Skills,
  Works,
  Testimonials,
} from "../src/container";

import { Navbar } from "../src/components";
import "./App.scss";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Works />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
}
