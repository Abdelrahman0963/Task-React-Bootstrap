import React from "react";
import ScrollReveal, {
  SlideFromLift,
  SlideFromRight,
} from "./animation/Animation";
import { IoCheckmarkOutline } from "react-icons/io5";
import { FaLightbulb } from "react-icons/fa";

export default function About() {
  return (
    <>
      <section className="aboutPage">
        <ScrollReveal>
          <h5 className="text-uppercase fw-medium">About</h5>
          <h2 className="text-uppercase text-white fw-bold">
            Learn More About Us
          </h2>
        </ScrollReveal>
        <SlideFromLift delay={0.2}>
          <div className="aboutPage-Content-Container py-5 d-flex align-items-center gap-5 flex-md-column flex-sm-column">
            <div className="aboutPage-Content-image  col-6 col-md-12 col-sm-12 rounded-4 overflow-hidden">
              <img
                src="https://bootstrapmade.com/content/demo/Strategy/assets/img/about/about-portrait-1.webp"
                alt=""
              />
              <div className="aboutPage-Content-image-card">
                <h2>20+</h2>
                <p className="fs-5">Years of Expertise</p>
              </div>
            </div>
            <div className="aboutPage-Content col-6  col-md-12 col-sm-12">
              <SlideFromRight delay={0.4}>
                <div className="aboutPage-Content-text">
                  <h2>Elevating Business Performance Through Innovation</h2>
                  <p>
                    We focus on crafting bespoke strategies that navigate
                    complexity and deliver tangible results for our clients.
                  </p>
                  <p className="text-white">
                    Through a blend of sophisticated analytics and creative
                    problem-solving, we empower organizations to thrive in
                    rapidly evolving markets.
                  </p>
                </div>
              </SlideFromRight>
              <div className="aboutPage-Content-cards d-flex gap-3 py-5">
                <ScrollReveal delay={0.6}>
                  <div className="aboutPage-Content-card rounded-3">
                    <nav className="aboutPage-Content-card-icon">
                      <IoCheckmarkOutline />
                    </nav>
                    <h6>Dedicated Team Support</h6>
                    <p>
                      Our highly skilled professionals are committed to
                      providing personalized service and impactful solutions on
                      every engagement.
                    </p>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={0.8}>
                  <div className="aboutPage-Content-card rounded-3">
                    <nav className="aboutPage-Content-card-icon-tow">
                      <FaLightbulb />
                    </nav>
                    <h6>Forward-Thinking Approach</h6>
                    <p>
                      We embrace innovative methodologies to develop unique
                      strategies that drive lasting success.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
              <SlideFromRight delay={0.6}>
                <div className="aboutPage-Content-btn">
                  <a className="text-decoration-none" href="home">
                    <button className="btn btn-about">
                      Explore Our Services
                    </button>
                  </a>
                </div>
              </SlideFromRight>
            </div>
          </div>
        </SlideFromLift>
      </section>
    </>
  );
}
