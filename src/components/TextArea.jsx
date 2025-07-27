import React from "react";

const TextArea = ({label, placeholder, field, value, handleChange}) => {
  return (

      <div className=" column field">
        <label className="label has-text-black">{label}</label>
        <div className="control">
          <textarea className="textarea input" placeholder={placeholder}
          value={value}
          onChange={event => (handleChange(field, event.target.value))}></textarea>
        </div>
      </div>
  );
};

export default TextArea;
