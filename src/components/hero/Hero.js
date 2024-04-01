import React from "react";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Hero = () => {
  return (
    <div className="container-fluid hero ">
      <div
        className="hero-section d-flex justify-content-center align-items-center flex-column text-center"
        style={{ height: "80vh" }}
      >
        <div className="p-4" style={{ maxWidth: "700px" }}>
          <h1 className="fw-bold">Welcome to My Website</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
            itaque molestias labore totam at accusamus laborum consequatur cum
            tenetur quidem aperiam nemo officia accusantium, reprehenderit magni
            praesentium quibusdam! Incidunt, ex.
          </p>
          <button className="btn btn-primary btn-lg">Learn More</button>
        </div>
        <div
          className="floating-buttons d-flex flex-column bg-light gap-2 p-2 rounded"
          style={{ position: "absolute", left: "1px", bottom: "10rem" }}
        >
          <a style={{ color: "black" }} href="#" className="floating-button">
            <FaFacebookSquare size={30} />
          </a>
          <a style={{ color: "black" }} href="#" className="floating-button">
            <RiInstagramFill size={30} />
          </a>
          <a style={{ color: "black" }} href="#" className="floating-button">
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
