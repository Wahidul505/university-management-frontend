import { Col, Row } from "antd";
import React from "react";
import FormInput from "../forms/FormInput";
import TextArea from "../forms/TextArea";

const columnStyle = { marginTop: "10px" };

const GuardianInfo = () => {
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
            name="student.guardian.fatherName"
            type="text"
            label="Father Name"
            size="large"
          />
        </Col>
        <Col className="gutter-row" span={8} style={columnStyle}>
          <FormInput
            name="student.guardian.fatherOccupation"
            type="text"
            label="Father Occupation"
            size="large"
          />
        </Col>
        <Col className="gutter-row" span={8} style={columnStyle}>
          <FormInput
            name="student.guardian.fatherContactNo"
            type="text"
            label="Father Contact Number"
            size="large"
          />
        </Col>
        <Col className="gutter-row" span={8} style={columnStyle}>
          <FormInput
            name="student.guardian.motherName"
            type="text"
            label="Mother Name"
            size="large"
          />
        </Col>
        <Col className="gutter-row" span={8} style={columnStyle}>
          <FormInput
            name="student.guardian.motherOccupation"
            type="text"
            label="Mother Occupation"
            size="large"
          />
        </Col>
        <Col className="gutter-row" span={8} style={columnStyle}>
          <FormInput
            name="student.guardian.motherContactNo"
            type="text"
            label="Mother Contact Number"
            size="large"
          />
        </Col>
        <Col className="gutter-row" span={24} style={columnStyle}>
          <TextArea
            name="student.guardian.address"
            label="Address"
            size="large"
          />
        </Col>
      </Row>
    </div>
  );
};

export default GuardianInfo;
