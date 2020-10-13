import styled from "styled-components";
import { colors } from "../../utils/color";

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
`;

export const ProjectHeading = styled.h1`
  color: ${colors.heading};
  font-size: 48px;
  margin-bottom: 24px;
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ProjectCard = styled.div`
  background: #242424;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 250px;
  min-height: 300px;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 4px;
  &:nth-child(2) {
    margin: 24px;
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
  padding: 15px;
  align-items: center;
`;

export const ProjectTitle = styled.h3`
  font-size: 24px;
  color: ${colors.heading};
`;

export const ProjectLink = styled.a``;

export const DescriptionWrapper = styled.div`
  margin: 16px 0 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Description = styled.p`
  text-align: center;
  color: ${colors.text};
`;

export const IconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

export const Icon = styled.span`
  color: ${colors.text};
  font-size: 1.5rem;
  display: flex;
  max-width: 25px;
  margin-right: 10px;
`;

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#4B59F7" : "#32CD32")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  margin: 5px;
  min-width: 200px;

  &:hover {
    transition: all 0.3s ease-out;
    color: #fff;
    background: ${({ primary }) => (primary ? "#0467FB" : "#7CFC00")};
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
