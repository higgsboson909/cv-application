import React from "react";
import Bullet from "./Bullet";
import SpecialText from "./SpecialText";
import DateSection from "./DateSection";

const Experience_Section = ({ data }) => {
  return (
    <>
      <h4 className="title is-6 has-text-black">{"Experience"}</h4>
      <SpecialText
        bold={data.jobRole}
        children={
          <DateSection
            startDate={data.startDate}
            endDate={data.endDate}
          ></DateSection>
        }
      ></SpecialText>
      <SpecialText
        bold={data.companyName}
        children={<p>{"," + data.companyLocation}</p>}
      ></SpecialText>
      <Bullet value={data.jobRes}></Bullet>
    </>
  );
};

export default Experience_Section;
