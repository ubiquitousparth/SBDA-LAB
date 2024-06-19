import "./Research.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
const Research = () => {
  return (
    <div className="main-rs-container">
      <Navbar></Navbar>
      <div className="research-container">
        <p>WHAT WE DO</p>
        <p>SYSTEMS BIOLOGY AND DATA ANALYTICS LAB</p>
        <h2 className="quote quote-part1">
          Research is to see what everybody else has seen,
        </h2>
        <h2 className="quote quote-part2">
          and to think what nobody else has thought.
        </h2>
        <h4 className="quote author">- Albert Szent-Györgyi</h4>
        <div className="arrow-container">
          <div className="arrow"></div>
          <div className="arrow"></div>
        </div>
        <p className="scroll">SCROLL DOWN</p>
      </div>
      <div className="work-link">
        <h1>HAVE A LOOK AT OUR WORK.</h1>
        <a className="work-link-project" href="/SBDA-LAB/#/projects" >PROJECTS</a>
        <a className="work-link-publication" href="/SBDA-LAB/#/publications">PUBLICATIONS</a>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Research;
