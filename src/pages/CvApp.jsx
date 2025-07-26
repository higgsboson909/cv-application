import React from "react";
import Header from "../components/Header";
import FormSection from "../components/FormSection";
import CvPreview from "../components/CvPreview";

const CvApp = () => {
  return (
    <div className="container">
      <div className="section">
        <div class="columns is-8">
          <div class="column">
            <FormSection></FormSection>
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
