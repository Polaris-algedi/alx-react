import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import Header from "./Header";
import { StyleSheetTestUtils } from "aphrodite";

describe("Header Component", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("renders without crashing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).to.have.length(1);
  });

  it("renders an image and a title", () => {
    const wrapper = shallow(<Header />);
    const image = wrapper.find("img");
    const title = wrapper.find("h1");

    expect(image).to.have.length(1);
    expect(title).to.have.length(1);
  });
});
