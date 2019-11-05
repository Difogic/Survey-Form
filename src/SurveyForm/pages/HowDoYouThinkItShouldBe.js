import React from "react";
import FormInput from "../component/FormInput";

const HowDoYouThinkItShouldBe = ({
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
        header="How do you think it should be?"
        label={
          form.getFieldValue("limitationsOfCurrentSolution")
            ? form.getFieldValue("limitationsOfCurrentSolution")
            : "_____"
        }
        fieldName="howDoYouThinkItShouldBe"
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

export default HowDoYouThinkItShouldBe;
