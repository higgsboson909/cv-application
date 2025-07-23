import React, { useState } from "react";
import Label from "./Label";
import BulletInput from "./BulletInput";

const SkillsHighlight = () => {
  const [newComp, setNewComp] = useState(1);

  let bullet = <BulletInput placeholder="Project Managment" handleClick={setNewComp} count={newComp}></BulletInput>;
  let bullets = [];
  for(let i = 0; i < newComp &&  newComp < 6; i++) {
    bullets.push(bullet);
  }

  return (
    <div>
      <Label label="Skills Highlight">
        {bullets.map(bullet => bullet)}
        {/* <BulletInput placeholder="Project Managment" handleClick={setNewComp}></BulletInput> */}
        {/* {newComp && bullet} */}
      </Label>
    </div>
  );
};
export default SkillsHighlight;
