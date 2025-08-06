import React from "react";

const SpecialText = ({ bold, children }) => {
  return (
    <p className="">
      <strong>{bold} </strong>
      {children}
    </p>
  );
};

export default SpecialText;
