import React from "react";
import OptionalItem from "../component/OptionalItem";

const ProblemFrequency = ({
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
        header={"How often is the problem encountered?"}
        values={[
          "One time",
          "Annually",
          "Monthly",
          "Daily",
          "Multiple times per day"
        ]}
        fieldName="problemFrequency"
        form={form}
        transition={transition}
        onAnswerChange={onAnswerChange}
        submit={submit}
        isLastPage={isLastPage}
        className="radio-block"
      />
    </div>
  );
};

export default ProblemFrequency;
