import React from "react";
import FormInput from "../component/FormInput";

const Approach = ({
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
        header="How are you going to bring this change?"
        label="(approach/technology)"
        fieldName="approach"
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

export default Approach;
