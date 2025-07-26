import React from "react";
import Degree from "./Degree";
import GeneralComp from "./GeneralComp";
import BulletInput from "./BulletInput";

const Education = () => {
  return (
    <div>
      <Degree></Degree>
      <GeneralComp label="Languages">
        <BulletInput placeholder="English, Urdu, etc.." count={4}></BulletInput>
      </GeneralComp>
      <GeneralComp label="Certificates">
        <BulletInput placeholder="Full Stack JavaScript | The Odin Project.. etc" count={2}></BulletInput>
      </GeneralComp>
    </div>
  );
};

export default Education;
