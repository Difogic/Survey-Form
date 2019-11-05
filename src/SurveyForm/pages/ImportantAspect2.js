import React from "react";
import OptionalItem from "../component/OptionalItem";

const ImportantAspect2 = ({
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
        values={["Content", "Design", "Engineering"]}
        fieldName="importantAspect2"
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

export default ImportantAspect2;
