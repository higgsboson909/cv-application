import React from "react";
import Degree from "./Degree";
import GeneralComp from "./GeneralComp";
import BulletInput from "./BulletInput";

const Education = ({ data, handleChange }) => {
  return (
    <div>
      <Degree data={data} handleChange={handleChange}></Degree>
      <BulletInput
        placeholder="English, Urdu, etc.."
        label="Languages"
        data={data.languages}
        handleChange={handleChange}
        count={4}
        field={"languages"}
      ></BulletInput>
      <BulletInput
        label="Certificates"
        data={data.certificates}
        handleChange={handleChange}
        placeholder="Full Stack JavaScript | The Odin Project.. etc"
        field={"certificates"}
        count={2}
      ></BulletInput>
    </div>
  );
};

export default Education;
