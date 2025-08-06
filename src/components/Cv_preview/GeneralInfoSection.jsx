import React from "react";
import CvTitle from "./CvTitle";
import Section from "./Section";

const GeneralInfoSection = ({ data }) => {
  const title = data.firstName + " " + data.lastName;

  return <>
    <div className="blue-section cv-preview has-background-white has-text-black">
      <CvTitle title={title}></CvTitle>
      <Section heading={"Address"} value={data.address}></Section>
      <Section heading={"Phone"} value={data.phone}></Section>
      <Section heading={"Email"} value={data.email}></Section>
    </div>

    <Section heading={"Summary"} br={true} value={data.summary}></Section>
  </>
};

export default GeneralInfoSection;
