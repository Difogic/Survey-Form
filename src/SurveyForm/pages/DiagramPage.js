import React from "react";
import { Icon } from "antd";
import classnames from "classnames";
import Diagram from "../component/Diagram";
import NextButton from "../component/NextButton";

const DiagramPage = ({
  form,
  transition,
  questionNumber,
  onAnswerChange,
  submit,
  isLastPage,
  confirmation
}) => {
  return (
    <div className="content flex-container">
      <span className="question-number">
        {questionNumber}
        <Icon className="question-number__arrow" type="arrow-right" />
      </span>
      <div>
        <Diagram
          labels={[
            "Arrange your list of alternative solutions onto the cost & impact diagram.",
            "The higher the impact the solution/service has, the higher it's placed on the Y axis.",
            "The higher the cost of the solution/service, the higher it's place on the X axis."
          ]}
          form={form}
          keysName="solutionKeys"
          valuesName="solutions"
          header="Cost and importance of alternative solutions"
          isColor="color"
          positionsName="solutionsCostsAndImportance"
          onAnswerChange={onAnswerChange}
        />
        {confirmation && (
          <NextButton
            isLastPage={isLastPage}
            submit={submit}
            transition={transition}
            buttonText="Confirm"
            className={classnames({
              hidden: !confirmation && !isLastPage
            })}
          />
        )}
        {!confirmation && (
          <NextButton
            isLastPage={isLastPage}
            submit={submit}
            transition={transition}
            buttonText="Ok"
            className="visibleOnSmallScreen"
          />
        )}
      </div>
    </div>
  );
};

export default DiagramPage;
