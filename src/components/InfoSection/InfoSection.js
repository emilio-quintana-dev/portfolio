import React from "react";
import { Container, Button } from "../../globalStyles";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

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
                  <Link to="/projects">
                    <Button big fontBig primary={primary}>
                      {buttonLabel}
                    </Button>{" "}
                  </Link>
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
