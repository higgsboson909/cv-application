import React, { useState } from "react";

const InputField = ({
  value,
  field,
  handleChange,
  type,
  placeholder,
  label,
}) => {
  return (
    <div className="column">
      <div class="field">
        <label class="label has-text-black">{label}</label>
        <div class="control">
          <input
            class="input"
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(event) => handleChange(field, event.target.value)}
          ></input>
        </div>
      </div>
    </div>
  );
};
export default InputField;
