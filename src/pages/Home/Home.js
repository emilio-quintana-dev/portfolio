import React from "react";
import { InfoSection, ProjectsSection } from "../../components";
import { intro, aboutMe, projects } from "../Data";

function Home() {
  return (
    <>
      <InfoSection {...intro} />
      <InfoSection {...aboutMe} />
      <ProjectsSection {...projects} />
    </>
  );
}

export default Home;
