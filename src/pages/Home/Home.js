import React from "react";
import { Intro, About, Projects } from "../../components";
import { IntroData, AboutData } from "../Data";
import { Element } from "react-scroll";
function Home() {
  return (
    <>
      <Element name="intro" className="element">
        <Intro {...IntroData} />
      </Element>
      <Element name="projects" className="element">
        <Projects />
      </Element>
      <Element name="about" className="element">
        <About {...AboutData} />
      </Element>
    </>
  );
}

export default Home;
