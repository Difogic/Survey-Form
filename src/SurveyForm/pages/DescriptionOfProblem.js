import React from "react";
import FormInput from "../component/FormInput";

const DescriptionOfProblem = ({
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
        form={form}
        header="Today, when customers/user segment want to"
        label="Give a brief description of the problem task"
        fieldName="descriptionOfProblem"
        transition={transition}
        onAnswerChange={onAnswerChange}
        isVisible={isVisible}
        submit={submit}
        isLastPage={isLastPage}
      />
    </div>
  );
};

export default DescriptionOfProblem;
