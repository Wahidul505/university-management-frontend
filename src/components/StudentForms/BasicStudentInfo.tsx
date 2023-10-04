import { Col, Row } from "antd";
import React from "react";
import FormInput from "../forms/FormInput";
import FormDatePicker from "../forms/FormDatePicker";
import SelectFormInput from "../forms/SelectFormInput";
import { bloodGroupInputs } from "@/constants/global";
import TextArea from "../forms/TextArea";

const columnStyle = { marginTop: "10px" };

const BasicStudentInfo = () => {
  return (
    <div
      style={{
        border: "2px solid lightgray",
        borderRadius: "5px",
        margin: "0px auto",
        width: "100%",
        padding: "10px",
        marginBottom: "15px",
      }}
    >
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={8} style={columnStyle}>
          <FormInput
            name="student.email"
            type="email"
            label="Email"
            size="large"
          />
        </Col>
        <Col className="gutter-row" span={8} style={columnStyle}>
          <FormInput
            name="student.contactNo"
            type="text"
            label="Contact Number"
            size="large"
          />
        </Col>
        <Col className="gutter-row" span={8} style={columnStyle}>
          <FormInput
            name="student.emergencyContactNo"
            type="text"
            label="Emergency Contact Number"
            size="large"
          />
        </Col>
        <Col className="gutter-row" span={12} style={columnStyle}>
          <FormDatePicker
            name="student.dateOfBirth"
            size="large"
            label="Date of Birth"
          />
        </Col>
        <Col className="gutter-row" span={12} style={columnStyle}>
          <SelectFormInput
            name="student.bloodGroup"
            options={bloodGroupInputs}
            size="large"
            placeholder="Select"
            label="Blood Group"
          />
        </Col>
        <Col className="gutter-row" span={12} style={columnStyle}>
          <TextArea
            name="student.presentAddress"
            label="Present Address"
            size="large"
          />
        </Col>
        <Col className="gutter-row" span={12} style={columnStyle}>
          <TextArea
            name="student.permanentAddress"
            label="Permanent Address"
            size="large"
          />
        </Col>
      </Row>
    </div>
  );
};

export default BasicStudentInfo;
