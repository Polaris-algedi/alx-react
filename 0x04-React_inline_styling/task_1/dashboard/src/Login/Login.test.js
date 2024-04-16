import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import Login from "./Login";
import { StyleSheetTestUtils } from "aphrodite";

describe("Login Component", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("renders without crashing", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper).to.have.length(1);
  });

  it("renders two input tags and labels", () => {
    const wrapper = shallow(<Login />);
    const inputs = wrapper.find("input");
    const labels = wrapper.find("label");

    expect(inputs).to.have.length(2);
    expect(labels).to.have.length(2);
  });
});
