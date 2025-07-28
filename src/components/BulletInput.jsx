import React, { useState } from "react";
import Label from "./Label";
import Input from "./Input";

const BulletInput = ({ placeholder, label, count = 1 }) => {
  const [bulletInputs, setBulletInputs] = useState([""]);

  const handleClick = () => {
    bulletInputs.length < count && setBulletInputs((prev) => [...prev, ""]);
  };

  const handleChange = (index, value) => {
    setBulletInputs((prev) => {
      let array = [...prev];
      array[index] = value;
      return array;
    });
  };
  console.log(bulletInputs);
  return (
    <div className="bullet-input">
      <div className="field is-grouped">
        <label className="label has-text-black is-expanded">{label}</label>
        <p className="control">
          <button class="button is-small" onClick={handleClick}>
            Add
          </button>
        </p>
      </div>
      {bulletInputs.map((bInput, i) => (
        <div className="field is-grouped">
          <p className="control is-expanded">
            <input
              className="input"
              type="text"
              placeholder={placeholder}
              value={bInput}
              onChange={(event) => handleChange(i, event.target.value)}
            />
          </p>
        </div>
      ))}
      {/* <div className="field is-grouped">
        <p className="control is-expanded">
          <input className="input" type="text" placeholder={placeholder} />
        </p>
      </div> */}
      {/* <Input placeholder={placeholder}></Input> */}
    </div>
  );
};

export default BulletInput;
