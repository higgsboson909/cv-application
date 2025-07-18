import React from "react";
import InputField from "./InputField";
import TextArea from "./TextArea";

const GeneralInfo = () => {
  return (
    <div>
      <div className="columns">
        <InputField
          className="column"
          type="text"
          placeholder="John"
          label="First Name:"
        ></InputField>
        <InputField
          type="text"
          placeholder="Doe"
          label="Last Name:"
        ></InputField>
      </div>

      <div className="columns">
        <InputField
          type="email"
          placeholder="jhondoe@xyz.com"
          label="Email:"
        ></InputField>
      </div>
      <div className="columns">
        <InputField
          type="tel"
          placeholder="jhondoe@xyz.com"
          label="Phone Number:"
        ></InputField>
      </div>
      <div className="columns">
        <InputField
          type="address"
          placeholder="Park 123"
          label="Address:"
        ></InputField>
      </div>
      <div className="columns">
        <TextArea label="Summary" ></TextArea>
      </div>
    </div>
  );
};

export default GeneralInfo;
