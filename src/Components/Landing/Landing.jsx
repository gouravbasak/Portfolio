import React from "react";
import "./Landing.css";
import user from "../../assets/user2.png";
import html from "../../assets/html.png";
import css from "../../assets/Css.png";
import js from "../../assets/Js.png";
import react from "../../assets/react.png";
import Resume from "../../assets/button.png";

const Landing = () => {
  return (
    <div className="landingmain">
      <div className="userimg">
        <img src={user} alt="" />
      </div>
      <div className="userintro">
        <div className="banner">
          <img src={html} />
          <img src={css} />
          <img src={js} />
          <img src={react} />
          <span>&lt;Web Developer/&gt;</span>
        </div>
        <div className="intro">
          <span>Every line of code tells a story—make it a good one.</span>
        </div>
        <div className="subintro">
          <span>
            I’m a Full-Stack Developer who builds fast, scalable apps that don’t
            just work — they perform. With 3 years of experience in this field,
            I turn complex problems into clean solutions using Frontend tools
            like React js, html, css, js. From reducing page load times to
            automating workflows, I focus on real impact, not just lines of
            code.
          </span>
        </div>
        <div className="resume">
          <a
            href="https://drive.google.com/file/d/1iKuieZ96bHcePfBBRTC9GshJlQJn2tld/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Resume} alt="Resume" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
