import React from "react";
import { Container, Button } from "../../globalStyles";
import { Link } from "react-router-dom";
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
} from "./About.elements";

const About = ({ buttonLabel, description, headline, topLine, img, alt }) => {
  return (
    <>
      <InfoSec>
        <Container>
          <InfoRow>
            <InfoColumn>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading>{headline}</Heading>

                <Subtitle>{description}</Subtitle>

                <Link to="/files/emilio-resume.pdf" target="_blank" download>
                  <Button big fontBig primary={false}>
                    {buttonLabel}
                  </Button>{" "}
                </Link>
              </TextWrapper>
            </InfoColumn>

            <InfoColumn>
              <ImgWrapper>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default About;

// {isAboutMe ? (
//
