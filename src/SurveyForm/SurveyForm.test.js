import { shallow } from 'enzyme';
import React from 'react';
import { SurveyForm } from './SurveyForm';
import { Form } from "antd";
import TypeForm from "./component/CustomTypeForm";
import FocusableContainer from "./component/FocusableContainer";

describe('Survey form', () => {
  it('should render without crashing', () => {
    shallow(<SurveyForm />)
  });

  it('should have ant design Form', () => {
    const wrapper = shallow(<SurveyForm />);
    expect(wrapper.find(Form).exists()).toBe(true);
  });

  it('should have TypeForm component', () => {
    const wrapper = shallow(<SurveyForm />);
    expect(wrapper.find(TypeForm).exists()).toBe(true);
  });

  it('should have FocusableContainer component', () => {
    const wrapper = shallow(<SurveyForm />);
    expect(wrapper.find(FocusableContainer).exists()).toBe(true);
  });
});