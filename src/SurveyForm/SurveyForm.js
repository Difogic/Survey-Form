import React from "react";
import { Form, Icon, message } from "antd";
import TypeForm from "./component/CustomTypeForm";
import Config from "./Config";
import FocusableContainer from "./component/FocusableContainer";
import { directions } from "./constants";

message.config({
  top: "60%",
  duration: 1,
  maxCount: 1
});

class SurveyForm extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPage: Config[0],
      count: 0,
      answeredQuestions: [],
      progress: 0,
      confirm: false
    };
  }

  transition = direction => {
    const { currentPage, answeredQuestions, confirm } = this.state;
    const { form } = this.props;
    const nextPageName =
      direction === directions.FORWARD
        ? currentPage.getNextPage(form)
        : currentPage.getPreviousPage(form);
    const nextPageIndex = Config.findIndex(c => c.name === nextPageName);
    let nextPage = Config[nextPageIndex];
    if (
      currentPage.isCountable &&
      direction === directions.FORWARD &&
      !answeredQuestions.includes(currentPage.name)
    ) {
      message.info("Please, answer the question");
    } else if (
      currentPage.hasConfirmation &&
      !confirm &&
      direction === directions.FORWARD
    ) {
      this.setState({ confirm: true });
    } else {
      if (currentPage.hasConfirmation) {
        this.setState({ confirm: false });
      }
      this.setState({
        currentPage: nextPage,
        count: this.calculateNumberOfParagraph(form, nextPage),
        progress: this.calculateProgress(form)
      });
      this.typeform.goToPage(nextPageIndex);
    }
  };

  calculateNumberOfParagraph = (form, nextPage) => {
    let newCount = 1;
    let page = Config[0];
    if (nextPage !== Config[Config.length - 1]) {
      while (page !== nextPage) {
        if (page.isCountable) {
          newCount++;
        }
        const pageName = page.getNextPage(form);
        page = Config.find(c => c.name === pageName);
      }
    }
    return newCount;
  };

  calculateProgress = form => {
    const { answeredQuestions } = this.state;
    let answered = 0;
    let unanswered = 0;
    let page = Config[0];
    while (!page.isLast) {
      if (page.isCountable) {
        if (answeredQuestions.includes(page.name)) {
          answered++;
        } else {
          unanswered++;
        }
      }
      const pageName = page.getNextPage(form);
      page = Config.find(c => c.name === pageName);
    }
    if (page.isCountable) {
      if (answeredQuestions.includes(page.name)) {
        answered++;
      } else {
        unanswered++;
      }
    }
    return parseInt((answered / (answered + unanswered)) * 100, 10);
  };

  onAnswerChange = (name, isAnswered) => {
    const { answeredQuestions } = this.state;
    let newAnsweredQuestions = answeredQuestions;
    if (isAnswered) {
      if (!answeredQuestions.includes(name)) {
        newAnsweredQuestions = [...answeredQuestions, name];
      }
    } else {
      newAnsweredQuestions = answeredQuestions.filter(n => n !== name);
    }
    this.setState({
      answeredQuestions: newAnsweredQuestions
    });
  };

  onSubmit = () => {
    const { currentPage, answeredQuestions } = this.state;
    if (
      currentPage.isCountable &&
      !answeredQuestions.includes(currentPage.name)
    ) {
      message.info("Please, answer the question");
    } else {
      this.setState({ currentPage: Config[Config.length - 1] });
      this.typeform.goToPage(Config.length - 1);
      this.props.form.validateFields((err, values) => {
        if (!err) {
          window.console.log("values", values);
        }
      });
    }
  };

  onKeyDown = e => {
    const { currentPage } = this.state;
    if (e.keyCode === 13) {
      e.preventDefault();
      if (currentPage.isLast) {
        this.onSubmit();
      } else {
        this.transition(directions.FORWARD);
      }
    }
  };

  render() {
    const { form } = this.props;
    const questionNumber = this.state.count;
    return (
      <Form onKeyDown={this.onKeyDown} labelAlign="left">
        <TypeForm
          progress={this.state.progress}
          ref={c => (this.typeform = c)}
          showReviewView={false}
          nextBtnText={<Icon type="down" />}
          backBtnText={<Icon type="up" />}
          nextBtnOnClick={() => {
            this.transition(directions.FORWARD);
          }}
          backBtnOnClick={() => {
            this.transition(directions.BACKWARD);
          }}
        >
          {Config.map(c => {
            const Comp = c.page;
            return (
              <FocusableContainer key={c.page} doFocus={!c.hasFocusableItems}>
                <Comp
                  questionNumber={questionNumber}
                  form={form}
                  transition={this.transition}
                  submit={this.onSubmit}
                  onAnswerChange={isAnswered =>
                    this.onAnswerChange(c.name, isAnswered)
                  }
                  isLastPage={c.isLast}
                  current={this.state.currentPage}
                  confirmation={this.state.confirm}
                />
              </FocusableContainer>
            );
          })}
        </TypeForm>
      </Form>
    );
  }
}

const WrappedSurveyForm = Form.create({ name: "survey_form" })(SurveyForm);

export default WrappedSurveyForm;
