import { useEffect, useState } from "react";
import "./Services.css";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Services = () => {
  const [isTrainingOpen, setIsTrainingOpen] = useState(false);
  const [isConsultingOpen, setIsConsultingOpen] = useState(false);

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
      ".sb-list, .sb-heading, .da-list, .da-heading"
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

  const toggleDropdown = (type) => {
    if (type === "training") {
      setIsTrainingOpen(!isTrainingOpen);
      setIsConsultingOpen(false);
    } else if (type === "consulting") {
      setIsConsultingOpen(!isConsultingOpen);
      setIsTrainingOpen(false);
    }
  };

  return (
    <div className="main-container services-page">
      <Navbar></Navbar>
      <div className="services-container">
        <p>WHAT WE DO</p>
        <p>SYSTEMS BIOLOGY AND DATA ANALYTICS LAB</p>
        <h2 className="quote quote-part1">If you torture the data long enough,</h2>
        <h2 className="quote quote-part2">it will confess.</h2>
        <h4 className="quote author">- Ronald Coase</h4>
        <div className="arrow-container">
          <div className="arrow"></div>
          <div className="arrow"></div>
        </div>
        <p className="scroll">SCROLL DOWN</p>
      </div>
      <div className="content-container">
        <h2 className="expertise exp1">Our Area of Expertise Include</h2>
        <div className="system-biology">
          <h1 className="sb-content sb-heading">
            SYSTEMS
            <br /> BIOLOGY
          </h1>
          <h4 className="sb-list sb-list1">Genome Scale Metabolic models Reconstruction</h4>
          <h4 className="sb-list sb-list2">Constraint Based Modelling</h4>
          <h4 className="sb-list sb-list3">Flux Balance Analysis</h4>
          <h4 className="sb-list sb-list4">System Metabolic Engineering</h4>
          <h4 className="sb-list sb-list5">
            Multi Omics Integration With Genome Scale Metabolic Models
          </h4>
          <h4 className="sb-list sb-list6">
            Multi Level Biological Network Modelling & Analysis
          </h4>
          <h4 className="sb-list sb-list7">
            Multi Level Biological network & Modelling
          </h4>
        </div>
        <div className="data-analytics">
          <h1 className="da-content da-heading">
            DATA
            <br /> ANALYTICS
          </h1>
          <h4 className="da-list da-list1">Clinical Data Analytics</h4>
          <h4 className="da-list da-list2">Clinical Association Studies</h4>
          <h4 className="da-list da-list3">
            Discovering Biomarkers & Generating Machine Learning Models Using Omics Data
          </h4>
          <h4 className="da-list da-list4">
            Using AI, Machine Learning & Deep Learning Algorithms & Approaches
          </h4>
          <h4 className="da-list da-list5">
            Multi Omics Data Integration & Correlation
          </h4>
          <h4 className="da-list da-list6">Polygenic Risk Score</h4>
        </div>
        <div className="our-services">
          <h1>OUR SERVICES</h1>
          <div className="dropdown">
            <button
              className="dropdown-btn"
              onClick={() => toggleDropdown("training")}
            >
              TRAINING
            </button>
            <div className={`dropdown-content ${isTrainingOpen ? "open" : ""}`}>
              <p>
                We provide trainings to UG, PG, bioinformaticians & experimental biologists,
                who are looking to upscale their skills in omics data analytics, systems biology,
                and machine learning.
              </p>
            </div>
          </div>
          <div className="dropdown">
            <button
              className="dropdown-btn"
              onClick={() => toggleDropdown("consulting")}
            >
              CONSULTING
            </button>
            <div className={`dropdown-content ${isConsultingOpen ? "open" : ""}`}>
              <p>
                With our years of expertise, we build and provide personalized bioinformatics
                and data analytics solutions that drive scientific research towards an
                exceptional outcome.
              </p>
            </div>
          </div>
          <a className="apply" href="/contact">APPLY HERE</a>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Services;
