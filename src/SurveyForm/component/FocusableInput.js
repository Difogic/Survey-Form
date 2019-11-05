import React, { useEffect } from "react";
import { Input } from "antd";

const FocusableInput = props => {
  let el;
  const { isVisible } = props;
  const newProps = { ...props };
  delete newProps.isVisible;
  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        if (el) {
          el.focus();
        }
      }, 500);
    }
  }, [isVisible, el]);
  return (
    <Input
      ref={input => {
        el = input;
      }}
      {...newProps}
    />
  );
};

export default FocusableInput;
