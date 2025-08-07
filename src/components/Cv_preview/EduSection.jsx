import React from "react";
import DateSection from "./DateSection";
import SpecialText from "./SpecialText";
import Section from "./Section";

const EduSection = ({ data }) => {
  return (
    <>
      <div>
        <h4 className="title is-6 has-text-black" style={{marginBottom:"10px"}}>{"Education"} </h4>
        <hr className="hr has-background-grey-light" />
        <p>
          {data.degreeType}
          <SpecialText
            bold={data.major}
            children={<DateSection gradDate={data.gradDate}></DateSection>}
          ></SpecialText>
        </p>
        <SpecialText bold={data.uniName}></SpecialText>
      </div>
      <Section heading={"Languages"} value={data.languages} br={true} marginBottom="10px" wrap={true} ></Section>
      <Section heading={"Certifications"} value={data.certificates} br={true} marginBottom="10px" disc={false}></Section>
    </>
  );
};
export default EduSection;
