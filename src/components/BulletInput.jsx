import React, { useState } from "react";

const BulletInput = (props) => {
  const [click, setClick] = useState(false);

  return (
    <div className="field is-grouped">
      <p className="control is-expanded">
        <input className="input" type="text" placeholder={props.placeholder} />
      </p>
      <p className="control">
        {!click && (
          <button
            className="button has-background-grey-darker"
            onClick={() => {
              setClick(true);
              props.currentCount < props.count - 1 && props.handleClick(() => {return props.currentCount + 1});
            }}
          >
            Add a Bullet
          </button>
        )}
      </p>
    </div>
  );
};

export default BulletInput;
