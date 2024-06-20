import React from "react";
import "./Contact.css";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Contact = () => {
  return (
    <div className="main-contact-container">
      <Navbar />
      <div className="contact-container">
        <p>CONTACT</p>
        <p>SYSTEMS BIOLOGY AND DATA ANALYTICS LAB</p>
        <h2 className="quote quote-part1">Reach out to us for queries.</h2>
        <h2 className="quote quote-part2">Write us a message.</h2>

        <div className="arrow-container">
          <div className="arrow"></div>
          <div className="arrow"></div>
        </div>
        <p className="scroll">SCROLL DOWN</p>
        <div className="contact-info">
          <div className="contact-row">
            <div className="contact-loc">
              <h2 className="first-head">01</h2>
              <p>LOCATION</p>
              <h2 className="second-head">Welcome to visit</h2>
              <p>
                SBDA Research Lab Room # J3-419B, J3-Block, Centre of
                Computational Biology and Bioinformatics, Amity Institute of
                Biotechnology, Amity University, Amity Rd, Sector 125, Noida,
                Uttar Pradesh, India 201301
              </p>
            </div>
            <div className="contact-loc">
              <h2 className="first-head">02</h2>
              <p>CONTACT</p>
              <h2 className="second-head">Shall we talk?</h2>
              <p>
                Email: sbdaresearch@gmail.com <br />Phone: +91-8800662904 (Dr.
                Abhishek Sengupta)
              </p>
            </div>
          </div>
          <div className="contact-row">
            <div className="contact-loc">
              <h2 className="first-head">03</h2>
              <p>FOR CONSULTATIONS</p>
              <h2 className="second-head">Drop a Mail on</h2>
              <p>
                Email: sbdaresearch@gmail.com<br /> Phone: +91-8800662904 (Dr.
                Abhishek Sengupta)
              </p>
            </div>
            <div className="contact-loc">
              <h2 className="first-head">04</h2>
              <p>FOR TRAINING OPPORTUNITIES</p>
              <h2 className="second-head">Drop a mail with your CV on</h2>
              <p>Email: sbdaresearch@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
