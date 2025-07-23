import React, { useState } from "react";
import Label from "./Label";
import BulletInput from "./BulletInput";

const SkillsHighlight = () => {
  const COUNT = 7;
  const [newComp, setNewComp] = useState(1);

  let bullet = <BulletInput placeholder="Project Managment" handleClick={setNewComp} currentCount={newComp} count={COUNT}></BulletInput>;
  let bullets = [];
  for(let i = 0; i < newComp &&  newComp < COUNT; i++) {
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
