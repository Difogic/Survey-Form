import React from "react";
import OptionalItem from "../component/OptionalItem";

const Solution = ({
  form,
  transition,
  questionNumber,
  onAnswerChange,
  submit,
  isLastPage
}) => {
  return (
    <div className="content">
      <OptionalItem
        questionNumber={questionNumber}
        header={
          form.getFieldValue("currentSolution")
            ? form.getFieldValue("currentSolution")
            : "_____"
        }
        label="Do you have the solution to the problem already defined?"
        values={["Yes", "No"]}
        fieldName="solution"
        form={form}
        transition={transition}
        onAnswerChange={onAnswerChange}
        submit={submit}
        isLastPage={isLastPage}
        className="radio-inline"
        isOnlyTwoOptions="true"
      />
    </div>
  );
};

export default Solution;
