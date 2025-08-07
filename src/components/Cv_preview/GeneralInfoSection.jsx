import React from "react";
import CvTitle from "./CvTitle";
import Section from "./Section";

const GeneralInfoSection = ({ data }) => {
  const title = data.firstName + " " + data.lastName;

  return (
    <>
      <div className="cv-top columns blue-section cv-preview has-background-info-light has-text-black">

        <CvTitle title={title}></CvTitle>
        <div className="column">
          <Section heading={"Address"} value={data.address}></Section>
          <Section heading={"Phone"} value={data.phone}></Section>
          <Section heading={"Email"} value={data.email}></Section>
        </div>
      </div>
    <div>
      <Section bg={"white"} heading={"Summary"} br={true} value={data.summary} marginBottom="10px"></Section>
    </div>
    </>
  );
};

export default GeneralInfoSection;
