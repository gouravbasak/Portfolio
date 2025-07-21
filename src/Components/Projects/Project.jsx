import React, { useState } from "react";
import "./Project.css";
import colt from "../../assets/colt.png";
import Unilever from "../../assets/unilever.png";
import anthology from "../../assets/anthology.png";
import music from "../../assets/music.png";
import chat from "../../assets/chat.png";
import blog from "../../assets/blog.png";

const ProjectData = [
  {
    id: 1,
    projectImage: colt,
    projectTitle: "Architect and scale real-time dashboards with auto-scrolling charts, interactive filters, and seamless navigation using React.js and Chart.js to power live data insights.",
    techStack: ["React.js", "Chart.js", "Redux", "HTML5", "CSS3", "Axios"]
  },
  {
    id: 2,
    projectImage: Unilever,
    projectTitle: "Own the design and implementation of admin and user panels across 4 critical modules, driving UI consistency and performance using React and Material UI.",
    techStack: ["React.js", "Material UI", "Redux Toolkit", "JavaScript (ES6+)", "HTML", "React Router"]
  },
  {
    id: 3,
    projectImage: anthology,
    projectTitle: "Lead data transformation from Dynamics 365 to Salesforce, while optimizing backend workflows and building custom dashboards that drive accurate sales forecasting and renewals.",
    techStack: ["Salesforce", "Apex", "DataLoader.io", "LWC", "REST APIs", "JavaScript"]
  },
  {
    id: 4,
    projectImage: music,
    projectTitle: "MyMusic is a fully functional Android application built with Java, designed to play audio files stored on the user's device. It provides a sleek and user-friendly interface with core features like play, pause, skip, and a song list display, offering a smooth music playback experience.",
    techStack: ["Java", "Android SDK", "MediaPlayer API", "RecyclerView", "ContentResolver", "MediaStore", "XML"]
  },
  {
    id: 5,
    projectImage: chat,
    projectTitle: "Real-time web chat application developed using PHP and MySQL. It offers users the ability to register, log in, and engage in seamless conversations through a user-friendly interface. The application ensures efficient data handling and dynamic content updates, providing a smooth chatting experience.",
    techStack:["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"]
  },
  {
    id: 6,
    projectImage: blog,
    projectTitle: "A responsive and visually engaging front-end blog template designed using modern web technologies. It features a clean layout suitable for personal or professional blogging, incorporating interactive elements like carousels and custom fonts to enhance user experience.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Owl Carousel", "Web Fonts"]
  },
];

const ProjectCard = ({ data }) => {
  const [isHovered, setHovered] = useState(false);
  const animatCardMedia = isHovered ? { height: "200px",padding: "5px"} : {  height: "250px", padding: "4px"};
  const animateMetaList = { 
    opacity: isHovered ? 1 : 0,
    height: isHovered ? "auto" : 0,
    transition: "all 0.3s ease"
  };
  return (
    <div
      className="card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      key={data?.id}
    >
      <div className="card-media" style={animatCardMedia}>
        <img src={data?.projectImage} alt="project_image" />
      </div>
      <div className="card-body">
        <div className="card-title">
          <h6>{data?.projectTitle}</h6>
        </div>
         {data.techStack && (
        <div className="tags-cta" style={animateMetaList}>
          <div className="tags">
            <span>Tech Stack - </span>
              {data.techStack?.map((tech, index) => (
              <span key={index}>{tech}</span>
              ))}
          </div>
        </div>
         )}
      </div>
    </div>
  );
};

const Project = () => {
  return (
    <div className="proj_main">
      <h2>PROJECTS</h2>
      <h5>Completed 4+ end-to-end projects across diverse domains using modern web technologies, collaborating with cross-functional teams and international clients from the US and UK to deliver scalable, real-world business solutions.</h5>
      <div className="project-container">
        {ProjectData?.map((item) => {
          return <ProjectCard data={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Project;
