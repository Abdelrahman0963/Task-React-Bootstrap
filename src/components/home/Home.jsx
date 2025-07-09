import React from "react";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <>
      <section id="home" className="homePage d-flex justify-content-lg-between">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="homepage-content-container d-flex flex-column gap-3"
        >
          <h3>OUR AGENCY</h3>
          <h1>
            CREATIVE <br /> DESIGN
          </h1>
          <div className="homepage-line"></div>
          <p>
            Discover innovative strategies for impactful visual communication.
            We transform ideas into compelling realities, ensuring your brand
            stands out in a crowded marketplace. Our dedicated team leverages
            cutting-edge techniques to deliver exceptional results that resonate
            with your audience.
          </p>
          <div className="homepage-btn d-flex align-items-center gap-1 justify-content-center">
            <h4>EXPLORE SERVICES</h4>
            <span className="homepage-btn-icon d-flex align-items-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="30px"
                width="30px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path>
              </svg>
            </span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="homepage-img-container col-lg-6 col-md-12"
        >
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
              viewport={{ once: false }}
            />
          </div>
          <div className="homepage-card d-flex flex-column rounded-3">
            <div className="card-num-icon d-flex justify-content-between">
              <h4>5K</h4>
              <a
                href="#"
                className="card-num-icon-svg text-decoration-underline-none text-white"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="30px"
                  width="30px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path>
                </svg>
              </a>
            </div>
            <p className="text-center">Successful Campaigns</p>
          </div>
        </motion.div>
      </section>
    </>
  );
}
