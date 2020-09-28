import React from "react";
import { Container, Button } from "../../globalStyles";
import { Link } from "react-router-dom";
import { Link as ScLink } from "react-scroll";

import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
} from "./InfoSection.elements";

const InfoSection = ({
  primary,
  lightBg,
  imgStart,
  lightTopLine,
  lightTextDesc,
  buttonLabel,
  description,
  headline,
  lightText,
  topLine,
  img,
  start,
  alt,
  isAboutMe,
}) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>

                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>

                {isAboutMe ? (
                  <Link to="/files/emilio-resume.pdf" target="_blank" download>
                    <Button big fontBig primary={primary}>
                      {buttonLabel}
                    </Button>{" "}
                  </Link>
                ) : (
                  <ScLink
                    to="projects"
                    offset={-80}
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <Button big fontBig primary={primary}>
                      {buttonLabel}
                    </Button>{" "}
                  </ScLink>
                )}
              </TextWrapper>
            </InfoColumn>

            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
