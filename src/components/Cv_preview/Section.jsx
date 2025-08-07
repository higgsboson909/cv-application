import React from "react";
import Bullet from "./Bullet";

const Section = ({
  heading,
  value = "Input",
  br = false,
  bg = "inherit",
  marginBottom = "0px",
  wrap,
  disc
}) => {
  return (
    <div
      style={{ backgroundColor: `${bg}`, display: "inline" }}
      className="sec"
    >
      <h4
        className="title is-6 has-text-black"
        style={{ marginBottom: marginBottom }}
      >
        {heading}
      </h4>
      {br && <hr className="hr has-background-grey-light" />}
      <Bullet value={value} marginBottom={marginBottom} wrap={wrap} disc></Bullet>
    </div>
  );
};

export default Section;
