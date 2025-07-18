import React from "react";

const BulletInput = () => {
  return (
    <div className="field is-grouped">
      <p className="control is-expanded">
        <input className="input" type="text" placeholder="Must be a bullet" />
      </p>
      <p className="control">
        <button className="button has-background-grey-darker">Add a Bullet</button>
      </p>
    </div>
  );
};

export default BulletInput;
