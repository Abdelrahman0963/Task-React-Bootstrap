import React from "react";
import ScrollReveal, {
  SlideFromLift,
  SlideFromRight,
} from "./animation/Animation";
import { CiCircleCheck } from "react-icons/ci";

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
          <div className="aboutPage-Content-Container py-5 d-flex align-items-center gap-5">
            <div className="aboutPage-Content-image  col-md-6  rounded-4 overflow-hidden">
              <img
                src="https://bootstrapmade.com/content/demo/Strategy/assets/img/about/about-portrait-1.webp"
                alt=""
              />
              <div className="aboutPage-Content-image-card">
                <h2>20+</h2>
                <p className="fs-5">Years of Expertise</p>
              </div>
            </div>
            <div className="aboutPage-Content col-md-6 ">
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
              <div className="aboutPage-Content-cards">
                <div className="aboutPage-Content-card">
                  <CiCircleCheck />
                  <p>
                    We focus on crafting bespoke strategies that navigate
                    complexity and deliver tangible results for our clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SlideFromLift>
      </section>
    </>
  );
}
