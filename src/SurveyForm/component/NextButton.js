import React from "react";
import { Button } from "antd";
import { directions } from "../constants";

const NextButton = ({
  buttonText = "Ok",
  transition,
  isLastPage,
  className,
  submit
}) => {
  return (
    <div className={`${className} next-button`}>
      <Button
        className="button"
        onClick={() => {
          if (isLastPage) {
            submit();
          } else {
            transition(directions.FORWARD);
          }
        }}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default NextButton;
