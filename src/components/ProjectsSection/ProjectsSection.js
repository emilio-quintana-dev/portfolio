import React from "react";
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
} from "./ProjectsSection.elements";

const Projects = ({
  projectOneName,
  projectOneDescription,
  projectOneStack,
  projectOneLoom,
  projectOneGithub,
  projectTwoName,
  projectTwoDescription,
  projectTwoStack,
  projectTwoLoom,
  projectTwoGithub,
  projectThreeName,
  projectThreeDescription,
  projectThreeStack,
  projectThreeLoom,
  projectThreeGithub,
}) => {
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
                <ProjectCardPlan>{projectOneName}</ProjectCardPlan>
                <ProjectCardFeatures>
                  <ProjectCardFeature>
                    {projectOneDescription}
                  </ProjectCardFeature>
                  <ProjectCardFeature>{projectOneStack}</ProjectCardFeature>
                  <ProjectCardFeature></ProjectCardFeature>
                </ProjectCardFeatures>

                <ActionWrapper>
                  <ProjectLink
                    primary
                    href={projectOneLoom}
                    target="_blank"
                    style={{ marginBottom: 10 }}
                  >
                    Watch demo
                  </ProjectLink>

                  <ProjectLink primary href={projectOneGithub} target="_blank">
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
                <ProjectCardPlan>{projectTwoName}</ProjectCardPlan>
                <ProjectCardFeatures>
                  <ProjectCardFeature>
                    {projectTwoDescription}
                  </ProjectCardFeature>
                  <ProjectCardFeature>{projectTwoStack}</ProjectCardFeature>
                  <ProjectCardFeature></ProjectCardFeature>
                </ProjectCardFeatures>

                <ActionWrapper>
                  <ProjectLink
                    primary
                    href={projectTwoLoom}
                    target="_blank"
                    style={{ marginBottom: 10 }}
                  >
                    Watch demo
                  </ProjectLink>

                  <ProjectLink primary href={projectTwoGithub} target="_blank">
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
                <ProjectCardPlan>{projectThreeName}</ProjectCardPlan>
                <ProjectCardFeatures>
                  <ProjectCardFeature>
                    {projectThreeDescription}
                  </ProjectCardFeature>
                  <ProjectCardFeature>{projectThreeStack}</ProjectCardFeature>
                  <ProjectCardFeature></ProjectCardFeature>
                </ProjectCardFeatures>

                <ActionWrapper>
                  <ProjectLink
                    primary
                    href={projectThreeLoom}
                    target="_blank"
                    style={{ marginBottom: 10 }}
                  >
                    Watch demo
                  </ProjectLink>

                  <ProjectLink
                    primary
                    href={projectThreeGithub}
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
};

export default Projects;
