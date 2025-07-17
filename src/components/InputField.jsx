import React from "react";

const InputField = (props) => {
  return (
    <div className="column">
    <div class="field">
      <label class="label has-text-black">{props.label}</label>
      <div class="control">
        <input
          class="input"
          type={props.type}
          placeholder={props.placeholder}
        ></input>
      </div>
    </div>

    </div>
  );
};
export default InputField;
