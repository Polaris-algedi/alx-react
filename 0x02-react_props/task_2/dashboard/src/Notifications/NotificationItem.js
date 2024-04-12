export default function NotificationItem({ type, value, html }) {
  return (
    <li
      data-notification-type={type}
      dangerouslySetInnerHTML={html}
      data-testid="notification-item"
    >
      {value}
    </li>
  );
}
