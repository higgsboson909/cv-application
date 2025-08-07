import React from "react";
import Section from "./Section";
import Experience_Section from "./Experience_Section";

const SkillsSection = ({ data }) => {
  return (
    <>
      <Section
        heading={"Skill Highlights"}
        value={data.skillHighlights}
        br={true}
        // marginBottom="10px"
        wrap={true}
        bg="white"
        disc={true}
      ></Section>
      <Experience_Section data={data}></Experience_Section>
    </>
  );
};

export default SkillsSection;
