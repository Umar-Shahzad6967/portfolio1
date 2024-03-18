import React from "react";

const About = () => {
  return (
    <>
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-6 my-3">
          <div className="img-box dark-img-box">
            <img src="img/pic.jpeg" alt="scooter rider" />
          </div>
        </div>

        <div className="col-lg-6 my-3">
          <div className="typo-box about-me">
            <h3>Muhammad Umar Shahzad</h3>
            <h5>
              A Junior <span className="color-theme">Web/Mobile Developer</span> based
              in <span className="color-theme">Gamica Cloud</span>
            </h5>
            <p>
              I am an 1+ years experienced Full Stack Developer with a passion for problem-solving and building efficient, scalable, and maintainable web applications. I have expertise in JavaScript,  and am proficient in both front-end and back-end development. I have worked with popular frameworks and libraries like React, Node.js and MongoDB.
            </p>
            <div className="row about-list">
              <div className="col-md-6">
                <div className="media">
                  <label>Location</label>
                  <p>Faisalabad</p>
                </div>
              </div>
              {/* End .col */}

              <div className="col-md-6">
                <div className="media">
                  <label>E-mail</label>
                  <p>umarsarwar426@gmail.com</p>
                </div>
              </div>
              {/* End .col */}
            </div>
            {/* End .row */}
            <div className="btn-bar">
              <a className="px-btn px-btn-theme" href="img/webcv.pdf" download>
                Download CV
              </a>
            </div>
          </div>
          {/* End .about me */}
        </div>
        {/* End .col */}
      </div>
    </>
  );
};

export default About;
