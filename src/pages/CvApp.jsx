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

  const [skillsInfo, setSkillsInfo] = useState({
    skillHighlights: ['hi', 'oye'],
    jobRole: "",
    startDate: "",
    endDate: "",
    companyName: "",
    companyLocation: "",
    jobRes: []
  });

  const [eduInfo, setEduInfo] = useState({
    degreeType: "",
    major: "",
    gradDate: "",
    languages: [],
    certificates: [],
    uniName: "",
  });

  const handleGeneralInfoChange = (field, value) => {
    setGeneralInfo((prev) => ({ ...prev, [field]: value }));
  };

  const handleSkillsInfoChange = (field, value) => {
    setSkillsInfo(prev => ({...prev, [field]: value}))
  };

  const cvData = {
    generalInfo,
    skillsInfo,
    eduInfo,
  };

  console.log(cvData.generalInfo);
  console.log(cvData.skillsInfo);

  return (
    <div className="container">
      <div className="section">
        <div class="columns is-8">
          <div class="column">
            <FormSection
              data={cvData}
              generalInfoChange={handleGeneralInfoChange}
              skillsInfoChange={handleSkillsInfoChange}
            ></FormSection>
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
