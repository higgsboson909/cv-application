import React from "react";
import InputField from "./InputField";
import TextArea from "./TextArea";

const GeneralInfo = ({ data, handleChange }) => {
  return (
    <div>
      <div className="columns">
        <InputField
          className="column"
          type="text"
          placeholder="John"
          label="First Name:"
          field="firstName"
          value={data.firstName}
          handleChange={handleChange}
        ></InputField>
        <InputField
          type="text"
          placeholder="Doe"
          label="Last Name:"
          field="lastName"
          value={data.lastName}
          handleChange={handleChange}
        ></InputField>
      </div>

      <div className="columns">
        <InputField
          type="email"
          placeholder="jhondoe@xyz.com"
          label="Email:"
          field="email"
          value={data.email}
          handleChange={handleChange}
        ></InputField>
      </div>
      <div className="columns">
        <InputField
          type="tel"
          placeholder="jhondoe@xyz.com"
          label="Phone Number:"
          field="phone"
          value={data.phone}
          handleChange={handleChange}
        ></InputField>
      </div>
      <div className="columns">
        <InputField
          type="address"
          placeholder="Park 123"
          label="Address:"
          field="address"
          value={data.address}
          handleChange={handleChange}
        ></InputField>
      </div>
      <div className="columns">
        <TextArea
          label="Summary"
          field="summary"
          value={data.summary}
          handleChange={handleChange}
        ></TextArea>
      </div>
    </div>
  );
};

export default GeneralInfo;
