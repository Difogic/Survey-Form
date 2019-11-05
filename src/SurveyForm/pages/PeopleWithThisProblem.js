import React, { useState } from "react";
import { Slider, Icon } from "antd";
import classnames from "classnames";
import NextButton from "../component/NextButton";

function formatterPeople(value) {
  return `${value}% of people`;
}

const PeopleWithThisProblem = ({
  form,
  transition,
  questionNumber,
  onAnswerChange,
  submit,
  isLastPage
}) => {
  const [value, setValue] = useState("");
  return (
    <div className="content flex-container">
      <span className="question-number">
        {questionNumber}
        <Icon className="question-number__arrow" type="arrow-right" />
      </span>
      <div>
        <span className="question">How many people have this problem?</span>
        <div>Use the slider to select a value.</div>
        {form.getFieldDecorator("peopleWithThisProblem")(
          <Slider
            className="slider"
            onChange={() => {
              setValue("1");
              onAnswerChange(true);
            }}
            tipFormatter={formatterPeople}
          />
        )}
        <NextButton
          isLastPage={isLastPage}
          submit={submit}
          transition={transition}
          className={classnames({
            hidden: value === "" && !isLastPage
          })}
        />
      </div>
    </div>
  );
};

export default PeopleWithThisProblem;
