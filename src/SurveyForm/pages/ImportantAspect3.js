import React from "react";
import OptionalItem from "../component/OptionalItem";

const ImportantAspect3 = ({
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
        values={["Communication", "Customer Satisfaction"]}
        fieldName="importantAspect3"
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

export default ImportantAspect3;
