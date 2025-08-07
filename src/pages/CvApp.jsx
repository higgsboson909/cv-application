import React, { useState } from "react";
import Header from "../components/Header";
import FormSection from "../components/FormSection";
import CvPreview from "../components/Cv_preview/CvPreview";

const CvApp = () => {
  const [generalInfo, setGeneralInfo] = useState({
    firstName: "Jhon",
    lastName: "Doe",
    email: "jhonDoe@xyz.com",
    phone: "80090030012",
    address: "Park 123 - XYZ",
    summary:
      "Senior Web Developer specializing in front end development. Experienced with all stages of the development cycle for dynamic web projects. Well-versed in numerous programming languages including HTML5, PHP, OOP, JavaScript, CSS, MySQL. Strong background in project management and customer relations.",
  });

  const [skillsInfo, setSkillsInfo] = useState({
    skillHighlights: ["Project Managment"],
    jobRole: "Web Developer",
    startDate: "2024-04",
    endDate: "2025-02",
    companyName: "Luna Web Design",
    companyLocation: "New York",
    jobRes: [
      "Cooperate with designers to create clean interfaces and simple, intuitive interactions and experiences.",
    ],
  });

  const [eduInfo, setEduInfo] = useState({
    degreeType: "Bachelors",
    major: "Computer Information Systems",
    gradDate: "2023",
    languages: ["English"],
    certificates: ["PHP Framework (certificate): Zend, CodeIgniter, Symfony."],
    uniName: "Columbia University, NY",
  });

  const handleGeneralInfoChange = (field, value) => {
    setGeneralInfo((prev) => ({ ...prev, [field]: value }));
  };

  const handleSkillsInfoChange = (field, value) => {
    setSkillsInfo((prev) => ({ ...prev, [field]: value }));
  };

  const handleEduInfoChange = (field, value) => {
    setEduInfo((prev) => ({ ...prev, [field]: value }));
  };

  const cvData = {
    generalInfo,
    skillsInfo,
    eduInfo,
  };

  console.log(cvData.generalInfo);
  console.log(cvData.skillsInfo);
  console.log(cvData.eduInfo);

  return (
    <div className="container">
      <div className="section">
        <div class="columns is-8">
          <div class="column">
            <FormSection
              data={cvData}
              generalInfoChange={handleGeneralInfoChange}
              skillsInfoChange={handleSkillsInfoChange}
              eduInfoChange={handleEduInfoChange}
            ></FormSection>
          </div>
          <div class="cvPreview column">
            <CvPreview data={cvData}></CvPreview>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CvApp;
