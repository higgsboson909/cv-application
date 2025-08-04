import React, { useState } from "react";
import Label from "./Label";
import Input from "./Input";

const BulletInput = ({ placeholder, handleChange, label, count = 1, data }) => {
  console.log("data", typeof data);
  const [bulletInputs, setBulletInputs] = useState(data);

  const handleClick = () => {
    bulletInputs.length < count && setBulletInputs((prev) => [...prev, ""]);
  };

  const handleInputChange = (index, value) => {
    setBulletInputs((prev) => {
      let array = [...prev];
      array[index] = value;
      handleChange("skillHighlights", array);
      return array;
    });
  };
  console.log("bullet inputs", bulletInputs);
  console.log("hey", bulletInputs);
  console.log("data", data);

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
      {Array.isArray(bulletInputs) &&
        bulletInputs.map((bInput, i) => (
          <div className="field is-grouped">
            <p className="control is-expanded">
              <input
                className="input"
                type="text"
                placeholder={placeholder}
                value={bInput}
                onChange={(event) => {
                  handleInputChange(i, event.target.value);
                }}
              />
            </p>
          </div>
        ))}
    </div>
  );
};

export default BulletInput;
