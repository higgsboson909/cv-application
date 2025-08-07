import React from "react";

const CvTitle = ({ title }) => {
  return (
    <div className="cv-title column  is-size-1 has-text-weight-semibold is-three-fifths section has-background-info-light">{title}</div>
  );
};

export default CvTitle;
