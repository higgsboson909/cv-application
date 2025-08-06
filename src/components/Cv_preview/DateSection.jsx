import React from "react";

const DateSection = ({ startDate, endDate, gradDate }) => {
  return startDate && endDate ? (
    <div>
      {" - " + startDate} to {endDate}
    </div>
  ) : (
    <div> - { gradDate }</div>
  );
};

export default DateSection;
