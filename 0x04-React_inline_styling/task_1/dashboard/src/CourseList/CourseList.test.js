import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";
import { StyleSheetTestUtils } from "aphrodite";

describe("CourseList component", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  describe("when rendered", () => {
    it("should not crash", () => {
      const wrapper = shallow(<CourseList />);

      expect(wrapper.exists()).toBe(true);
    });
  });

  describe("when listCourses is empty", () => {
    const emptyCourses = [];

    describe("and not specified", () => {
      const wrapper = shallow(<CourseList />);

      it("should render empty message", () => {
        const emptyMessage = wrapper.find("tbody tr td");
        expect(emptyMessage).toHaveLength(1);
        expect(emptyMessage.props()).toMatchObject({ colSpan: 2 });
        expect(emptyMessage.text()).toBe("No course available yet");
      });
    });

    describe("and specified as empty array", () => {
      const wrapper = shallow(<CourseList listCourses={emptyCourses} />);

      it("should render empty message", () => {
        const emptyMessage = wrapper.find("tbody tr td");
        expect(emptyMessage).toHaveLength(1);
        expect(emptyMessage.props()).toMatchObject({ colSpan: 2 });
        expect(emptyMessage.text()).toBe("No course available yet");
      });
    });
  });

  describe("when listCourses is not empty", () => {
    const courses = [
      { id: 0, name: "HTML and CSS", credit: 20 },
      { id: 1, name: "Javascript", credit: 40 },
    ];

    const wrapper = shallow(<CourseList listCourses={courses} />);
    const rows = wrapper.find(CourseListRow);

    it("should render correct amount of rows", () => {
      expect(rows).toHaveLength(4);
    });

    it("should render rows with correct props", () => {
      expect(rows.at(2).props()).toMatchObject({
        textFirstCell: "HTML and CSS",
        textSecondCell: 20,
      });

      expect(rows.at(3).props()).toMatchObject({
        textFirstCell: "Javascript",
        textSecondCell: 40,
      });
    });
  });
});
