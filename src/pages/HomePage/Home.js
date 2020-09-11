import React from "react";
import { InfoSection, Projects } from "../../components";
import { homeObjOne, homeObjTwo, homeObjThree } from "./Data";

function Home() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Projects />
    </>
  );
}

export default Home;
