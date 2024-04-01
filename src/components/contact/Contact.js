import React from "react";
import Lottie from "lottie-react";
import animationData from "../../asset/contact-animation.json";
export default function Contact() {
  return (
    <>
      <div className="container contact" id="contact">
        <div className="form rounded bg-light">
          <div className="row">
            <div className="col-md-6 text-center">
              <div className="anim p-5 text-center w-100">
                <Lottie
                  animationData={animationData}
                  //   style={{ width: "30vw" }}
                />
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center flex-column align-items-center">
              <h2>Contact Us</h2>
              <form>
                <div className="form-group p-2 ">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group p-2">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>
                <div className="form-check ">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" for="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button type="submit" className="btn btn-primary m-2">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
