import React from "react";
import thankYouImage from "../../images/thank_you.jpg";

const ThankYou = () => {
  return (
    <div className="content text-centered">
      <div>
        <img className="image" src={thankYouImage} alt="welcome" />
      </div>
      <h1 className="question">
        Thank you for you time, we will contact you shortly
      </h1>
    </div>
  );
};

export default ThankYou;
