import React from "react";
import { InfoSection, ProjectsSection } from "../../components";
import { intro, aboutMe, projects } from "../Data";
import { Element } from "react-scroll";
function Home() {
  return (
    <>
      <Element name="intro" className="element">
        <InfoSection {...intro} />
      </Element>

      <Element name="about" className="element">
        <InfoSection {...aboutMe} />
      </Element>

      <Element name="projects" className="element">
        <ProjectsSection {...projects} />
      </Element>
    </>
  );
}

export default Home;
