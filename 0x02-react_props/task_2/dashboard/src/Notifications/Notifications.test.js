import { render } from "@testing-library/react";
import Notifications from "./Notifications";

test("renders NotificationItem elements", () => {
  const { getAllByTestId } = render(<Notifications />);
  const notificationItems = getAllByTestId("notification-item");
  expect(notificationItems.length).toBe(3); // Three NotificationItem elements
});

test("verifies first NotificationItem element renders the right html", () => {
  const { getAllByTestId } = render(<Notifications />);
  const firstNotificationItem = getAllByTestId("notification-item")[0];
  expect(firstNotificationItem).toHaveTextContent("New course available"); // First NotificationItem should contain "New course available"
});
