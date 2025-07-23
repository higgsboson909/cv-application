import React from "react";
import Label from "./Label";

const GeneralComp = (props) => {
  return (
    <div>
      <Label label={props.label}> 
        {props.children}
      </Label>
    </div>
  );
};

export default GeneralComp;
