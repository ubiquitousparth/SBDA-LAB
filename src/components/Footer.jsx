import React from "react";
import "./Footer.css";
import logo1 from "../assets/ln logo.png";
import logo2 from "../assets/x-logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo1">
        <a href="https://www.linkedin.com/in/sbda-research-lab-776504220/"><img className="linkedin-icon icon" src={logo1} alt="LinkedIn Logo" /></a>
        <a href="https://x.com/SBDAResearchLab"><img className="x-icon icon" src={logo2} alt="LinkedIn Logo" /></a>
        
      </div>

      <p>
        We, at SBDA Research Lab, are dedicated towards understanding the
        intricacies of molecular processes, reactions, components, and systems
        using Genome Scale Metabolic Reconstructions, Machine Learning,
        Multi-Omics Data Analytics, and novel architectures and training methods
        for Deep Learning through Neural Networks, allowing us to understand
        disease development and progression in a unique and unprecedented way.
        Contact us for training opportunities and other services.
      </p>
      <p className="center">© 2024 SBDA Research Lab. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
