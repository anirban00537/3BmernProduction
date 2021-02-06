import React from "react";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark navbar-custom fixed-top">
      <Link
        activeClass="active"
        to="header"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <img src="assets/images/logo.png" className="" alt="alternative" />
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-awesome fas fa-bars"></span>
        <span class="navbar-toggler-awesome fas fa-times"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link page-scroll" href="">
              <Link
                activeClass="active"
                to="header"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                HOME
              </Link>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link page-scroll" href="">
              <Link
                activeClass="active"
                to="intro"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                INTRO
              </Link>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link page-scroll" href="">
              <Link
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                SERVICES
              </Link>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link page-scroll" href="">
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                PROJECTS
              </Link>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link page-scroll" href="">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                ABOUT
              </Link>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link page-scroll" href="">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                CONTACT
              </Link>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
