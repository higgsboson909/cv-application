import React from "react";

const DateSection = ({ startDate, endDate, gradDate }) => {
  return startDate && endDate ? (
    <span>
      {" - " + startDate} to {endDate}
    </span>
  ) : (
    <span> - { gradDate }</span>
  );
};

export default DateSection;
