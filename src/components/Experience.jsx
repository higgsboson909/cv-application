import React from "react";
import Label from "./Label";
import InputField from "./InputField";

const Experience = ({ data, handleChange }) => {
  return (
    <div>
      <Label label="Experience">
        <div className="columns">
          <InputField
            type="text"
            label="Job Role"
            placeholder="e.g., Web Developer"
            field={"jobRole"}
            value={data.jobRole}
            handleChange={handleChange}
          ></InputField>
        </div>
        <div className="columns">
          <InputField
            type="month"
            label="Start Date"
            field={"startDate"}
            value={data.startDate}
            handleChange={handleChange}
          ></InputField>
          <InputField
            type="month"
            label="End Date"
            field={"endDate"}
            value={data.endDate}
            handleChange={handleChange}
          ></InputField>
        </div>
        <div className="columns">
          <InputField
            type="text"
            label="Company Name"
            placeholder="e.g., Luna Web Design"
            field={"companyName"}
            value={data.companyName}
            handleChange={handleChange}
          ></InputField>
          <InputField
            type="text"
            label="Company Location"
            value={data.companyLocation}
            field={"companyLocation"}
            handleChange={handleChange}
            placeholder="e.g., New York"
          ></InputField>
        </div>
      </Label>
    </div>
  );
};

export default Experience;
