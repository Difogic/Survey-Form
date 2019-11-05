import React from "react";
import { Icon } from "antd";
import classnames from "classnames";
import DynamicList from "../component/DynamicList";
import NextButton from "../component/NextButton";

const Goals = ({
  form,
  transition,
  questionNumber,
  onAnswerChange,
  isVisible,
  submit,
  isLastPage,
  confirmation
}) => {
  return (
    <div className="content flex-container">
      <span className="question-number">
        {questionNumber}
        <Icon className="question-number__arrow" type="arrow-right" />
      </span>
      <div>
        <DynamicList
          questionNumber={questionNumber}
          keysName="goalKeys"
          valuesName="goals"
          placeholder="Type your answer here..."
          header="What are your major goals for this project?"
          form={form}
          initialKeys={[0, 1, 2]}
          transition={transition}
          onAnswerChange={onAnswerChange}
          isVisible={isVisible}
        />
        {confirmation && (
          <NextButton
            isLastPage={isLastPage}
            submit={submit}
            transition={transition}
            buttonText="Confirm"
            className={classnames({
              hidden: !confirmation && !isLastPage
            })}
          />
        )}
        {!confirmation && (
          <NextButton
            isLastPage={isLastPage}
            submit={submit}
            transition={transition}
            buttonText="Ok"
            className="visibleOnSmallScreen"
          />
        )}
      </div>
    </div>
  );
};

export default Goals;
