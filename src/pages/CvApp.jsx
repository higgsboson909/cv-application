import React, { useState } from "react";
import Header from "../components/Header";
import FormSection from "../components/FormSection";
import CvPreview from "../components/CvPreview";

const CvApp = () => {
  const [generalInfo, setGeneralInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    summary: "",
  });
  console.log(generalInfo);
  const handleGeneralInfoChange = (field, value) => {
    setGeneralInfo((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="container">
      <div className="section">
        <div class="columns is-8">
          <div class="column">
            <FormSection generalInfo={generalInfo} generalInfoChange={handleGeneralInfoChange}></FormSection>
          </div>
          <div class="column">
            <CvPreview></CvPreview>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CvApp;
