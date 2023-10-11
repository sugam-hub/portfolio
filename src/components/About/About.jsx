import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";

import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <>
      <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="About image" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>Fresher</small>
              </article>
              <article className="about__card">
                <FiUsers className="about__icon" />
                <h5>Clinets</h5>
                <small>None till now</small>
              </article>
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Projects</h5>
                <small>5+ Completed</small>
              </article>
            </div>
            <p>
              I am a passionate MERN stack developer with a deep love for
              crafting dynamic and responsive web applications. My journey in
              the world of web development has led me to become proficient in
              JavaScript, HTML, and CSS, enabling me to create engaging user
              interfaces with React.js while harnessing the power of Node.js and
              Express.js for server-side logic. I have a keen eye for detail and
              a commitment to writing clean, efficient code. As a perpetual
              learner, I stay updated with the latest trends in web development,
              ensuring that I deliver innovative, high-quality solutions to meet
              the needs of each project.
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
