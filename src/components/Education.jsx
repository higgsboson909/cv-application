import React from "react";
import Degree from "./Degree";
import GeneralComp from "./GeneralComp";
import BulletInput from "./BulletInput";

const Education = () => {
  return (
    <div>
      <Degree></Degree>
        <BulletInput placeholder="English, Urdu, etc.." label="Languages" count={4}></BulletInput>
        <BulletInput label="Certificates" placeholder="Full Stack JavaScript | The Odin Project.. etc" count={2}></BulletInput>
    </div>
  );
};

export default Education;
