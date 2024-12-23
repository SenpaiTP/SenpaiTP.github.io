import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ProjectCard } from "./ProjectCard";
import { projectsData } from "../../Data/projectData";

const ProjectCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={10000}
      keyBoardControl={true}
      showDots={true}
      customTransition="transform 500ms ease-in-out"
      containerClass="carousel-container"
      itemClass="carousel-item"
    >
      {projectsData.map((data, index) => (
        <div
          key={index}
          className={`carousel-item ${
            index === 0 ? "carousel-item--active" : "carousel-item--inactive"
          }`}
        >
          <ProjectCard projectsData={data} />
        </div>
      ))}
    </Carousel>
  );
};

export default ProjectCarousel;
