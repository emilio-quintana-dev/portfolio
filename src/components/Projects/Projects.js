import React from "react";
import { IconContext } from "react-icons/lib";
import { SiRails } from "react-icons/si";
import {
  SiArduino,
  SiRedux,
  SiMaterialUi,
  SiMongodb,
  SiElectron,
} from "react-icons/si";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { ParallaxDepthCard } from "experiment-parallax-depth-card";
import "experiment-parallax-depth-card/dist/index.css";
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
  IconsWrapper,
  ProjectLink,
  Icon,
} from "./Projects.elements";

const Projects = () => {
  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
      <ProjectSection>
        <ProjectWrapper>
          <ProjectHeading>My Projects</ProjectHeading>
          <ProjectContainer>
            <a
              href="https://github.com/emilio-quintana-dev/servitodo-client"
              target="_blank"
            >
              <ParallaxDepthCard title="Servitodo">
                <p>
                  Web app made to help connect professionals with potential
                  customers.
                </p>
                <p>Click to see repo</p>
                <IconsWrapper>
                  <Icon>
                    <FaReact />
                  </Icon>
                  <Icon>
                    <FaHtml5 />
                  </Icon>
                  <Icon>
                    <FaCss3Alt />
                  </Icon>
                  <Icon>
                    <SiRails />
                  </Icon>
                  <Icon>
                    <SiRedux />
                  </Icon>
                  <Icon>
                    <SiMaterialUi />
                  </Icon>
                </IconsWrapper>
              </ParallaxDepthCard>
            </a>

            <a
              href="https://github.com/emilio-quintana-dev/CerealVis"
              target="_blank"
            >
              <ParallaxDepthCard title="CerealVis">
                <p>
                  Electron app made to visualize serial data coming from a port.
                </p>
                <p>Click to see repo</p>
                <IconsWrapper>
                  <Icon>
                    <FaReact />
                  </Icon>
                  <Icon>
                    <FaHtml5 />
                  </Icon>
                  <Icon>
                    <FaCss3Alt />
                  </Icon>
                  <Icon>
                    <SiElectron />
                  </Icon>
                  <Icon>
                    <SiArduino />
                  </Icon>
                </IconsWrapper>
              </ParallaxDepthCard>
            </a>

            <a
              href="https://github.com/emilio-quintana-dev/task-io-client-v1"
              target="_blank"
            >
              <ParallaxDepthCard title="Tasks.io">
                <p>
                  Prodoctivity tool with User authentication made to keep track
                  of to-dos.
                </p>
                <p>Click to see repo</p>
                <IconsWrapper>
                  <Icon>
                    <FaReact />
                  </Icon>
                  <Icon>
                    <FaHtml5 />
                  </Icon>
                  <Icon>
                    <FaCss3Alt />
                  </Icon>
                  <Icon>
                    <SiMongodb />
                  </Icon>
                  <Icon>
                    <FaNodeJs />
                  </Icon>
                </IconsWrapper>
              </ParallaxDepthCard>
            </a>
          </ProjectContainer>

          <ProjectContainer>
            <a
              href="https://github.com/emilio-quintana-dev/evernot-client-v1"
              target="_blank"
            >
              <ParallaxDepthCard title="Evernot">
                <p>
                  Prodoctivity tool with User authentication made to keep track
                  of notes & reminders.
                </p>
                <p>Click to see repo</p>
                <IconsWrapper>
                  <Icon>
                    <FaReact />
                  </Icon>
                  <Icon>
                    <FaHtml5 />
                  </Icon>
                  <Icon>
                    <FaCss3Alt />
                  </Icon>
                  <Icon>
                    <SiMongodb />
                  </Icon>
                  <Icon>
                    <FaNodeJs />
                  </Icon>
                </IconsWrapper>
              </ParallaxDepthCard>
            </a>

            <a
              href="https://github.com/emilio-quintana-dev/emilio-dev-v2"
              target="_blank"
            >
              <ParallaxDepthCard title="Emilio.dev">
                <p>
                  Fully-responsive and made out of reusable styled components.
                </p>
                <p>Click to see repo</p>
                <IconsWrapper>
                  <Icon>
                    <FaReact />
                  </Icon>
                  <Icon>
                    <FaHtml5 />
                  </Icon>
                  <Icon>
                    <FaCss3Alt />
                  </Icon>
                </IconsWrapper>
              </ParallaxDepthCard>
            </a>

            <a
              href="https://github.com/emilio-quintana-dev/pomoclock-client-v1"
              target="_blank"
            >
              <ParallaxDepthCard title="Pomoclock">
                <p>Prodoctivity tool made to perform the pomodoro technique.</p>
                <p>Click to see repo</p>
                <IconsWrapper>
                  <Icon>
                    <FaReact />
                  </Icon>
                  <Icon>
                    <FaHtml5 />
                  </Icon>
                  <Icon>
                    <FaCss3Alt />
                  </Icon>
                </IconsWrapper>
              </ParallaxDepthCard>
            </a>
          </ProjectContainer>
        </ProjectWrapper>
      </ProjectSection>
    </IconContext.Provider>
  );
};

export default Projects;
