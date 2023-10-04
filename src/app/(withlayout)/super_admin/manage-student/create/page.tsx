"use client";
import StepperForm from "@/components/StepperForm/StepperForm";
import BasicStudentInfo from "@/components/StudentForms/BasicStudentInfo";
import GuardianInfo from "@/components/StudentForms/GuardianInfo";
import LocalGuardianInfo from "@/components/StudentForms/LocalGuardianInfo";
import StudentInfo from "@/components/StudentForms/StudentInfo";
import React from "react";

const CreateStudentPage = () => {
  const handleSubmit = (data: any) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const steps = [
    {
      title: "Student Information",
      content: <StudentInfo />,
    },
    {
      title: "Basic Information",
      content: <BasicStudentInfo />,
    },
    {
      title: "Guardian Information",
      content: <GuardianInfo />,
    },
    {
      title: "Local Guardian Information",
      content: <LocalGuardianInfo />,
    },
  ];
  return (
    <div>
      <h1 style={{ marginBottom: "10px", fontSize: "24px", fontWeight: "600" }}>
        Create Student Account
      </h1>
      <div>
        <StepperForm
          steps={steps}
          handleSubmit={handleSubmit}
          navigationLink="/"
        />
      </div>
    </div>
  );
};

export default CreateStudentPage;
