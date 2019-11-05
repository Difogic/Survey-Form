import React from "react";
import FormInput from "../component/FormInput";

const Motivation = ({
  form,
  transition,
  questionNumber,
  onAnswerChange,
  isVisible,
  submit,
  isLastPage
}) => {
  return (
    <div className="content">
      <FormInput
        questionNumber={questionNumber}
        header="What is motivating you to do this project now?"
        fieldName="motivation"
        form={form}
        transition={transition}
        onAnswerChange={onAnswerChange}
        isVisible={isVisible}
        submit={submit}
        isLastPage={isLastPage}
      />
    </div>
  );
};

export default Motivation;
