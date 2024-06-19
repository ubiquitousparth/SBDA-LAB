import "./Project.css";
import { useEffect } from "react";
import Project_data1 from "../../data/Project_data1";
import Project_data2 from "../../data/Project_data2";
import Dropdown_container from "./Dropdown_container";
import Navbar from "../Navbar";
import Footer from "../Footer";
const Projects = () => {
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
      ".pr-head-no, .project1-heading, .project2-para, .project3-para, .ch-animate"
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
    <div className="main-pr-container">
      <Navbar></Navbar>
      <div className="project-container">
        <p>OUR WORK</p>
        <p>SYSTEMS BIOLOGY AND DATA ANALYTICS LAB</p>
        <h2 className="quote quote-part1">OUR CURRENT</h2>
        <h2 className="quote quote-part2">PROJECTS.</h2>

        <div className="arrow-container">
          <div className="arrow"></div>
          <div className="arrow"></div>
        </div>
        <p className="scroll">SCROLL DOWN</p>
      </div>
      <div className="team-projects">
        <h3 className="heading-team-skill ch-animate">
          Owing to our team's diverse skill set, we are actively involved in
          several projects associated to numerous aspects of human health.
        </h3>
        <p className="para-current-projects ch-animate ">
          Our current projects assimilate a diversity of human health concerns,
          such as challenges related to reproductive health, including yet not
          limited to prediction of IVF outcomes, determinants of IVF success,
          implications of vaginal microbiome and endometrium on host's
          reproductive health, preimplantation embryonic development, and
          medical diagnosis from clinical data. Significant contributions have
          also been made towards Vitiligo research by incorporating a
          co-expression network-based approach in our research. With a
          data-driven modus operandi, we have formed close collaborations with
          hospitals and research facilities to provide hybrid intelligence using
          our academic understanding and computational skills. We believe in
          creativity, innovation and brilliance and we abide by academic zeal.
          For suggestions and comments, the group leader can be contacted
          directly.
        </p>
        <div className="project1">
          <h2 className="pr-head-no">01</h2>
          <h2 className="project1-heading">
            Bioinformatics in Reproductive Health and Medicine
          </h2>
          <div className="ch-animate" ><Dropdown_container data={Project_data1}></Dropdown_container></div>
          
        </div>
        <div className="project1">
          <h2 className="pr-head-no">02</h2>
          <h2 className="project1-heading">
            Genome Scale Metabolic Network Reconstruction
          </h2>
          <p className="project2-para">
            The reconstruction of a genome-scale metabolic network allows
            researchers to have a deeper insight at an organism's molecular
            processes. In these models, both genome and molecular physiology are
            interconnected. We perform network reconstructions to examine
            metabolic pathways in the context of the entire network by
            dissecting them into their fundamental processes, enzymes, and
            reactions.
          </p>
          <div className="ch-animate" ><Dropdown_container data={Project_data2}></Dropdown_container></div>
        </div>
        <div className="project1">
          <h2 className="pr-head-no">03</h2>
          <h2 className="project1-heading">Vitiligo Pathogenesis</h2>
          <p className="project3-para">
            Vitiligo is a chronic, asymptomatic disorder that causes a loss of
            patches of skin pigment and colour.
          </p>
          <p className="project3-para">
            Our Vitiligo Information Resource 1.0 (VIRdb 1.0) provides a
            complete platform dedicated to vitiligo, integrating both the
            drug-target and systems approach, along with consolidated protein
            and gene-level information, and potential therapeutic leads. VIRdb
            1.0 also showcases a genetic interaction network of the many
            expressed genes in Lesional, Peri-Lesional and Non-Lesional Vitiligo
            compared to healthy controls, in order to completely capture the
            genetic complexity of Vitiligo.
          </p>
          <p className="project3-para">
            VIRdb 2.0, a comprehensive set of differentially co-expressed genes
            involved in crosstalk events between Vitiligo and associated
            autoimmune disorders (Multiple Sclerosis, Psoriasis and Rheumatoid
            Arthritis) is presented and incorporated with Vitiligo-related
            multi-omics datasets (connected to SwissProt, KEGG, GeneCards, NPASS
            and STRING). We anticipate that researchers and clinicians working
            on vitiligo drug development will benefit from VIRdb 2.0.
          </p>
        </div>
        <div className="checkout">
          <h2 className="ch-animate" >That's not it.</h2>
          <p className="ch-animate" >Check out our Publications and Products</p>
          <div className="checkout-links ch-animate">
            <a className="work-link-project" href="./products">
              PRODUCTS
            </a>
            <a className="work-link-publication " href="./publications">
              PUBLICATIONS
            </a>
          </div>
        </div>
        <Footer></Footer>
      </div>
      
    </div>
  );
};

export default Projects;
