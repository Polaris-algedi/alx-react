import { render } from "@testing-library/react";
import App from "./App";

test("renders Notifications component", () => {
  const { getByText } = render(<App />);
  const notificationsComponent = getByText("Your notifications");
  expect(notificationsComponent).toBeInTheDocument();
});

test("renders Header component", () => {
  const { getByTestId } = render(<App />);
  const headerComponent = getByTestId("header");
  expect(headerComponent).toBeInTheDocument();
});

test("renders the Login and not CourseList component", () => {
  const { getByTestId, queryByTestId } = render(<App />);
  const loginComponent = getByTestId("login");
  const courseListComponent = queryByTestId("CourseList");
  expect(loginComponent).toBeInTheDocument();
  expect(courseListComponent).not.toBeInTheDocument();
});

test("renders the CourseList and not Login component", () => {
  const { getByTestId, queryByTestId } = render(<App isLoggedIn={true} />);
  const loginComponent = queryByTestId("login");
  const courseListComponent = getByTestId("CourseList");
  expect(loginComponent).not.toBeInTheDocument();
  expect(courseListComponent).toBeInTheDocument();
});

test("renders Footer component", () => {
  const { getByTestId } = render(<App />);
  const footerComponent = getByTestId("footer");
  expect(footerComponent).toBeInTheDocument();
});
