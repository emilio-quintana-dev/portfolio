import React from "react";
import { Container, Button } from "../../globalStyles";
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
} from "./Intro.elements";

const Intro = ({ buttonLabel, description, headline, topLine, img, alt }) => {
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

                <a
                  href="https://github.com/emilio-quintana-dev"
                  target="_blank"
                >
                  <Button big fontBig primary={true}>
                    {buttonLabel}
                  </Button>
                </a>
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

export default Intro;

// {isAboutMe ? (
//   <Link to="/files/emilio-resume.pdf" target="_blank" download>
//     <Button big fontBig primary={primary}>
//       {buttonLabel}
//     </Button>{" "}
//   </Link>
