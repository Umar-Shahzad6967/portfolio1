import React from "react";

const Education = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-4 my-3">
          <div className="sm-title">
            <h4 className="font-alt">Education</h4>
          </div>
          <ul className="aducation-box theme-bg">
            <li>
              <span className="dark-bg">2019 - 2023</span>
              <h6>GUCF</h6>
              <p>Bachelor of Information Technology</p>
            </li>
          </ul>
          {/* End  .aducation-box */}
        </div>
        {/* End .col */}

        <div className="col-lg-8 ml-auto my-3">
          <div className="sm-title">
            <h4 className="font-alt">My Skills</h4>
          </div>
          <div className="gray-bg skill-box">
            <div className="skill-lt">
              <h6>Html</h6>
              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 100 + "%" }}
                >
                  <span>100%</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}

            <div className="skill-lt">
              <h6>Css</h6>
              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 100 + "%" }}
                >
                  <span>100%</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}

            <div className="skill-lt">
              <h6>JS</h6>
              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 92 + "%" }}
                >
                  <span>92%</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}

            <div className="skill-lt">
              <h6>React </h6>
              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 95 + "%" }}
                >
                  <span>95%</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}

            <div className="skill-lt">
              <h6>Node JS</h6>
              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 80 + "%" }}
                >
                  <span>80%</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}

            <div className="skill-lt">
              <h6>Express JS </h6>
              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 80 + "%" }}
                >
                  <span>80%</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}

            <div className="skill-lt">
              <h6>MongoDB</h6>
              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 80 + "%" }}
                >
                  <span>80%</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}
          </div>
        </div>
        {/* End .col */}
      </div>
    </>
  );
};

export default Education;
