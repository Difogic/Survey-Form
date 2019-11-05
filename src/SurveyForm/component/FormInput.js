import React, { useState } from "react";
import { Form, Icon } from "antd";
import classnames from "classnames";
import FocusableInput from "./FocusableInput";
import NextButton from "./NextButton";

const FormInput = ({
  header,
  label,
  placeholder = "Type your answer here and press enter",
  fieldName,
  questionNumber,
  form: { getFieldDecorator },
  transition,
  onAnswerChange,
  isVisible,
  submit,
  isLastPage,
  buttonText
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
        <Form.Item>
          {getFieldDecorator(fieldName)(
            <div>
              <FocusableInput
                className="input focus-input"
                autoComplete="off"
                onChange={e => {
                  setValue(e.target.value);
                  onAnswerChange(e.target.value !== "");
                }}
                placeholder={placeholder}
                isVisible={isVisible}
              />
            </div>
          )}
          <NextButton
            isLastPage={isLastPage}
            submit={submit}
            transition={transition}
            buttonText={buttonText}
            className={classnames({
              hidden: !isLastPage,
              visibleOnSmallScreen: value !== "" && !isLastPage
            })}
          />
        </Form.Item>
      </div>
    </div>
  );
};

export default FormInput;
