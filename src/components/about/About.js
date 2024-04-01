import React from "react";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const About = () => {
  return (
    <div className="container-fluid about " id="about">
      <div
        className="hero-section d-flex justify-content-center align-items-center flex-column text-center"
        style={{ height: "70vh" }}
      >
        <div className="p-4" style={{ maxWidth: "700px" }}>
          <h1 className="fw-bold">About me</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            maiores praesentium voluptate consectetur veniam libero temporibus
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
