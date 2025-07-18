import React from "react";
import Label from "./Label";
import InputField from "./InputField";

const Experience = () => {
  return (
    <div>
      <Label label="Experience">
        <div className="columns">
          <InputField
            type="text"
            label="Job Role"
            placeholder="e.g., Web Developer"
          ></InputField>
        </div>
        <div className="columns">
          <InputField type="month" label="Start Date"></InputField>
          <InputField type="month" label="End Date"></InputField>
        </div>
        <div className="columns">
          <InputField
            type="text"
            label="Company Name"
            placeholder="e.g., Luna Web Design"
          ></InputField>
          <InputField
            type="text"
            label="Company Location"
            placeholder="e.g., New York"
          ></InputField>
        </div>
      </Label>
    </div>
  );
};

export default Experience;
