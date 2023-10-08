"use client";
import React, { useEffect, useState } from "react";
import { Button, message, Steps } from "antd";
import Form from "../forms/Form";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/localStorage";
import { useRouter } from "next/navigation";

type ISteps = {
  title: string;
  content: React.ReactElement | React.ReactNode;
};

type IStepsProps = {
  steps: ISteps[];
  handleSubmit: (data: any) => void;
  navigationLink: string;
  persistKey: string;
};

const StepperForm = ({
  steps,
  handleSubmit,
  navigationLink,
  persistKey,
}: IStepsProps) => {
  const [current, setCurrent] = useState<number>(
    !!getFromLocalStorage("step")
      ? Number(JSON.parse(getFromLocalStorage("step") as string).step)
      : 0
  );
  const [formValues, setFormValues] = useState(
    !!getFromLocalStorage(persistKey)
      ? JSON.parse(getFromLocalStorage(persistKey) as string)
      : {}
  );
  const router = useRouter();

  useEffect(() => {
    setToLocalStorage("step", JSON.stringify({ step: current }));
  }, [current]);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const handleFormSubmit = (data: any) => {
    handleSubmit(data);
    setToLocalStorage("step", JSON.stringify({ step: 0 }));
    navigationLink && router.push(navigationLink);
  };

  return (
    <>
      <Steps current={current} items={items} />
      <Form
        submitHandler={handleFormSubmit}
        persistKey={persistKey}
        defaultValues={formValues}
      >
        <div style={{ marginTop: "15px" }}>{steps[current].content}</div>
        <div style={{ marginTop: 24 }}>
          {current > 0 && (
            <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
              Previous
            </Button>
          )}
          {current < steps.length - 1 && (
            <Button onClick={() => next()}>Next</Button>
          )}
          {current === steps.length - 1 && (
            <Button
              htmlType="submit"
              onClick={() => message.success("Processing complete!")}
            >
              Done
            </Button>
          )}
        </div>
      </Form>
    </>
  );
};

export default StepperForm;
