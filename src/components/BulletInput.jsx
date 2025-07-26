import React, { useState } from "react";
import Label from "./Label";
import Input from "./Input";

const BulletInput = ({ placeholder, label, count=1 }) => {

  const [newComp, setNewComp] = useState(1);

  let bullets = [];
  for (let i = 0; i < newComp && i < count; i++) {
    let bullet = (
      <Input
        placeholder={placeholder}
        handleClick={() => setNewComp((prev) => prev + 1)}
        count={count}
        key={i}
      ></Input>
    )
    bullets.push(bullet)
  }

  return (
    <>
      <label className="label has-text-black">
        {label}
      </label>
      {bullets}
    </>
  );
};

export default BulletInput;
