import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import { motion, useScroll } from "framer-motion";
import About from "./components/about/About";

export default function App() {
  document.body.style.backgroundColor = "#031119";
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          zIndex: 10,
          backgroundColor: "#e3a127",
        }}
      />
      <Navbar />
      <section className="hero">
        <Home />
        <About />
      </section>
    </>
  );
}
