"use client";
import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import FormYearPicker from "@/components/forms/FormYearPicker";
import SelectFormInput from "@/components/forms/SelectFormInput";
import { academicSemesterTitleInputs, monthInputs } from "@/constants/global";
import { useAddAcademicSemesterMutation } from "@/redux/api/academic/semesterApi";
import { Button, message } from "antd";
import React from "react";

const CreateAcademicSemesterPage = () => {
  const [addAcademicSemester] = useAddAcademicSemesterMutation();
  const handleSubmit = async (data: any) => {
    if (data?.title === "Autumn") data.code = "01";
    else if (data?.title === "Summer") data.code = "02";
    else data.code = "03";
    data["year"] = Number(data?.year);
    try {
      message.loading("Creating Academic Semester...");
      await addAcademicSemester(data);
      message.success("Academic Semester Created");
    } catch (error: any) {
      message.error(error?.message);
    }
  };
  return (
    <div>
      <h1 style={{ marginBottom: "10px", fontSize: "24px", fontWeight: "600" }}>
        Create Academic Semester
      </h1>
      <div>
        <Form submitHandler={handleSubmit}>
          <SelectFormInput
            name="title"
            options={academicSemesterTitleInputs}
            size="large"
            placeholder="Select"
            label="Title"
          />
          <SelectFormInput
            name="startMonth"
            options={monthInputs}
            size="large"
            placeholder="Select"
            label="Start Month"
          />
          <SelectFormInput
            name="endMonth"
            options={monthInputs}
            size="large"
            placeholder="Select"
            label="End Month"
          />
          <FormYearPicker name="year" label="Year" />
          <Button
            htmlType="submit"
            style={{ marginTop: "15px", display: "block" }}
          >
            Create Academic Semester
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateAcademicSemesterPage;
