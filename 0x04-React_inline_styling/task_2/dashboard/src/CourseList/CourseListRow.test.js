import React from "react";
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";
import { StyleSheetTestUtils } from "aphrodite";

describe("CourseListRow component", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  describe("when isHeader is true", () => {
    it("renders one th element with colspan of 2 if textSecondCell does not exist", () => {
      const wrapper = shallow(
        <CourseListRow isHeader={true} textFirstCell="test" />
      );
      const th = wrapper.find("th");

      expect(th).toHaveLength(1);
      expect(th.props()).toHaveProperty("colSpan", "2");
    });

    it("renders two th elements if textSecondCell is present", () => {
      const wrapper = shallow(
        <CourseListRow
          isHeader={true}
          textFirstCell="test"
          textSecondCell="test"
        />
      );
      const ths = wrapper.find("th");

      expect(ths).toHaveLength(2);
    });
  });

  describe("when isHeader is false", () => {
    it("renders two td elements", () => {
      const wrapper = shallow(
        <CourseListRow isHeader={false} textFirstCell="test" />
      );
      const tds = wrapper.find("td");

      expect(tds).toHaveLength(2);
    });
  });
});
