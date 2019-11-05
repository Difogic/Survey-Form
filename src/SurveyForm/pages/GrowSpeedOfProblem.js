import React, { useState } from "react";
import { Slider, Icon } from "antd";
import classnames from "classnames";
import NextButton from "../component/NextButton";

function formatterGrowth(value) {
  return `${value}% growth`;
}

const GrowSpeedOfProblem = ({
  form,
  transition,
  questionNumber,
  onAnswerChange,
  submit,
  isLastPage
}) => {
  const [value, setValue] = useState("");
  return (
    <div className="content">
      <div className="flex-container">
        <span className="question-number">
          {questionNumber}
          <Icon className="question-number__arrow" type="arrow-right" />
        </span>
        <div>
          <span className="question">
            How rapidly is the problem growing every year?
          </span>
          <div>Use the slider to select a value.</div>
          {form.getFieldDecorator("growSpeedOfProblem")(
            <Slider
              className="slider"
              onChange={() => {
                setValue("1");
                onAnswerChange(true);
              }}
              tipFormatter={formatterGrowth}
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
    </div>
  );
};

export default GrowSpeedOfProblem;
