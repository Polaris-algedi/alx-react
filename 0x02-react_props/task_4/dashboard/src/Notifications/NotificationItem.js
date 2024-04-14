import PropTypes from "prop-types";

export default function NotificationItem({ type = "default", value, html }) {
  return (
    <li
      data-notification-type={type}
      dangerouslySetInnerHTML={html?.__html && { ...html }}
      data-testid="notification-item"
    >
      {value}
    </li>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
};
