import React from "react";
import FormInput from "../component/FormInput";

const CurrentSolution = ({
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
        header="They have to"
        label="(current solutions)"
        fieldName="currentSolution"
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

export default CurrentSolution;
