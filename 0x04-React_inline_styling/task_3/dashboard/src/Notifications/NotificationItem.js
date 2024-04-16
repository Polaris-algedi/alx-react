import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const screenSize = {
  small: "@media screen and (max-width: 900px)",
};

const listItemStyles = {
  listStyle: "none",
  borderBottom: "1px solid black",
  padding: "10px 8px",
  fontSize: "20px",
};

const styles = StyleSheet.create({
  default: {
    color: "blue",
    [screenSize.small]: listItemStyles,
  },

  urgent: {
    color: "red",
    [screenSize.small]: listItemStyles,
  },
});

const NotificationItem = ({ id, type, html, value, markAsRead }) => {
  const handleClick = () => markAsRead(id);

  return html === undefined ? (
    <li
      data-notification-type={type}
      onClick={handleClick}
      className={css(styles[type])}
    >
      {value}
    </li>
  ) : (
    <li
      data-notification-type={type}
      dangerouslySetInnerHTML={html}
      className={css(styles[type])}
    />
  );
};

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
  value: PropTypes.string,
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  type: "default",
  value: "",
  markAsRead: () => {},
};

export default NotificationItem;
