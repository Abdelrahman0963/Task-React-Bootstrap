import React from "react";
import { motion } from "framer-motion";
import ScrollReveal, { Floating } from "../about/animation/Animation";
import { IoIosArrowRoundForward } from "react-icons/io";
export default function Home() {
  return (
    <>
      <section id="home" className="homePage d-flex justify-content-between">
        <ScrollReveal>
          <div className="homepage-content-container d-flex flex-column gap-3">
            <h3>OUR AGENCY</h3>
            <h1>
              CREATIVE <br /> DESIGN
            </h1>
            <div className="homepage-line"></div>
            <p>
              Discover innovative strategies for impactful visual communication.
              We transform ideas into compelling realities, ensuring your brand
              stands out in a crowded marketplace. Our dedicated team leverages
              cutting-edge techniques to deliver exceptional results that
              resonate with your audience.
            </p>
            <div className="homepage-btn d-flex align-items-center gap-1 justify-content-center">
              <h4>EXPLORE SERVICES</h4>
              <span className="homepage-btn-icon d-flex align-items-center">
                <IoIosArrowRoundForward />
              </span>
            </div>
          </div>
        </ScrollReveal>
        <Floating delay={0}>
          <div className="homepage-img-container col-lg-6 col-md-12">
            <div className="homepage-image">
              <motion.img
                src="https://bootstrapmade.com/content/demo/Strategy/assets/img/abstract/abstract-1.webp"
                alt="FloatingAnimation"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
            <div className="homepage-card d-flex flex-column rounded-3">
              <div className="card-num-icon d-flex justify-content-between">
                <h4>5K</h4>
                <a
                  href="#"
                  className="card-num-icon-svg text-decoration-underline-none text-white"
                >
                  <IoIosArrowRoundForward />
                </a>
              </div>
              <p className="text-center">Successful Campaigns</p>
            </div>
          </div>
        </Floating>
      </section>
    </>
  );
}
