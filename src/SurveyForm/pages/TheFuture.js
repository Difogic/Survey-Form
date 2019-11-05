import React from "react";
import FormInput from "../component/FormInput";

const TheFuture = ({
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
        fieldName="theFuture"
        header={"Where do you see the project one year from now?"}
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

export default TheFuture;
