import { render } from "@testing-library/react";
import Login from "./Login";

test("renders without crashing", () => {
  const { getByTestId } = render(<Login />);
  const loginForm = getByTestId("login-form");
  expect(loginForm).toBeInTheDocument();
});

test("contains 2 input and 2 label tags", () => {
    const { getAllByTestId } = render(<Login />)
    const inputElements = getAllByTestId("login-input")
    const labelElements = getAllByTestId("login-label")
    expect(inputElements.length).toBe(2)
    expect(labelElements.length).toBe(2)
})
