import GeneralInfoSection from "./GeneralInfoSection";
import SkillsSection from "./SkillsSection";
import EduSection from "./EduSection";

const CvPreview = ({ data }) => {
  const { generalInfo, skillsInfo, eduInfo } = data;

  return (
    <>
      <GeneralInfoSection data={generalInfo}></GeneralInfoSection>
      <SkillsSection data={skillsInfo}></SkillsSection>
      <EduSection data={eduInfo}></EduSection>
    </>
  );
};

export default CvPreview;
