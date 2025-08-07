import React from "react";

const Bullet = ({ style = true, value = "input", marginBottom, wrap=false, disc=false }) => {
  let w;
  let i;
  if (wrap) {
    w = "is-flex-wrap-wrap is-flex-direction-row";
    i = "basis";
  } else {
    w = "is-flex-direction-column";
    i = "";
  }
 
  if(disc) {
    w += " disc"
  }

  return Array.isArray(value) ? (
    <ul
      style={{ marginBottom: marginBottom }}
      className={`is-flex is-justify-content-space-between ${w} `}
    >
      {value.map((bullet) => (
        <li className={`subtitle is-6 has-text-black ${i}`}>{bullet}</li>
      ))}
    </ul>
  ) : (
    <p
      className="subtitle is-6 has-text-black"
      style={{ marginBottom: marginBottom }}
    >
      {value}
    </p>
  );
};

export default Bullet;
