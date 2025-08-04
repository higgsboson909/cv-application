import React, { useState } from "react";
import Label from "./Label";
import BulletInput from "./BulletInput";

const SkillsHighlight = ({skills, handleChange}) => {
console.log('skills', skills);
  return (
    <div className="block">
      <BulletInput
        label="Skills Highlight"
        placeholder="Project Management"
        count={6}
        data={skills}
        field={'skillHighlights'} 
        handleChange={handleChange}
      ></BulletInput>
    </div>
  );
};
export default SkillsHighlight;
