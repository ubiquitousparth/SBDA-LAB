import React, { useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "./Products.css";

const products = () => {
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
          ".tl-animate"
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
    <div className="main-prd-container">
      <Navbar />
      <div className="products-container">
        <p>OUR PRODUCTS</p>
        <p>SYSTEMS BIOLOGY AND DATA ANALYTICS LAB</p>
        <h2 className="quote quote-part1">Tools & Databases</h2>
        <h2 className="quote quote-part2">already exported by us</h2>

        <div className="arrow-container">
          <div className="arrow"></div>
          <div className="arrow"></div>
        </div>
        <p className="scroll">SCROLL DOWN</p>
      </div>
      <div className="tools">
          <div className="tools-list tl-animate">
            <h2>
              <a href="https://vitiligoinfores.com/">VIRdb</a>
            </h2>
            <p>
              A comprehensive database for interactive analysis of
              genes/proteins involved in the pathogenesis of vitiligo.
            </p>
          </div>
          <div className="tools-list tl-animate">
            <h2>
              <a href="https://vitiligoinfores.com/">VIRdb 2.0</a>
            </h2>
            <p>
              Interactive analysis of comorbidity conditions associated with
              vitiligo pathogenesis using co-expression network-based approach.
            </p>
          </div>
          <div className="tools-list tl-animate">
            <h2>
              <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5357568/">
                Net2Align
              </a>
            </h2>
            <p>
              An Algorithm for Pairwise Global Alignment of Biological Networks.
            </p>
          </div>
          <div className="tools-list tl-animate">
            <h2>
              <a href="https://www.tandfonline.com/doi/abs/10.1080/07391102.2020.1860822">
                PluriMetNet
              </a>
            </h2>
            <p>
              A dynamic electronic model decrypting the metabolic variations in
              human embryonic stem cells (hESCs) at fluctuating oxygen
              concentrations.
            </p>
          </div>
          <div className="tools-list tl-animate">
            <h2>
              <a href="https://link.springer.com/article/10.1007/s12539-016-0168-5">
                TFIS
              </a>
            </h2>
            <p>
              Transcription Factor Information System. A Tool for Detection of
              Transcription Factor Binding Sites.
            </p>
          </div>
          <div className="tools-list tl-animate">
            <h2>
              <a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0127918">
                HEPNet
              </a>
            </h2>
            <p>
              A Knowledge Base Model of Human Energy Pool Network for Predicting
              the Energy Availability Status of an Individual.
            </p>
          </div>
        </div>
        <Footer />
    </div>
  );
};

export default products;
