"use client";
import Form from "@/components/forms/Form";
import FormDatePicker from "@/components/forms/FormDatePicker";
import FormInput from "@/components/forms/FormInput";
import SelectFormInput from "@/components/forms/SelectFormInput";
import TextArea from "@/components/forms/TextArea";
import ImageUploader from "@/components/ui/ImageUploader";
import {
  academicDepartmentInputs,
  academicFacultyInputs,
  bloodGroupInputs,
  genderInputs,
} from "@/constants/global";
import { facultySchema } from "@/schema/faculty";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row } from "antd";
import React from "react";

const columnStyle = { marginTop: "10px" };

const CreateFacultyPage = () => {
  const handleSubmit = (data: any) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h1 style={{ marginBottom: "10px", fontSize: "24px", fontWeight: "600" }}>
        Create Faculty Account
      </h1>
      <div>
        <Form
          submitHandler={handleSubmit}
          resolver={yupResolver(facultySchema)}
        >
          {/* Faculty info  */}
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
            <h1 style={{ fontSize: "20px", color: "gray" }}>Faculty Info</h1>
            <hr />
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" span={8} style={columnStyle}>
                <FormInput
                  name="faculty.name.firstName"
                  type="text"
                  label="First Name"
                  size="large"
                />
              </Col>
              <Col className="gutter-row" span={8} style={columnStyle}>
                <FormInput
                  name="faculty.name.middleName"
                  type="text"
                  label="Middle Name"
                  size="large"
                />
              </Col>
              <Col className="gutter-row" span={8} style={columnStyle}>
                <FormInput
                  name="faculty.name.lastName"
                  type="text"
                  label="Last Name"
                  size="large"
                />
              </Col>
              <Col className="gutter-row" span={8} style={columnStyle}>
                <FormInput
                  name="password"
                  type="password"
                  label="Password"
                  size="large"
                />
              </Col>
              <Col className="gutter-row" span={8} style={columnStyle}>
                <SelectFormInput
                  name="faculty.gender"
                  options={genderInputs}
                  size="large"
                  placeholder="Select"
                  label="Gender"
                />
              </Col>
              <Col className="gutter-row" span={8} style={columnStyle}>
                <SelectFormInput
                  name="faculty.academicFaculty"
                  options={academicFacultyInputs}
                  size="large"
                  placeholder="Select"
                  label="Academic Faculty"
                />
              </Col>
              <Col className="gutter-row" span={8} style={columnStyle}>
                <SelectFormInput
                  name="faculty.academicDepartment"
                  options={academicDepartmentInputs}
                  size="large"
                  placeholder="Select"
                  label="Academic Department"
                />
              </Col>
              <Col className="gutter-row" span={8} style={columnStyle}>
                <ImageUploader />
              </Col>
            </Row>
          </div>
          {/* Basic info  */}
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
            <h1 style={{ fontSize: "20px", color: "gray" }}>Basic Info</h1>
            <hr />
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" span={8} style={columnStyle}>
                <FormInput
                  name="faculty.email"
                  type="email"
                  label="Email"
                  size="large"
                />
              </Col>
              <Col className="gutter-row" span={8} style={columnStyle}>
                <FormInput
                  name="faculty.contactNo"
                  type="text"
                  label="Contact Number"
                  size="large"
                />
              </Col>
              <Col className="gutter-row" span={8} style={columnStyle}>
                <FormInput
                  name="faculty.emergencyContactNo"
                  type="text"
                  label="Emergency Contact Number"
                  size="large"
                />
              </Col>
              <Col className="gutter-row" span={8} style={columnStyle}>
                <FormDatePicker
                  name="faculty.dateOfBirth"
                  size="large"
                  label="Date of Birth"
                />
              </Col>
              <Col className="gutter-row" span={8} style={columnStyle}>
                <SelectFormInput
                  name="faculty.bloodGroup"
                  options={bloodGroupInputs}
                  size="large"
                  placeholder="Select"
                  label="Blood Group"
                />
              </Col>
              <Col className="gutter-row" span={8} style={columnStyle}>
                <FormInput
                  name="faculty.designation"
                  type="text"
                  label="Designation"
                  size="large"
                />
              </Col>
              <Col className="gutter-row" span={12} style={columnStyle}>
                <TextArea
                  name="faculty.presentAddress"
                  label="Present Address"
                  size="large"
                />
              </Col>
              <Col className="gutter-row" span={12} style={columnStyle}>
                <TextArea
                  name="faculty.permanentAddress"
                  label="Permanent Address"
                  size="large"
                />
              </Col>
            </Row>
          </div>
          <Button htmlType="submit">Create Faculty Account</Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateFacultyPage;
