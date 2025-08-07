import React from "react";
import Bullet from "./Bullet";
import SpecialText from "./SpecialText";
import DateSection from "./DateSection";

const Experience_Section = ({ data }) => {
  return (
    <>
      <h4 className="title is-6 has-text-black" style={{marginBottom:"10px"}}>{"Experience"}</h4>
      <hr className="hr has-background-grey-light" />
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
        bold={data.companyName + ", "}
        children={<span>{data.companyLocation}</span>}
      ></SpecialText>
      <Bullet value={data.jobRes} marginBottom={"10px"} wrap={false}></Bullet>
    </>
  );
};

export default Experience_Section;
