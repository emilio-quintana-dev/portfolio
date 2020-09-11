import React from "react";
import { InfoSection } from "../../components";
import { homeObjThree } from "./Data";

function About() {
  return (
    <>
      <InfoSection {...homeObjThree} />
    </>
  );
}

export default About;
