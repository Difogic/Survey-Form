import React from "react";
import thankYouImage from "../../images/cat_mail.png";

const ThankYou = () => {
  return (
    <div className="content text-centered">
      <div>
        <img className="image" src={thankYouImage} alt="welcome" />
      </div>
      <h1 className="question">
        Thanks for your time! We'll be in touch shortly.
      </h1>
    </div>
  );
};

export default ThankYou;
