import React from "react";
import ScrollReveal, {
  SlideFromLift,
  SlideFromRight,
} from "./animation/Animation";
import { IoCheckmarkOutline } from "react-icons/io5";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { FaLightbulb } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

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
          <div className="aboutPage-Content-Container  d-flex align-items-center gap-5">
            <div className="aboutPage-Content-image  col-md-6 rounded-4 overflow-hidden">
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
          <div className="about-move-slid-container py-5 d-flex flex-column flex-lg-row  overflow-xl-hidden">
            <div className="about-move-slid-container-content col-md-6">
              <h2>Our Clients Speak Highly</h2>
              <p>
                Hear directly from those who have experienced the impact of our
                partnership and achieved their strategic goals.
              </p>
              <div className="about-move-slid-container-content-arrow-icons d-flex gap-4">
                <span>
                  <GoArrowLeft />
                </span>
                <span>
                  <GoArrowRight />
                </span>
              </div>
            </div>
            <div className="about-move-slid-container-feedback-cards col-12 col-lg-6 ">
              <div className="about-move-slid-container-feedback-card d-flex flex-column rounded-4 gap-4">
                <nav className="about-move-slid-container-feedback-rate">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </nav>
                <nav className="about-move-slid-container-feedback-content">
                  <p>
                    "Their dedication to delivering superior solutions and their
                    meticulous attention to detail have profoundly impacted our
                    corporate growth trajectory."
                  </p>
                </nav>
                <nav className="about-move-slid-container-feedback-porfile d-flex gap-2">
                  <nav className="user-porfile-image">
                    <img
                      src="https://bootstrapmade.com/content/demo/Strategy/assets/img/person/person-m-1.webp"
                      alt="userPorfile"
                    />
                  </nav>
                  <nav className="user-porfile-info">
                    <h6>John Doe</h6>
                    <p>CEO, ABC Company</p>
                  </nav>
                </nav>
              </div>
              <div className="about-move-slid-container-feedback-card d-flex flex-column rounded-4 gap-4">
                <nav className="about-move-slid-container-feedback-rate">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </nav>
                <nav className="about-move-slid-container-feedback-content">
                  <p>
                    "Their dedication to delivering superior solutions and their
                    meticulous attention to detail have profoundly impacted our
                    corporate growth trajectory."
                  </p>
                </nav>
                <nav className="about-move-slid-container-feedback-porfile d-flex gap-2">
                  <nav className="user-porfile-image">
                    <img
                      src="https://bootstrapmade.com/content/demo/Strategy/assets/img/person/person-m-1.webp"
                      alt="userPorfile"
                    />
                  </nav>
                  <nav className="user-porfile-info">
                    <h6>John Doe</h6>
                    <p>CEO, ABC Company</p>
                  </nav>
                </nav>
              </div>
              <div className="about-move-slid-container-feedback-card d-flex flex-column rounded-4 gap-4">
                <nav className="about-move-slid-container-feedback-rate">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </nav>
                <nav className="about-move-slid-container-feedback-content">
                  <p>
                    "Their dedication to delivering superior solutions and their
                    meticulous attention to detail have profoundly impacted our
                    corporate growth trajectory."
                  </p>
                </nav>
                <nav className="about-move-slid-container-feedback-porfile d-flex gap-2">
                  <nav className="user-porfile-image">
                    <img
                      src="https://bootstrapmade.com/content/demo/Strategy/assets/img/person/person-m-1.webp"
                      alt="userPorfile"
                    />
                  </nav>
                  <nav className="user-porfile-info">
                    <h6>John Doe</h6>
                    <p>CEO, ABC Company</p>
                  </nav>
                </nav>
              </div>
            </div>
          </div>
        </SlideFromLift>
      </section>
    </>
  );
}
