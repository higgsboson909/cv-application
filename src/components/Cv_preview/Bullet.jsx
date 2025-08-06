import React from "react";

const Bullet = ({ style = true, value="input" }) => {
return  Array.isArray(value) ? (
    <ul>
      {value.map((bullet) => (
        <li className="subtitle is-6 has-text-black">{bullet}</li>
      ))}
    </ul>
  ) : (
    <p className="subtitle is-6 has-text-black">{value}</p>
  );
};

export default Bullet;
