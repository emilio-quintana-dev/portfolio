import React from "react";
import { Container, Button } from "../../globalStyles";
import { Link } from "react-router-dom";
import {
  AboutSection,
  Row,
  Column,
  TextWrapper,
  TopLine,
  Heading,
  Text,
  ImgWrapper,
  Img,
} from "./About.elements";

const About = ({ buttonLabel, description, headline, topLine, img, alt }) => {
  return (
    <>
      <AboutSection>
        <Container>
          <Row>
            <Column>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading>{headline}</Heading>

                <Text>{description}</Text>

                <Link to="/files/emilio-resume.pdf" target="_blank" download>
                  <Button big fontBig primary>
                    {buttonLabel}
                  </Button>{" "}
                </Link>
              </TextWrapper>
            </Column>

            <Column>
              <ImgWrapper>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </Column>
          </Row>
        </Container>
      </AboutSection>
    </>
  );
};

export default About;

// {isAboutMe ? (
//
