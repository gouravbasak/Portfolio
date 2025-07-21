import React from "react";
import "./Nav.css";
import mailIcon from "../../assets/mail.png";
import call from "../../assets/call.png";
import linkedin from "../../assets/linkedin.png";
import wp from "../../assets/whatsapp.png";
import { Link as ScrollLink, Element } from "react-scroll";

const Nav = () => {
  return (
    <div className="navmain">
      <div className="nav">
        <div className="name">
          <span className="orange-text">Gourav</span>
          <span className="white-text"> Basak</span>
        </div>
        <nav className="opt">
          <ul>
            <li>
              <ScrollLink to="about" smooth={true} duration={500} offset={-70}>
                ABOUT ME
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                offset={-70}
              >
                PROJECTS
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
              >
                CONTACT ME
              </ScrollLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="contact">
        <a href="https://www.linkedin.com/in/gourav-basak/" target="_blank">
          <img src={linkedin} />
        </a>
        <a href="mailto:gouravbasak248@gmail.com">
          <img src={mailIcon} alt="Email Icon" />
        </a>

        <a href="tel:+918637866948">
          <img src={wp} alt="Call" />
        </a>

        <img src={call} />
        <span>Lets Connect</span>
      </div>
    </div>
  );
};

export default Nav;
