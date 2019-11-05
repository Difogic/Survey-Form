import React from "react";
import pencils from "../../images/pencils.jpg";
import NextButton from "../component/NextButton";

const WelcomeScreen = ({ transition, isLastPage, submit }) => {
  return (
    <div className="content text-centered">
      <div>
        <img className="image" src={pencils} alt="welcome" />
      </div>
      <div className="question">Welcome, X!</div>
      <div className="welcome-text">Let's dive into your problem together</div>
      <NextButton
        isLastPage={isLastPage}
        transition={transition}
        submit={submit}
        buttonText={"Begin"}
        className="text-centered"
      />
    </div>
  );
};

export default WelcomeScreen;
