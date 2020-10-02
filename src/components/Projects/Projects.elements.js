import styled from "styled-components";

export const ProjectSection = styled.div`
  padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #101522;
`;

export const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ProjectHeading = styled.h1`
  color: #fff;
  font-size: 48px;
  margin-bottom: 24px;
`;

export const ProjectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const ProjectCard = styled.div`
  background: #242424;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 280px;
  height: 500px;
  text-decoration: none;
  border-radius: 4px;
  &:nth-child(2) {
    margin: 10px;
  }
  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }
  @media screen and (max-width: 960px) {
    width: 90%;
    &:hover {
      transform: none;
    }
  }
`;

export const ProjectCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 24px;
  align-items: center;
  color: #fff;
`;

export const ProjectCardIcon = styled.div`
  margin: 24px 0;
`;

export const ProjectCardPlan = styled.h3`
  margin-bottom: 5px;
  font-size: 24px;
`;

export const ProjectCardCost = styled.h4`
  font-size: 40px;
`;

export const ProjectCardLength = styled.p`
  font-size: 14px;
  margin-bottom: 24px;
`;

export const ProjectCardFeatures = styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;

  color: #a9b3c1;
`;

export const ProjectCardFeature = styled.li`
  margin-bottom: 10px;
  text-align: center;
`;

export const IconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Icon = styled.span`
  display: flex;
  max-width: 25px;
  margin-right: 5px;
`;

export const ProjectLink = styled.a`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#4B59F7" : "#0467FB")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  text-align: center;

  &:hover {
    transition: all 0.3s ease-out;
    color: #fff;
    background: ${({ primary }) => (primary ? "#0467FB" : "#4B59F7")};
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
