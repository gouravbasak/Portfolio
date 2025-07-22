import React from 'react'
import './Footer.css';
import up  from "../../assets/up.png";
import { Link as ScrollLink } from "react-scroll";
const Footer = () => {
  return (
    <div className='foot-main'>
      <div className="up">
        <div className="talk">
          <span className="talk1">Have something in mind?</span>
          <span className="talk2"> let's talk</span>
        </div>
       <ScrollLink to="nav" smooth={true} duration={700} offset={-50}>
          <div className="top" style={{ cursor: "pointer" }}>
            <span>back to top</span>
            <img src={up} alt="↑" />
          </div>
        </ScrollLink>
      </div>
      <div className="down">
        <div className="link">
          <a href="https://www.linkedin.com/in/gourav-basak/" target='_blank'>LinkedIn</a>
          <a  href="https://drive.google.com/file/d/1Fu_d5Lq2bqmNmpjr3WwqP855Abls2wyy/view?usp=drive_link"
            target="_blank">CV</a>
          <a href="https://github.com/gouravbasak" target='_blank'>Github</a>
        </div>
        <div className="copywrite">
          <span>
            <span>Developed by</span>
            <span>
              <span className='orange-text'>Gourav</span>
              <span className='white-text'> Basak</span>
            </span> 
            </span>
          <span>@2025 Copyright</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
