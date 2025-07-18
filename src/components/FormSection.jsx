import React from "react";
import { useState } from "react";
import Tabs from "./Tabs";
import GeneralInfo from "./GeneralInfo";

const FormSection = () => {
  const [tab, setTab] = useState('1');

  return (
    <div>
      <div className="input-box center box has-background-transparent">
        <Tabs handleClick={setTab} currentTab={tab}></Tabs>
        {tab == '1' ? (
          <GeneralInfo></GeneralInfo>
        ) : tab == '2' ? (
          console.log(2)
        ) : (
          console.log(3)
        )}
      </div>
    </div>
  );
};

export default FormSection;
