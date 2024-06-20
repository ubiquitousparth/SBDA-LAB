import Droparticle from "./Droparticle";
import "./Publications.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useEffect } from "react";

const Publications = () => {
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

    const elementsToAnimate = document.querySelectorAll(".ppr-animate");
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
    <div className="main-publication-container">
      <Navbar />
      <div className="publication-container">
        <p>PUBLICATIONS</p>
        <p>SYSTEMS BIOLOGY AND DATA ANALYTICS LAB</p>
        <h2 className="quote quote-part1">Somewhere Something Incredible</h2>
        <h2 className="quote quote-part2">Is waiting to be Known.</h2>
        <h4 className="quote author">- Carl Sagan</h4>

        <div className="arrow-container">
          <div className="arrow"></div>
          <div className="arrow"></div>
        </div>
        <p className="scroll">SCROLL DOWN</p>
      </div>
      <div className="papers">
        <div className="papers1">
          <h2 className="ppr-head-no ppr-animate">01</h2>
          <h2 className="papers1-heading ppr-animate">Papers</h2>
          <p className="ppr-animate">Our published articles in a chronological order.</p>
          <div className="drp-articles ppr-animate">
            <Droparticle />
          </div>
        </div>

        <div className="book-ch">
          <div className="papers1">
            <h2 className="ppr-head-no ppr-animate">02</h2>
            <h2 className="papers1-heading ppr-animate">Book Chapters</h2>
          </div>
          <li className="ppr-animate">
            Chaurasia, A., Vats, S., Sengupta, A., Bansal, A., & Narad, P. (2021). Practical Applications of Artificial Intelligence for Disease Prognosis and Management. In Artificial Intelligence and Machine Learning in Healthcare (pp. 1–36). Springer Singapore.
          </li>
          <li className="ppr-animate">
            Sengupta, A., Naresh, G., Mishra, A., Parashar, D., & Narad, P. (2021). Proteome analysis using machine learning approaches and its applications to diseases. Proteomics and Systems Biology Advances in Protein Chemistry and Structural Biology, 161-216.
          </li>
          <li className="ppr-animate">
            Contributed a Chapter on Metabolomics in the Book on “Omics approaches, technologies and applications”, by Dr. A. Preeti and Dr. G. Misra published by Springer, ISBN -978-981-13-2924-1 (2018).
          </li>
          <li className="ppr-animate">
            Contributed a Chapter on Introduction to Omics in the Book on “Omics approaches, technologies and applications”, by Dr. A. Preeti and Dr. G. Misra published by Springer, ISBN -978-981-13-2924-1 (2018).
          </li>
          <li className="ppr-animate">Biology of Useful Plants and Microbes (2013), ISBN- 13: 978-8184872644.</li>
        </div>
        <div className="checkout-pg-publication">
          <h2 className="ppr-animate">That's not it.</h2>
          <p className="ppr-animate">Check out our Publications and Products</p>
        </div>
        <div className="checkout-links ppr-animate">
          <a className="work-link-project" href="./#/projects">
            PROJECTS
          </a>
          <a className="work-link-publication" href="./#/products">
            PRODUCTS
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Publications;
