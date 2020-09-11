import React from "react";
import { Button } from "../../globalStyles";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GrUserWorker } from "react-icons/gr";
import { IconContext } from "react-icons/lib";
import { VscDebugDisconnect, VscNote } from "react-icons/vsc";
import { SiArduino } from "react-icons/si";

import {
  ProjectSection,
  ProjectWrapper,
  ProjectHeading,
  ProjectContainer,
  ProjectCard,
  ProjectCardInfo,
  ProjectCardIcon,
  ProjectCardPlan,
  ProjectCardFeatures,
  ProjectCardFeature,
  ActionWrapper,
  ProjectLink,
} from "./Projects.elements";

function Projects() {
  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
      <ProjectSection>
        <ProjectWrapper>
          <ProjectHeading>My Projects</ProjectHeading>
          <ProjectContainer>
            <ProjectCard>
              <ProjectCardInfo>
                <ProjectCardIcon>
                  <VscDebugDisconnect />
                </ProjectCardIcon>
                <ProjectCardPlan>Servitodo</ProjectCardPlan>
                <ProjectCardFeatures>
                  <ProjectCardFeature>
                    Web app made to connect professionals with potential
                    customers.
                  </ProjectCardFeature>
                  <ProjectCardFeature>
                    Made using React, Redux, JWT, a Rails API and a Postgre db.
                  </ProjectCardFeature>
                  <ProjectCardFeature></ProjectCardFeature>
                </ProjectCardFeatures>

                <ActionWrapper>
                  <ProjectLink
                    primary
                    href="https://www.loom.com/share/0782c7ff097e49c3ab2d8b0e3e2b8817"
                    target="_blank"
                    style={{ marginBottom: 10 }}
                  >
                    Watch demo
                  </ProjectLink>

                  <ProjectLink
                    primary
                    href="https://github.com/emilio-quintana-dev/servitodo-client"
                    target="_blank"
                  >
                    Github
                  </ProjectLink>
                </ActionWrapper>
              </ProjectCardInfo>
            </ProjectCard>
            <ProjectCard>
              <ProjectCardInfo>
                <ProjectCardIcon>
                  <SiArduino />
                </ProjectCardIcon>
                <ProjectCardPlan>CerealVis</ProjectCardPlan>
                <ProjectCardFeatures>
                  <ProjectCardFeature>
                    Electron desktop app made to visualize serial data coming
                    from a port.
                  </ProjectCardFeature>
                  <ProjectCardFeature>
                    Made using Electron, React and Material UI.
                  </ProjectCardFeature>
                  <ProjectCardFeature></ProjectCardFeature>
                </ProjectCardFeatures>

                <ActionWrapper>
                  <ProjectLink
                    primary
                    href="https://www.loom.com/share/0782c7ff097e49c3ab2d8b0e3e2b8817"
                    target="_blank"
                    style={{ marginBottom: 10 }}
                  >
                    Watch demo
                  </ProjectLink>

                  <ProjectLink
                    primary
                    href="https://github.com/emilio-quintana-dev/servitodo-client"
                    target="_blank"
                  >
                    Github
                  </ProjectLink>
                </ActionWrapper>
              </ProjectCardInfo>
            </ProjectCard>
            <ProjectCard>
              <ProjectCardInfo>
                <ProjectCardIcon>
                  <VscNote />
                </ProjectCardIcon>
                <ProjectCardPlan>Evernot</ProjectCardPlan>
                <ProjectCardFeatures>
                  <ProjectCardFeature>
                    Web app with user authentication made to save notes and
                    reminders.
                  </ProjectCardFeature>
                  <ProjectCardFeature>
                    Made using React, a Rails API and a SQlite3 db.
                  </ProjectCardFeature>
                  <ProjectCardFeature></ProjectCardFeature>
                </ProjectCardFeatures>

                <ActionWrapper>
                  <ProjectLink
                    primary
                    href="https://www.loom.com/share/0782c7ff097e49c3ab2d8b0e3e2b8817"
                    target="_blank"
                    style={{ marginBottom: 10 }}
                  >
                    Watch demo
                  </ProjectLink>

                  <ProjectLink
                    primary
                    href="https://github.com/emilio-quintana-dev/servitodo-client"
                    target="_blank"
                  >
                    Github
                  </ProjectLink>
                </ActionWrapper>
              </ProjectCardInfo>
            </ProjectCard>
          </ProjectContainer>
        </ProjectWrapper>
      </ProjectSection>
    </IconContext.Provider>
  );
}
export default Projects;
