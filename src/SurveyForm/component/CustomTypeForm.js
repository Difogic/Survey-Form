import React from "react";
import { Progress } from "antd";
import classnames from "classnames";

class TypeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 0,
      direction: 0
    };
    this.visibleElRef = React.createRef();
  }

  /** Set className for component to show/hide */
  setVisibility = (element, isVisible) => {
    const { direction } = this.state;

    if (!element) {
      return null;
    }
    return (
      <div
        className={classnames({
          show: isVisible,
          hide: !isVisible,
          "slide-down": isVisible && direction < 0,
          "slide-up": isVisible && direction > 0
        })}
      >
        {React.cloneElement(element, {
          isVisible
        })}
      </div>
    );
  };

  /** Get the current component to show on screen */
  getCurrentView(children) {
    let allChildren = [];
    allChildren = React.Children.map(children, (child, index) => {
      let currentChild = this.setVisibility(child, false);
      if (index === this.state.current) {
        currentChild = this.setVisibility(child, true);
      }
      return currentChild;
    });
    return allChildren;
  }

  goToPage = page => {
    this.setState({ current: page, direction: page - this.state.current });
  };

  isNextComponent = () => {
    return (
      this.state.current !== 0 &&
      this.state.current !== this.props.children.length - 1
    );
  };

  render() {
    return (
      <React.Fragment>
        {this.getCurrentView(this.props.children)}
        {this.isNextComponent() && (
          <React.Fragment>
            <div className="clear-progress" />
            <div className="progress-container">
              <Progress
                className="progress"
                strokeColor="#1890ff"
                percent={this.props.progress}
              />
            </div>
            <div className="navigation-buttons">
              <button
                className="navigation-button"
                onClick={this.props.backBtnOnClick}
              >
                {this.props.backBtnText}
              </button>
              <button
                className="navigation-button"
                onClick={this.props.nextBtnOnClick}
              >
                {this.props.nextBtnText}
              </button>
            </div>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default TypeForm;
