import React from "react";
import { Form, Input, Icon, Button, message } from "antd";
import ColorScheme from "color-scheme";
import FocusableInput from "./FocusableInput";

message.config({
  top: "60%",
  duration: 1,
  maxCount: 1
});

let scheme = new ColorScheme();
scheme
  .from_hue(21)
  .scheme("tetrade")
  .variation("hard");

let colors = scheme.colors();

class DynamicList extends React.Component {
  removeValue = k => {
    const {
      keysName,
      form: { getFieldValue, setFieldsValue }
    } = this.props;
    const keys = getFieldValue(keysName);
    if (keys.length === 1) {
      return;
    }
    setFieldsValue({
      [keysName]: keys.filter(key => key !== k)
    });
  };

  addValue = () => {
    const {
      keysName,
      valuesName,
      form: { getFieldValue, setFieldsValue }
    } = this.props;
    const keys = getFieldValue(keysName);
    const values = getFieldValue(valuesName).filter(key =>
      keys.map(k => key !== k)
    );
    let isFilled = !values.includes(undefined) && !values.includes("");
    if (isFilled) {
      const nextKeys = keys.concat(Math.max(...keys) + 1);
      setFieldsValue({
        [keysName]: nextKeys
      });
    } else {
      message.info("Please, first fill empty fields");
    }
  };

  render() {
    const {
      keysName,
      labels = [],
      header,
      form: { getFieldDecorator, getFieldValue },
      valuesName,
      initialKeys,
      placeholder,
      isColor = "",
      onAnswerChange,
      isVisible
    } = this.props;
    getFieldDecorator(keysName, { initialValue: initialKeys });
    const keys = getFieldValue(keysName);
    return (
      <div>
        <span className="question">{header}</span>
        {labels.map(label => (
          <div key={label}>{label}</div>
        ))}
        <div className="dynamic-list">
          {keys.map(k => (
            <div key={k} className="flex-container">
              {isColor && (
                <Form.Item className="dynamic-input">
                  {getFieldDecorator(`${isColor}[${k}]`, {
                    initialValue: `#${colors[k]}`
                  })(
                    <span />
                  )}
                </Form.Item>
              )}
              <Form.Item className="dynamic-input">
                {getFieldDecorator(`${valuesName}[${k}]`, { initialValue: null })(
                  <div>
                    {k === 0 && (
                      <FocusableInput
                        className="input list-input"
                        autoComplete="off"
                        onChange={e => {
                          onAnswerChange(e.target.value !== "");
                        }}
                        placeholder={placeholder}
                        isVisible={isVisible}
                      />
                    )}
                    {k !== 0 && (
                      <Input
                        className="input  list-input"
                        autoComplete="off"
                        placeholder={placeholder}
                      />
                    )}
                    {keys.length > 1 ? (
                      k > 2 ? (
                        <Icon
                          className="diagram-icon"
                          type="minus-circle-o"
                          onClick={() => this.removeValue(k)}
                        />
                      ) : null
                    ) : null}
                  </div>
                )}
              </Form.Item>
            </div>
          ))}
        </div>
        <Form.Item>
          <Button type="link" onClick={() => this.addValue()}>
            Add Item +
          </Button>
        </Form.Item>
      </div>
    );
  }
}

export default DynamicList;
