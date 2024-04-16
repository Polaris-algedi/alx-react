import React from "react";
import PropTypes from "prop-types";
import { css, StyleSheet } from "aphrodite";

const NotificationType = {
  Default: "default",
  Urgent: "urgent",
};

const styles = StyleSheet.create({
  default: {
    color: "blue",
  },
  urgent: {
    color: "red",
  },
});

const NotificationItem = ({
  id,
  type = NotificationType.Default,
  html,
  value = "",
  markAsRead = () => {},
}) => (
  <li
    className={css(styles[type])}
    data-notification-type={type}
    onClick={() => markAsRead(id)}
    dangerouslySetInnerHTML={html || { __html: value }}
  />
);

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.oneOf([NotificationType.Default, NotificationType.Urgent]),
  html: PropTypes.shape({ __html: PropTypes.string }),
  value: PropTypes.string,
  markAsRead: PropTypes.func,
};

export default NotificationItem;
