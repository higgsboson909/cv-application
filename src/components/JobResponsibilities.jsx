import React from "react";
import Label from "./Label";
import BulletInput from "./BulletInput";

const JobResponsibilities = ({ data, handleChange }) => {
  return (
    <div>
      <BulletInput
        placeholder="Must be a Bullet"
        count={5}
        label="Job Responsibilities"
        data={data}
        field={"jobRes"}
        handleChange={handleChange}
      ></BulletInput>
    </div>
  );
};

export default JobResponsibilities;
