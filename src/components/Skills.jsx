import React from "react";
import SkillsHighlight from "./SkillsHighlight";
import Experience from "./Experience";
import JobResponsibilities from "./JobResponsibilities";

const Skills = ({ data, handleChange }) => {
  return (
    <>
      <SkillsHighlight
        skills={data.skillHighlights}
        handleChange={handleChange}
      ></SkillsHighlight>
      <Experience data={data} handleChange={handleChange}></Experience>
      <JobResponsibilities
        data={data}
        handleChange={handleChange}
      ></JobResponsibilities>
    </>
  );
};
export default Skills;
