import React, { useState } from "react";
import Label from "./Label";
import BulletInput from "./BulletInput";

const SkillsHighlight = () => {

const [newComp, setNewComp] = useState(1);

  return (
    <div className="block">
      <BulletInput
        label="Skills Highlight"
        placeholder="Project Management"
        count={6}
      ></BulletInput>
    </div>
  );
};
export default SkillsHighlight;
