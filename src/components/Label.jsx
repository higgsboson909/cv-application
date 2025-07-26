import React from "react";

const Label = (props) => {

  return (
    <div class="field">
      <label class="label has-text-black">{props.label}</label>
      {props.children}
      <div class="control"></div>
    </div>
  );
};

export default Label;
