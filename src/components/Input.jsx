import React from "react";
import { useState } from "react";

const Input = ({ count=1, placeholder, handleClick }) => {
  const [click, setClick] = useState(false);
  return (
    <div className="field is-grouped">
      <p className="control is-expanded">
        <input className="input" type="text" placeholder={placeholder} />
      </p>
      <p className="control">
        {!click && count > 1 && (
          <button
            className="button has-background-grey-darker"
            onClick={() => {
              setClick(true);
              handleClick();
            }}
          >
            Add a Bullet
          </button>
        )}
      </p>
    </div>
  )
};

export default Input;
