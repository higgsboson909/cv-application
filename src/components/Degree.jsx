import React from "react";
import Label from "./Label";
import InputField from "./InputField";

const Degree = ({ data, handleChange }) => {
  return (
    <Label label="Education">
      <div className="columns">
        <InputField
          label="Degree Type"
          placeholder={"Bachelors"}
          value={data.degreeType}
          field={"degreeType"}
          handleChange={handleChange}
        ></InputField>
        <InputField
          label="Major"
          field={"major"}
          placeholder={"Computer Science"}
          value={data.major}
          handleChange={handleChange}
        >
          {" "}
        </InputField>
      </div>
      <div className="columns">
        <InputField
          field={"gradDate"}
          label="Graduation Date"
          type="number"
          value={data.gradDate}
          handleChange={handleChange}
        ></InputField>
        <InputField
          field={"uniName"}
          label="University Name"
          type="text"
          value={data.uniName}
          handleChange={handleChange}
        ></InputField>
      </div>
    </Label>
  );
};
export default Degree;
