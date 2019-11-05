import React from "react";
import FormInput from "../component/FormInput";

const Dealbreakers = ({
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
        header={"What you will not compromise on?"}
        fieldName="dealbreakers"
        form={form}
        transition={transition}
        onAnswerChange={onAnswerChange}
        isVisible={isVisible}
        buttonText={"Submit"}
        submit={submit}
        isLastPage={isLastPage}
      />
    </div>
  );
};

export default Dealbreakers;
