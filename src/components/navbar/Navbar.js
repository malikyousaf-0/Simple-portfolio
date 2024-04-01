import React, { useState } from "react";

import { RiMenu2Fill } from "react-icons/ri";

const Navbar = () => {
  const [bg, setBg] = useState("none");
  const [scroll, setScroll] = useState("");
  const [margin, setMargin] = useState("pt-3");
  const [menu, setMenue] = useState(false);
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 50) {
      setScroll("scroll");
      setMargin("mt-0");
      setBg("light shadow");
    } else {
      setBg("none");
      setScroll("unscroll");
      setMargin("pt-3");
    }
  };
  window.addEventListener("scroll", handleScroll);
  return (
    <div className="sticky-top bg-light">
      <nav className={`navbar navbar-expand-lg bg-${bg}`}>
        <div
          className="container-fluid bg-light p-4"
          style={{ height: "4.5rem" }}
        >
          <a
            className="navbar-brand scroll d-flex flex-row align-items-center gap-3"
            href="#"
          >
            {/* <Lottie animationData={animation} className="anim " /> */}
            <img
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              src="data:image/jpeg;base64,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"
              alt=""
            />
            <div>JOHN DOE</div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            style={{ border: "none" }}
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            //   onClick={() =>
            //     menu === false ? setMenue(true) : setMenue(false)
            //   }
          >
            {/* <i
                                className={`menu-button fas ${
                                    menu ? "fa-times" : "fa-ellipsis-v"
                                }`}
                            ></i> */}
            <RiMenu2Fill />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end bg-light"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav  d-flex justify-content-center align-items-center">
              <li className="nav-item p-2">
                <a
                  className={`nav-link ${scroll}`}
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item p-2">
                <a className={`nav-link ${scroll}`} href="#about">
                  About
                </a>
              </li>
              <li className="nav-item p-2">
                <a className={`nav-link ${scroll}`} href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item p-2">
                <a className={`nav-link ${scroll}`} href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item p-2">
                <a className={`nav-link ${scroll}`} href="#contact">
                  Contact
                </a>
              </li>
              {/* <li className="nav-item p-2">
                                <a className={`nav-link ${scroll}`} href="">
                                    Instagram
                                </a>
                            </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
