import { render } from "@testing-library/react";
import App from "./App";

test("renders Notifications component", () => {
  const { getByTestId } = render(<App />);
  const notificationsComponent = getByTestId("notifications");
  expect(notificationsComponent).toBeInTheDocument();
});

test("renders Header component", () => {
  const { getByTestId } = render(<App />);
  const headerComponent = getByTestId("header");
  expect(headerComponent).toBeInTheDocument();
});

test("renders Login component", () => {
  const { getByTestId } = render(<App />);
  const loginComponent = getByTestId("login");
  expect(loginComponent).toBeInTheDocument();
});

test("renders Footer component", () => {
  const { getByTestId } = render(<App />);
  const footerComponent = getByTestId("footer");
  expect(footerComponent).toBeInTheDocument();
});
