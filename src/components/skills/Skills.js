import React from "react";

export default function Skills() {
  const skills = [
    "html",
    "css",
    "javascript",
    "react",
    "angular",
    "vue",
    "node.js",
    "express",
    "mongodb",
    "mysql",
    "php",
    "python",
    "ruby",
    "sass",
    "less",
    "webpack",
    "gulp",
    "git",
    "docker",
    "aws",
  ];
  return (
    <>
      <div className="skills pt-5" id="services">
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6 p-2">
              <h1 className="fw-bold">Get to Know me</h1>
              <p className="my-4" style={{ lineHeight: "1.8rem" }}>
                I'm a Frontend Focused Web Developer building and managing the
                Front-end of Websites and Web Applications that leads to the
                success of the overall product. Check out some of my work in the
                Projreects section. <br /> I also like sharing content related
                to the stuff that I have learned over the years in Web
                Development so it can help other people of the Dev Community.
                Feel free to Connect or Follow me on my Linkedin and Instagram
                where <br /> I post useful content related to Web Development
                and Programming I'm open to Job opportunities where I can
                contribute, learn and grow. If you have a good opportunity that
                matches my skills and experience then don't hesitate to contact
                me.
              </p>
              <div className="btn btn-primary">Contact</div>
            </div>
            <div className="col-md-6 p-2">
              <h1 className="fw-bold mb-4">My skills</h1>
              {skills.map((skill, index) => (
                <div className="btn btn-secondary disabled m-2">{skill}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
