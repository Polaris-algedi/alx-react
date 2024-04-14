import CourseListRow from "./CourseListRow";
import { render } from "@testing-library/react";

test("renders one cell with colspan = 2 when textSecondCell does not exist", () => {
  // Render a table with a CourseListRow component. The textFirstCell prop is set to "First".
  const { container } = render(
    <table>
      <tbody>
        <CourseListRow isHeader={true} textFirstCell="First" />
      </tbody>
    </table>
  );

  // Use querySelector to find the "th" element within the "tr" element.
  // The "colspan" attribute of this "th" element is then accessed with getAttribute.
  const th = container.querySelector("tr > th");
  const colSpan = th.getAttribute("colspan");

  // Expect the value of the "colspan" attribute to be "2".
  expect(colSpan).toBe("2");

  // To avoid error logs in the test output, we temporarily override console.error
  // with a jest.fn() which is a mock function provided by Jest.
  // This mock function does nothing, effectively suppressing error logs.
  // console.error = jest.fn();
});

test("renders two th when textSecondCell is present", () => {
  const { getByText } = render(
    <table>
      <tbody>
        <CourseListRow
          isHeader={true}
          textFirstCell="First"
          textSecondCell="Second"
        />
      </tbody>
    </table>
  );
  const th1 = getByText("First");
  const th2 = getByText("Second");
  expect(th1).toBeInTheDocument();
  expect(th2).toBeInTheDocument();
});

test("renders two td when isHeader is false", () => {
  const { getByText } = render(
    <table>
      <tbody>
        <CourseListRow
          isHeader={false}
          textFirstCell="First"
          textSecondCell="Second"
        />
      </tbody>
    </table>
  );
  const td1 = getByText("First");
  const td2 = getByText("Second");
  expect(td1).toBeInTheDocument();
  expect(td2).toBeInTheDocument();
});
