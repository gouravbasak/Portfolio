import React, { useState, useEffect } from "react";
import "./About.css";
import Carrousel from "./Carrousel";
import school from "../../assets/school.png";
import convoImg from "../../assets/convocation.png";
import work from "../../assets/office.png";
import certificates from "../../assets/certificate.png";
import cricket from "../../assets/cricket.png";
import swimming from "../../assets/swimming.png";
import pool from "../../assets/pool2.png";

const About = () => {
  const hobbies = [
    { name: "Cricket", image: cricket },
    { name: "Swimming", image: swimming },
    { name: "Pool", image: pool },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % hobbies.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [hobbies.length]);

  return (
    <div className="Infomain">
      <div className="info">ABOUT ME</div>
      <div className="content">
        <div className="skills_edu_work">
          <div className="skills">
            <span className="skillspan">Tech Stack</span>
            <Carrousel />
          </div>
          <div className="edu_work">
            <div className="edu">
              <div className="school">
                <span>
                  School <img src={school} />
                </span>
                Fanindra Dev Institution
                <span >10th & 12th | 2016-2018</span>
              </div>
              <div
                className="college"
                style={{ "--bg-image": `url(${convoImg})` }}
              >
                <span>
                  B.Tech CSE |
                  <span>LPU</span>
                  
                  </span>
                
                <p>2019-2023</p>
              </div>
            </div>
            <div className="work">
              <div className="pic" style={{ "--work-image": `url(${work})` }}>
                Work Ex
              </div>
              <div className="work_details">
                <div className="company">Protiviti India</div>
                <div className="position">
                  <div className="role">Software Developer</div>
                  <div className="timespan">June 2023 - Present</div>
                </div>
                <div className="position">
                  <div className="role">Software Developer Intern</div>
                  <div className="timespan">Oct 2022 - May 2023</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cert_award_hobby">
          <div className="cert">
            <span className="header">Certificates</span>
            <div className="content">
              <div className="item">
                <div className="icon">
                  <img src={certificates} />
                </div>
                <div className="details">
                  <span className="name">AI Associate</span>
                  <span className="org">Salesforce</span>
                </div>
              </div>
              <div className="item">
                <div className="icon">
                  <img src={certificates} />
                </div>
                <div className="details">
                  <span className="name">Full Stack Dev</span>
                  <span className="org">Salesforce</span>
                </div>
              </div>
            </div>
          </div>
          <div className="award">
            <span className="awardheader">Accelerator Awards</span>
            <span className="client">Client: Anthology INC </span>
            <span className="timestamp">March 2024</span>
          </div>
          <div
            className="hobbies-card"
            style={{
              backgroundImage: `url(${hobbies[currentIndex].image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h2>Hobbies</h2>
            <div className="hobby-content">
              <p className="hobby-name">{hobbies[currentIndex].name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
