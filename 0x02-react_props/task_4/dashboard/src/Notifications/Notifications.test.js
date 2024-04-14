import { render } from "@testing-library/react";
import Notifications from "./Notifications";

// displayDrawer={false}

test("menu item is being displayed when displayDrawer is false", () => {
  const { getByText } = render(<Notifications />);
  const menuItem = getByText("Your notifications");
  expect(menuItem).toBeInTheDocument();
});

test("div.Notifications is not being displayed when displayDrawer is false", () => {
  const { queryByTestId } = render(<Notifications />);
  const notifications = queryByTestId("notifications");
  expect(notifications).not.toBeInTheDocument();
});

// displayDrawer={true}
test("renders NotificationItem elements", () => {
  const { getAllByTestId } = render(<Notifications displayDrawer={true} />);
  const notificationItems = getAllByTestId("notification-item");
  expect(notificationItems.length).toBe(3);
});

test("verifies first NotificationItem element renders the right html", () => {
  const { getAllByTestId } = render(<Notifications displayDrawer={true} />);
  const firstNotificationItem = getAllByTestId("notification-item")[0];
  expect(firstNotificationItem).toHaveTextContent("New course available");
});

test("menu item is being displayed when displayDrawer is true", () => {
  const { getByText } = render(<Notifications displayDrawer={true} />);
  const menuItem = getByText("Your notifications");
  expect(menuItem).toBeInTheDocument();
});

test("div.Notifications is being displayed when displayDrawer is true", () => {
  const { getByTestId } = render(<Notifications displayDrawer={true} />);
  const notifications = getByTestId("notifications");
  expect(notifications).toBeInTheDocument();
});
