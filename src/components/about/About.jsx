import React from "react";

export default function About() {
  return (
    <>
      <section className="aboutPage">
        <h5 className="text-uppercase fw-medium">About</h5>
        <h2 className="text-uppercase text-white fw-bold">
          Learn More About Us
        </h2>
        <div className="aboutPage-Content-Container py-5">
          <div className="aboutPage-Content-image col-6 rounded-4 overflow-hidden">
            <img
              src="https://bootstrapmade.com/content/demo/Strategy/assets/img/about/about-portrait-1.webp"
              alt=""
            />
            <div className="aboutPage-Content-image-card">
              <h2>20+</h2>
              <p className="fs-5">Years of Expertise</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
