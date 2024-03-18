import React, { useState } from "react";
import Scrollspy from "react-scrollspy";
import { Link } from "react-router-dom";

const HeaderFluid = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 71) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      {/* Header */}
      <header
        className={
          navbar
            ? "main-header header-fluid fixed-header"
            : "main-header header-fluid"
        }
      >
        <nav className="container-fluid">
          <div className=" header-transparent">
            {/* Brand */}
            <li>
              <a className="nav-link" href="#home" onClick={handleClick}>
                <span>Portfolio</span>
              </a>
            </li>
            {/* / */}
            {/* Mobile Toggle */}
            <button
              className="navbar-toggler"
              type="button"
              onClick={handleClick}
            >
              <div className={click ? "hamburger active" : "hamburger"}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
            {/* / */}
            {/* Top Menu */}
            <div
              className={
                click
                  ? "mobile-menu navbar-collapse justify-content-end active"
                  : "mobile-menu navbar-collapse justify-content-end"
              }
            >
              <Link to="/" className="sidebar-logo">
                <h1>Portfolio</h1>
              </Link>
              <Scrollspy
                className="anchor_nav navbar-nav ml-auto"
                items={["home", "about", "services", "experiences", "education", "work", "contact"]}
                currentClassName="current"
                offset={-71}
              >
                <li>
                  <a className="nav-link" href="#home" onClick={handleClick}>
                    <span>Home</span>
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#about" onClick={handleClick}>
                    <span>About Me</span>
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link"
                    href="#services"
                    onClick={handleClick}
                  >
                    <span>Services</span>
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link"
                    href="#experiences"
                    onClick={handleClick}
                  >
                    <span>GitHub API</span>
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link"
                    href="#education"
                    onClick={handleClick}
                  >
                    <span>Education</span>
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#work" onClick={handleClick}>
                    <span>Project</span>
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#contact" onClick={handleClick}>
                    <span>Contact</span>
                  </a>
                </li>
              </Scrollspy>
              <button
                className=" sidebar-bottom-closer dark-bg"
                type="button"
                onClick={handleClick}
              >
                Close Sidebar
              </button>
            </div>
            {/* / */}
          </div>
          {/* Container */}
        </nav>
        {/* Navbar */}
      </header>
      {/* End Header */}
    </>
  );
};

export default HeaderFluid;
