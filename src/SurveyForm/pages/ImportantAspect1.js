import React from "react";
import OptionalItem from "../component/OptionalItem";

const ImportantAspect1 = ({
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
        header={"What are the most important aspects of the project?"}
        values={["Budget", "Efficiency", "Quality"]}
        fieldName="importantAspect1"
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

export default ImportantAspect1;
