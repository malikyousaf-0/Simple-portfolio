import React from "react";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Projects = () => {
  const projects = [
    {
      name: "Project 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa maiores praesentium voluptate consectetur veniam libero temporibus",
      Image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGPRZvo44TegxoF4annRWkm_TymdhUFVVwmA&usqp=CAU",
      link: "demo",
    },
    {
      name: "Project 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa maiores praesentium voluptate consectetur veniam libero temporibus",
      Image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGPRZvo44TegxoF4annRWkm_TymdhUFVVwmA&usqp=CAU",
      link: "demo",
    },
    {
      name: "Project 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa maiores praesentium voluptate consectetur veniam libero temporibus",
      Image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGPRZvo44TegxoF4annRWkm_TymdhUFVVwmA&usqp=CAU",
      link: "demo",
    },
    {
      name: "Project 4",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa maiores praesentium voluptate consectetur veniam libero temporibus",
      Image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfP9-hu2VceVLh0MEBX5RuAT2n4mJUFF8H4Q&usqp=CAU",
      link: "demo",
    },
    {
      name: "Project 5",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa maiores praesentium voluptate consectetur veniam libero temporibus",
      Image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGPRZvo44TegxoF4annRWkm_TymdhUFVVwmA&usqp=CAU",
      link: "demo",
    },
  ];
  return (
    <div className="container-fluid pb-5" id="portfolio">
      <div
        className="hero-section mt-5 d-flex justify-content-center align-items-center flex-column text-center"
        // style={{ height: "70vh" }}
      >
        <div className="p-4 mt-5" style={{ maxWidth: "700px" }}>
          <h1 className="fw-bold mt-3">Projects</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            maiores praesentium voluptate consectetur veniam libero temporibus
          </p>
        </div>
      </div>
      {projects.map((project, index) => (
        <>
          <div className="portfolio">
            <div className="container">
              <div className="row m-4">
                <div className="col-md-6 text-center">
                  <img
                    style={{ minWidth: "30vw" }}
                    className="rounded"
                    src={project.Image}
                    alt=""
                  />
                </div>
                <div className="col-md-6 p-3">
                  <h2>{project.name}</h2>
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Projects;
