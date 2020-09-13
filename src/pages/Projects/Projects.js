import React from "react";
import { ProjectsSection } from "../../components";
import { projects } from "../Data";

function Projects() {
  return (
    <>
      <ProjectsSection {...projects} />
    </>
  );
}

export default Projects;
