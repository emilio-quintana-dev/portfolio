import React from "react";
import { SiRails } from "react-icons/si";
import { SiRedux, SiMaterialUi, SiMongodb, SiElectron } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  Button,
  ProjectTitle,
  DescriptionWrapper,
  Description,
  ProjectSection,
  ProjectWrapper,
  ProjectHeading,
  ProjectContainer,
  ProjectCard,
  ProjectCardInfo,
  IconsWrapper,
  ProjectLink,
  Icon,
} from "./Projects.elements";

const Projects = () => {
  return (
    <ProjectSection>
      <ProjectWrapper>
        <ProjectHeading>My Projects</ProjectHeading>
        <ProjectContainer>
          <ProjectCard>
            <ProjectCardInfo>
              <ProjectTitle>Cerealvis</ProjectTitle>

              <DescriptionWrapper>
                <Description>
                  Electron app made to read sensor data from serial port.
                </Description>
              </DescriptionWrapper>
              <ProjectLink
                href="https://github.com/emilio-quintana-dev/CerealVis"
                target="_blank"
              >
                <Button primary>Github</Button>
              </ProjectLink>

              <ProjectLink
                href="https://www.loom.com/share/0782c7ff097e49c3ab2d8b0e3e2b8817"
                target="_blank"
              >
                <Button primary>Watch demo</Button>
              </ProjectLink>

              <IconsWrapper>
                <Icon>
                  <FaReact />
                </Icon>
                <Icon>
                  <FaNodeJs />
                </Icon>
                <Icon>
                  <SiElectron />
                </Icon>
                <Icon>
                  <SiMaterialUi />
                </Icon>
              </IconsWrapper>
            </ProjectCardInfo>
          </ProjectCard>

          <ProjectCard>
            <ProjectCardInfo>
              <ProjectTitle>Servitodo</ProjectTitle>
              <DescriptionWrapper>
                <Description>
                  App made to connect customers with local professionals.
                </Description>
              </DescriptionWrapper>
              <ProjectLink
                href="https://github.com/emilio-quintana-dev/servitodo-client-v1"
                target="_blank"
              >
                <Button primary>Github</Button>
              </ProjectLink>
              <ProjectLink
                href="https://www.loom.com/share/264162506394494995a22879cce0ac30"
                target="_blank"
              >
                <Button primary>Watch demo</Button>
              </ProjectLink>
              <IconsWrapper>
                <Icon>
                  <FaReact />
                </Icon>
                <Icon>
                  <SiRedux />
                </Icon>
                <Icon>
                  <SiRails />
                </Icon>
                <Icon>
                  <SiMaterialUi />
                </Icon>
              </IconsWrapper>
            </ProjectCardInfo>
          </ProjectCard>

          <ProjectCard>
            <ProjectCardInfo>
              <ProjectTitle>Task.io</ProjectTitle>
              <DescriptionWrapper>
                <Description>
                  App with user authentication made to save reminders.
                </Description>
              </DescriptionWrapper>
              <ProjectLink
                href="https://github.com/emilio-quintana-dev/task-io-client-v1"
                target="_blank"
              >
                <Button primary>Github</Button>
              </ProjectLink>

              <ProjectLink
                href="https://distracted-wing-b65893.netlify.app/"
                target="_blank"
              >
                <Button>Test</Button>
              </ProjectLink>
              <IconsWrapper>
                <Icon>
                  <FaReact />
                </Icon>
                <Icon>
                  <FaNodeJs />
                </Icon>
                <Icon>
                  <SiMongodb />
                </Icon>
                <Icon>
                  <SiRails />
                </Icon>
              </IconsWrapper>
            </ProjectCardInfo>
          </ProjectCard>
        </ProjectContainer>
      </ProjectWrapper>
    </ProjectSection>
  );
};

export default Projects;
