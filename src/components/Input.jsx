import React from "react";
import { useState } from "react";

const Input = () => {
  return (
    <div className="field is-grouped">
      <p className="control is-expanded">
        <input className="input" type="text" placeholder={placeholder} />
      </p>
    </div>
    );
};

export default Input;
