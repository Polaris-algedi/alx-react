import React from "react";
import { render } from "@testing-library/react";
import { render as rtlRender } from "@testing-library/react";
import CourseListRow from "./CourseListRow";

describe("CourseListRow", () => {
  test("renders one cell with colspan of 2 if isHeader is true and textSecondCell does not exist", () => {
    const { getByTestId } = render(
      <CourseListRow
        isHeader={true}
        textFirstCell="test"
        data-testid="test-cell"
      />
    );
    const th = getByTestId("test-cell");

    expect(th).toBeInTheDocument();
    expect(th).toHaveAttribute("colspan", "2");
  });

  test("renders one tr element with two td elements if isHeader is true and textSecondCell is present", () => {
    const { getAllByTestId } = render(
      <CourseListRow
        isHeader={true}
        textFirstCell="test"
        textSecondCell="test"
        data-testid="test-cell"
      />
    );
    const ths = getAllByTestId("test-cell");

    expect(ths.length).toBe(2);
  });

  test("renders two td elements if isHeader is false", () => {
    const { getAllByTestId } = render(
      <CourseListRow
        isHeader={false}
        textFirstCell="test"
        data-testid="test-cell"
      />
    );
    const tds = getAllByTestId("test-cell");

    expect(tds.length).toBe(2);
  });
});
