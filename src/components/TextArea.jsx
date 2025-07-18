import React from "react";

const TextArea = (props) => {
  return (

      <div className=" column field">
        <label className="label has-text-black">{props.label}</label>
        <div className="control">
          <textarea className="textarea input" placeholder={props.placeholder}></textarea>
        </div>
      </div>
  );
};

export default TextArea;
