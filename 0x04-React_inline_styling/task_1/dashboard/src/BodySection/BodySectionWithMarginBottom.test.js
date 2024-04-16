import React from "react";
import { mount } from "enzyme";
import { expect } from "chai";
import BodySection from "./BodySection";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";

describe("BodySectionWithMarginBottom", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<BodySectionWithMarginBottom />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("should render children properly", () => {
    wrapper.setProps({
      title: "Title",
      children: [<p key="1">paragraph 1</p>, <p key="2">paragraph 2</p>],
    });

    const bodySection = wrapper.find(BodySection);
    const heading = bodySection.find("h2");
    const paragraphs = bodySection.find("p");

    expect(heading).to.have.lengthOf(1);
    expect(heading.text()).to.equal("Title");

    expect(paragraphs).to.have.lengthOf(2);
    expect(paragraphs.at(0).text()).to.equal("paragraph 1");
    expect(paragraphs.at(1).text()).to.equal("paragraph 2");
  });

  it("should have correct style applied", () => {
    const div = wrapper.find("div").first();

    expect(div.prop("className")).to.include("margin_");
  });
});
