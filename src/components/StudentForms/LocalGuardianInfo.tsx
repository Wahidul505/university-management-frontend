import { Col, Row } from "antd";
import React from "react";
import FormInput from "../forms/FormInput";
import TextArea from "../forms/TextArea";

const columnStyle = { marginTop: "10px" };

const LocalGuardianInfo = () => {
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
            name="student.localGuardian.name"
            type="text"
            label="Name"
            size="large"
          />
        </Col>
        <Col className="gutter-row" span={8} style={columnStyle}>
          <FormInput
            name="student.localGuardian.occupation"
            type="text"
            label="Occupation"
            size="large"
          />
        </Col>
        <Col className="gutter-row" span={8} style={columnStyle}>
          <FormInput
            name="student.localGuardian.contactNo"
            type="text"
            label="Contact Number"
            size="large"
          />
        </Col>
        <Col className="gutter-row" span={24} style={columnStyle}>
          <TextArea
            name="student.localGuardian.address"
            label="Address"
            size="large"
          />
        </Col>
      </Row>
    </div>
  );
};

export default LocalGuardianInfo;
