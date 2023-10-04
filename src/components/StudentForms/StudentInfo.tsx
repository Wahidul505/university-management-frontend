import { Col, Row } from "antd";
import React from "react";
import FormInput from "../forms/FormInput";
import SelectFormInput from "../forms/SelectFormInput";
import {
  academicDepartmentInputs,
  academicFacultyInputs,
  academicSemesterInputs,
  genderInputs,
} from "@/constants/global";
import ImageUploader from "../ui/ImageUploader";

const columnStyle = { marginTop: "10px" };

const StudentInfo = () => {
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
        <Col className="gutter-row" span={6} style={columnStyle}>
          <FormInput
            name="student.name.firstName"
            type="text"
            label="First Name"
            size="large"
          />
        </Col>
        <Col className="gutter-row" span={6} style={columnStyle}>
          <FormInput
            name="student.name.middleName"
            type="text"
            label="Middle Name"
            size="large"
          />
        </Col>
        <Col className="gutter-row" span={6} style={columnStyle}>
          <FormInput
            name="student.name.lastName"
            type="text"
            label="Last Name"
            size="large"
          />
        </Col>
        <Col className="gutter-row" span={6} style={columnStyle}>
          <FormInput
            name="password"
            type="password"
            label="Password"
            size="large"
          />
        </Col>
        <Col className="gutter-row" span={12} style={columnStyle}>
          <SelectFormInput
            name="student.academicDepartment"
            options={academicDepartmentInputs}
            size="large"
            placeholder="Select"
            label="Academic Department"
          />
        </Col>
        <Col className="gutter-row" span={12} style={columnStyle}>
          <SelectFormInput
            name="student.academicFaculty"
            options={academicFacultyInputs}
            size="large"
            placeholder="Select"
            label="Academic Faculty"
          />
        </Col>
        <Col className="gutter-row" span={12} style={columnStyle}>
          <SelectFormInput
            name="student.academicSemester"
            options={academicSemesterInputs}
            size="large"
            placeholder="Select"
            label="Academic Semester"
          />
        </Col>
        <Col className="gutter-row" span={12} style={columnStyle}>
          <SelectFormInput
            name="student.gender"
            options={genderInputs}
            size="large"
            placeholder="Select"
            label="Gender"
          />
        </Col>
        <Col className="gutter-row" span={24} style={columnStyle}>
          <ImageUploader />
        </Col>
      </Row>
    </div>
  );
};

export default StudentInfo;
