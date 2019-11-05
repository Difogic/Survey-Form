import React from "react";
import NextButton from "../component/NextButton";

const CurrentSituation = ({ transition, submit, isLastPage }) => {
  return (
    <div className="content">
      <div className="question">
        First of all, let's envision the current situation
      </div>
      <div className="label">
        Start by describing how the current customers/users have to interact
        with the problem area in the current world
      </div>
      <NextButton
        isLastPage={isLastPage}
        submit={submit}
        transition={transition}
        buttonText={"Continue"}
      />
    </div>
  );
};

export default CurrentSituation;
