import React from "react";
import Bullet from "./Bullet";

const Section = ({ heading, value = "Input", br = false }) => {
  return (
    <div>
      <h4 className="title is-6 has-text-black">{heading}</h4>
      <Bullet value={value}></Bullet>
    </div>
  );
};

export default Section;
