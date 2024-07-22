import React, { useEffect } from "react";
import Navbar from "../Navbar";
import "./About.css";
import Cardslider from "../Cardslider";
import Data from "./Data";
import Footer from "../Footer";

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const elementsToAnimate = document.querySelectorAll(
      ".mi-heading-no, .vi-heading-no, .mi-heading, .mi-para, .vi-heading, .vi-para"
    );
    elementsToAnimate.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elementsToAnimate.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="main-ab-container">
      <Navbar />
      <div className="about-container">
        <p>WHO WE ARE</p>
        <p>SYSTEMS BIOLOGY AND DATA ANALYTICS LAB</p>
        <h2 className="quote quote-part1">There are living systems,</h2>
        <h2 className="quote quote-part2">there is no 'living matter'.</h2>
        <h4 className="quote author">- Jacques Manod</h4>
        <div className="arrow-container">
          <div className="arrow"></div>
          <div className="arrow"></div>
        </div>
        <p className="scroll">SCROLL DOWN</p>
      </div>
      <div className="ab-content-container">
        <div className="mission">
          <h1 className="mi-heading-no">01</h1>
          <h1 className="mi-heading">OUR MISSION</h1>
          <p className="mi-para">
            At SBDA Research Lab, our commitment lies in advancing a mission to
            transform the landscape of human disease and diagnostics. We employ
            cutting-edge bioinformatics tools and techniques to delve into the
            intricate workings of complex biological systems. Our focus extends
            to reproductive health and associated diseases, employing
            multi-omics approaches and beyond. By integrating various data
            sources, including genomics and metabolomics, we construct and
            analyze metabolic and gene regulatory disease networks and models.
            Our dedicated team explores the nuances of molecular processes,
            reactions, components, and systems through Genome Scale Metabolic
            Reconstructions, machine learning, and novel architectures for deep
            learning via neural networks. This comprehensive approach allows us
            to gain unprecedented insights into disease development and
            progression, creating a unique and groundbreaking understanding of
            the field.
          </p>
        </div>
        <div className="vision">
          <h1 className="vi-heading-no">02</h1>
          <h1 className="vi-heading">OUR VISION</h1>
          <p className="vi-para">
            Recognizing the diverse manifestations of diseases worldwide, our
            lab is committed to advancing personalized and predictive methods
            for crafting individualized treatments tailored to each person's
            unique needs. As visionaries in the field, our overarching goal is
            to propel personalized medicine forward by strengthening current
            methodologies in bioinformatics, healthcare, and medicine, while
            also developing intricate pipelines to address emerging challenges.
            Our focus extends beyond a singular realm, encompassing a variety of
            human diseases. Notably, we emphasize reproductive health and
            associated diseases, with a specific focus on the human microbiome,
            endometrial receptivity, sexually transmitted infections (STIs), and
            the success of in vitro fertilization (IVF). By channeling our
            efforts into these critical areas, our lab envisions pioneering
            advancements that redefine the landscape of personalized medicine,
            offering precise and innovative solutions to a spectrum of health
            challenges.
          </p>
        </div>
        <div className="collaborations">
          <h1 className="co-heading-no">03</h1>
          <h1 className="co-heading">OUR COLLABORATIONS</h1>
          <p className="co-para">
            We have collaborations with hospitals and government research
            organizations for clinical and molecular data, providing us with
            guidance and feedback on the analysis performed on the data.
          </p>
          <h2 className="co-heading">Our present collaborations</h2>
          <div className="colab-slider">
            <Cardslider slideWidth="200px" slideHeight="200px" Data={Data} slides={3} speed ={2000} />
          </div>
        </div>
        <div className="teams-page-link">
          <h1 className="tpl-heading-no">04</h1>
          <h1 className="tpl-heading">Meet Our Team</h1>
          <p className="tpl-para"><a className="tpl-url" href="/#/teams">CLICK HERE</a> To Discover The Brilliant Minds Behind The Scene.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
