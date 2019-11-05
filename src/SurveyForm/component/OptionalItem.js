import React, { useState } from "react";
import { Form, Radio, Icon } from "antd";
import classnames from "classnames";
import NextButton from "./NextButton";
import { directions } from "../constants";

const OptionalItem = ({
  header,
  questionNumber,
  label,
  form: { getFieldDecorator },
  values,
  fieldName,
  onAnswerChange,
  transition,
  submit,
  className,
  isOnlyTwoOptions,
  isLastPage
}) => {
  const [value, setValue] = useState("");
  return (
    <div className="flex-container">
      <span className="question-number">
        {questionNumber}
        <Icon className="question-number__arrow" type="arrow-right" />
      </span>
      <div>
        <div className="question">{header}</div>
        <div className="label">{label}</div>
        <div>Select one of the options.</div>
        <Form.Item>
          <div className="next-button">
            {getFieldDecorator(fieldName)(
              <Radio.Group
                size="large"
                onChange={e => {
                  setValue(e.target.value);
                  onAnswerChange(true);
                  if (isOnlyTwoOptions) {
                    setTimeout(() => {
                      transition(directions.FORWARD);
                    }, 300);
                  }
                }}
                buttonStyle="solid"
              >
                {values.map(value => (
                  <Radio.Button
                    key={value}
                    className={`radio ${className} `}
                    value={value}
                  >
                    <div className="radio-text">{value}</div>
                  </Radio.Button>
                ))}
              </Radio.Group>
            )}
          </div>
          <NextButton
            isLastPage={isLastPage}
            submit={submit}
            transition={transition}
            value={value}
            className={classnames({
              hidden: (value === "" && !isLastPage) || isOnlyTwoOptions
            })}
            buttonText="Confirm"
          />
        </Form.Item>
      </div>
    </div>
  );
};

export default OptionalItem;
