import React from "react";
import Tabs from "./Tabs";
import GeneralInfo from "./GeneralInfo";

const FormSection = () => {
  return (
    <div>
      <div className="input-box center box has-background-transparent">
        <Tabs></Tabs>
        <GeneralInfo></GeneralInfo>
      </div>
    </div>
  );
};

export default FormSection;
