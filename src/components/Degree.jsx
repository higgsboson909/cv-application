import React from "react";
import Label from "./Label";
import InputField from "./InputField";

const Degree = () => {
  return (
    <Label label="Education">
      <div className="columns">
        <InputField label="Degree Type"></InputField>
        <InputField label="Major"></InputField>
      </div>
      <div className="columns">
        <InputField label="Graduation Date" type="number"></InputField>
        <InputField label="University Name" type="text"></InputField>
      </div>
    </Label>
  );
};
export default Degree;
