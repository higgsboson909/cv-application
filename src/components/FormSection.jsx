import React from "react";
import { useState } from "react";
import Tabs from "./Tabs";
import GeneralInfo from "./GeneralInfo";
import Skills from "./Skills";
import Education from "./Education";

const FormSection = ({ data, generalInfoChange, skillsInfoChange }) => {
  const [tab, setTab] = useState("1");
  return (
    <div>
      <div className="input-box box has-background-transparent">
        <Tabs handleClick={setTab} currentTab={tab}></Tabs>
        {tab == "1" ? (
          <GeneralInfo
            data={data.generalInfo}
            handleChange={generalInfoChange}
          ></GeneralInfo>
        ) : tab == "2" ? (
          <Skills
            data={data.skillsInfo}
            handleChange={skillsInfoChange}
          ></Skills>
        ) : (
          <Education></Education>
        )}
      </div>
    </div>
  );
};

export default FormSection;
