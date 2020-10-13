import React from "react";
import { Container, Button } from "../../globalStyles";
import {
  IntroSection,
  Row,
  Column,
  TextWrapper,
  TopLine,
  Heading,
  Text,
  ImgWrapper,
  Img,
} from "./Intro.elements";

const Intro = ({ buttonLabel, description, headline, topLine, img, alt }) => {
  return (
    <>
      <IntroSection>
        <Container>
          <Row>
            <Column>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading>{headline}</Heading>

                <Text>{description}</Text>

                <a
                  href="https://github.com/emilio-quintana-dev"
                  target="_blank"
                >
                  <Button big fontBig primary={true}>
                    {buttonLabel}
                  </Button>
                </a>
              </TextWrapper>
            </Column>

            <Column>
              <ImgWrapper>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </Column>
          </Row>
        </Container>
      </IntroSection>
    </>
  );
};

export default Intro;
