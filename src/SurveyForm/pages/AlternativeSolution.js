import React from "react";
import OptionalItem from "../component/OptionalItem";

const AlternativeSolution = ({
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
        header={"Are there already alternative solutions?"}
        values={["Yes", "No"]}
        fieldName="alternativeSolution"
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

export default AlternativeSolution;
