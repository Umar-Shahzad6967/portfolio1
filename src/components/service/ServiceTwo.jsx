import React from "react";

const ServiceContent = [
  {
    icon: "ti-layout",
    no: "01",
    service: "FULL STACK DEVELOPMENT",
    title: "Professional Web Development",
    desc: `transform the client's idea into a full-featured website 
    that works on all supported devices and screen sizes.`,
  },
  {
    icon: "ti-mobile",
    no: "02",
    service: "MOBILE DEVELOPMENT",
    title: "iOS/Android App Development",
    desc: `develop well-designed&functioned app to help businesses 
    and individuals achieve their goals by mobile technology`,
  },
  {
    icon: "ti-ruler-pencil",
    no: "03",
    service: "UI/UX DESIGN",
    title: "Web&Mobile Design",
    desc: `elevate the digital product with Expert UI Design services, 
    creating intuitive and effective UX`,
  },
];

const ServiceTwo = () => {
  return (
    <>
      <div className="row gy-4">
        {ServiceContent.map((val, i) => (
          <div className="col-sm-6 col-lg-4" key={i}>
            <div className="feature-box-02">
              <div className="icon">
                <i className={val.icon}></i>
              </div>
              <h6>
                <span>{val.no}.</span> {val.service}
              </h6>
              <h5>{val.title}</h5>
              <p>{val.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ServiceTwo;
