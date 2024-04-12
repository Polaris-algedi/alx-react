import { render } from "@testing-library/react";
import NotificationItem from "./NotificationItem";

test("renders without crashing", () => {
  render(<NotificationItem />);
});

test("renders correct html with dummy type and value props", () => {
  const { getByTestId } = render(
    <NotificationItem type="default" value="test" />
  );
  const notificationItem = getByTestId("notification-item");
  expect(notificationItem).toHaveAttribute("data-notification-type", "default");
  expect(notificationItem).toHaveTextContent("test");
});

test("renders correct html with dummy html prop", () => {
  const htmlProp = { __html: "<u>test</u>" };
  const { getByTestId } = render(<NotificationItem html={htmlProp} />);
  const notificationItem = getByTestId("notification-item");
  expect(notificationItem).toHaveTextContent("test");
  expect(notificationItem).toContainHTML("<u>test</u>");
});
