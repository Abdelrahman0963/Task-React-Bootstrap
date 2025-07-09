import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import { motion, useScroll } from "framer-motion";

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
          backgroundColor: "#e3a127",
        }}
      />
      <Navbar />
      <section className="hero">
        <Home />
      </section>
    </>
  );
}
