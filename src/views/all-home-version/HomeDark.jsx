import React, { useEffect, useState } from "react";
import Header from "../../components/header/HeaderFluid";
import Slider from "../../components/slider/SliderTwo";
import About from "../../components/about/AboutFour";
import Service from "../../components/service/ServiceTwo";
import Experiences from "../../components/experiences/Experiences";
import Education from "../../components/education/Education";
import Portfolio from "../../components/portfolio/Portfolio";
import Testimonial from "../../components/testimonial/Testimonial";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import './Home.css'
import useDocumentTitle from "../../components/useDocumentTitle";
const fetch_data = async () => {
  try {
    const res = await fetch("https://api.github.com/users/Umar-Shahzad6967/repos")
    if (res.ok) {
      return res.json()
    }
  } catch (error) {
    console.log(error)
  }
}

const HomeTwo = () => {
  useDocumentTitle("Anthony Medina");
  const [repos, setRepos] = useState([])

  useEffect(() => {
    const get_data = async () => {
      try {
        const data = await fetch_data()
        console.log(data)
        setRepos(data)
      } catch (error) {
        console.log(error)
      }
    }
    get_data()
  }, [])
  return (
    <div className="home-dark">
      <Header />
      {/* End Header Section */}
      <Slider />
      {/* End Banner Section */}

      {/* About Me */}
      <section id="about" className="section about-section after-left-section">
        <div className="container">
          <About />
        </div>
      </section>
      {/* End About Me */}

      {/* Services */}
      <section id="services" className="section services-section gray-bg">
        <div className="container">
          <div className="row justify-content-center section-title text-center">
            <div className="col-lg-7">
              <h3 className="font-alt">My Services</h3>
            </div>
          </div>
          {/* End .row */}
          <Service />
        </div>
      </section>
      {/* End Services */}

      {/*  Experiences */}
      <section id="experiences" className="section skill-section">
        <div className="container">
          <div className="row justify-content-center section-title text-center">
            <div className="col-lg-7">
              <h3 className="font-alt">My Repositoryes </h3>
            </div>
          </div>
          <div className="row">
            {repos.map(repo => (
              <div key={repo.id} className="col-lg-3 col-md-6 mb-3" style={{ backgroundColor: "#124c59", borderRadius: "10px", padding: "20px", margin: "10px", width: "31%" }}>
                <div className="card">
                  <div className="card-body">
                    <h5 style={{ fontSize: "40px", marginTop: "50px", textAlign: "center", textTransform: "capitalize" }}>{repo.name}</h5>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <p className="card-text"><strong>Language:</strong> {repo.language}</p>
                      <p className="card-text"><strong>Stars:</strong> {repo.stargazers_count}</p>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <p className="card-text"><strong>Watchers:</strong> {repo.watchers_count}</p>
                      <p className="card-text"><strong>Created:</strong> {new Date(repo.created_at).toDateString()}</p>
                    </div>
                    <a href={repo.html_url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Repo</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <Experiences /> */}
        </div>
      </section>
      {/* End Experiences */}

      {/*  Education */}
      <section id="education" className="section skill-section gray-bg">
        <div className="container">
          <div className="row justify-content-center section-title text-center">
            <div className="col-lg-7">
              <h3 className="font-alt">Education and Skills</h3>
            </div>
          </div>
          <Education />
        </div>
      </section>
      {/* End Education */}

      <section id="work" className="section">
        <div className="container">
          <div className="row justify-content-center section-title text-center">
            <div className="col-lg-7">
              <h3 className="font-alt">My Portfolio</h3>
            </div>
          </div>
          {/* End .row */}
          <Portfolio />
        </div>
      </section>
      {/* End Portfolio */}

      <div className="section testimonial gray-bg">
        <div className="container">
          <Testimonial />
        </div>
      </div>
      {/* End testimonial */}

      {/* Contact */}
      <section id="contact" className="section after-left-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 my-3">
              <div className="contct-form">
                <div className="sm-title">
                  <h4 className="font-alt">Contact us</h4>
                </div>
                {/* End .sm-title */}
                <Contact />
              </div>
            </div>
            {/* End .col */}

            <div className="col-lg-4 ml-auto my-3">
              <div className="contact-info">
                <div className="sm-title">
                  <h4 className="font-alt">Get in touch</h4>
                  <p>
                    Always available for work if the right project comes
                    along, Feel free to contact me.
                  </p>
                </div>
                <div className="media">
                  <div className="icon">
                    <i className="ti-map"></i>
                  </div>
                  <span className="media-body">
                    Faisalabad
                  </span>
                </div>
                {/* End media */}

                <div className="media">
                  <div className="icon">
                    <i className="ti-email"></i>
                  </div>
                  <span className="media-body">
                    umarsarwar426@gmail.com
                  </span>
                </div>
                {/* End media */}

                <div className="media">
                  <div className="icon">
                    <i className="ti-mobile"></i>
                  </div>
                  <span className="media-body">
                    +1 (646) 926-1967
                  </span>
                </div>
                {/* End media */}
              </div>
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
      {/* End Contact */}

      {/* Footer */}
      <footer className="footer white">
        <div className="container">
          <Footer />
        </div>
      </footer>
      {/*  End Footer */}
    </div>
  );
};

export default HomeTwo;
