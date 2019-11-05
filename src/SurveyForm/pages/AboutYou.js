import React from "react";
import NextButton from "../component/NextButton";

const AboutYou = ({ transition, submit, isLastPage }) => {
  return (
    <div className="content">
      <div className="question">And now a little bit about you..</div>
      <div className="label">Don't worry, this is the last part!</div>
      <NextButton
        isLastPage={isLastPage}
        submit={submit}
        transition={transition}
        buttonText={"Continue"}
      />
    </div>
  );
};

export default AboutYou;
