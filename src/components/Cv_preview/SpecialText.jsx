import React from "react";

const SpecialText = ({ bold, children }) => {
  return (
    <div className="has-text-black">
      <strong className="has-text-grey-dark">{bold} </strong>
      {children}
    </div>
  );
};

export default SpecialText;
