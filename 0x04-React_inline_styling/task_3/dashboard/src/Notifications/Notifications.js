import React, { Fragment } from "react";
import PropTypes from "prop-types";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";
import { StyleSheet, css } from "aphrodite";

const Notification = ({ displayDrawer, listNotifications }) => {
  const handleMarkAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  };

  const renderNotifications = () =>
    listNotifications.length ? (
      <Fragment>
        <p>Here is the list of notifications</p>
        <ul className={css(styles.list)}>
          {listNotifications.map(({ id, type, value, html }) => (
            <NotificationItem
              key={id}
              type={type}
              value={value}
              html={html}
              markAsRead={handleMarkAsRead}
            />
          ))}
        </ul>
      </Fragment>
    ) : (
      <p>No new notifications for now</p>
    );

  return (
    <div className={css(styles.wrapper)}>
      <div className={css(styles.header)} data-testid="menu-item">
        Your Notifications
      </div>
      {displayDrawer && (
        <div className={css(styles.notifications)} data-testid="notifications">
          {renderNotifications()}
          <button
            className={css(styles.closeButton)}
            aria-label="Close"
            onClick={() => console.log("Close button has been clicked")}
          >
            <img src={closeIcon} alt="Close" className={css(styles.icon)} />
          </button>
        </div>
      )}
    </div>
  );
};

Notification.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notification.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    right: "12px",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    padding: "1rem",
    position: "relative",
    marginBottom: "0.5rem",
    "@media (max-width: 900px)": {
      padding: "0",
    },
  },
  notifications: {
    border: "1px dashed #e1354b",
    marginTop: "0",
    backgroundColor: "white",
    position: "relative",
    "@media (max-width: 900px)": {
      width: "95vw",
      height: "95vh",
      margin: "0",
      zIndex: "10",
      border: "1px solid lightgray",
      fontSize: "20px",
    },
  },
  list: {
    listStyleType: "none",
    paddingLeft: "0",
    "@media (max-width: 900px)": {},
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    border: "none",
    backgroundColor: "transparent",
  },
  icon: {
    height: "20px",
    width: "20px",
  },
});

export default Notification;
