import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";
import netflix from "../../assets/netflix_clone.png";
import portfolio from "../../assets/portfolio.png";
import VRS from "../../assets/VRS.png";

const data = [
  {
    id: 1,
    image: portfolio,
    title: "Portfolio",
    github: "https://github.com/sugam-hub/portfolio",
    demo: "http://maheshwor-poudel.com.np/",
  },
  {
    id: 2,
    image: netflix,
    title: "Netflix Clone",
    github: "https://github.com/sugam-hub/NETFLIX",
    demo: "https://github.com",
  },
  {
    id: 3,
    image: VRS,
    title: "Vehicle Rental System",
    github: "https://github.com/sugam-hub/Vehicle-Rental-System",
    demo: "https://github.com",
  },
];

const Portfolio = () => {
  return (
    <>
      <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
          {data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target="_blank">
                    Github
                  </a>
                  <a href={demo} className="btn btn-primary" target="_blank">
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
