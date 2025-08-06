import React from "react";
import DateSection from "./DateSection";
import SpecialText from "./SpecialText";
import Section from "./Section";

const EduSection = ({ data }) => {
  return (
    <>
      <div>
        <h4 className="title is-6 has-text-black">{"Education"}</h4>
        {/* break */}
        <p>
          {data.degreeType}
          <SpecialText
            bold={data.major}
            children={<DateSection gradDate={data.gradDate}></DateSection>}
          ></SpecialText>
        </p>
        <SpecialText bold={data.uniName}></SpecialText>
      </div>
      <Section heading={"Languages"} value={data.languages}></Section>
      <Section heading={"Certifications"} value={data.certificates}></Section>
    </>
  );
};
export default EduSection;
