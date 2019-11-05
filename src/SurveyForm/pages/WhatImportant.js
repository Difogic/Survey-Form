import React from "react";
import NextButton from "../component/NextButton";

const WhatImportant = ({ transition, submit, isLastPage }) => {
  return (
    <div className="content">
      <h1>Now let's discuss what's important to you</h1>
      <NextButton
        isLastPage={isLastPage}
        submit={submit}
        transition={transition}
        buttonText={"Continue"}
      />
    </div>
  );
};

export default WhatImportant;
