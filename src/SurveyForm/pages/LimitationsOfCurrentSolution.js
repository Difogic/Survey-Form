import React from "react";
import FormInput from "../component/FormInput";

const LimitationsOfCurrentSolution = ({
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
        header="This is unacceptable, because"
        label="(limitations of current solution)"
        fieldName="limitationsOfCurrentSolution"
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

export default LimitationsOfCurrentSolution;
