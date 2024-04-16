import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    right: "12px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  menuItem: {
    padding: "1rem",
    position: "relative",
    marginBottom: "0.5rem",
  },
  notifications: {
    border: "1px dashed #e1354b",
    padding: "1rem",
    position: "relative",
  },
  noNotifications: {
    padding: "1rem",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    border: "none",
    backgroundColor: "transparent",
  },
});

class Notification extends Component {
  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  };

  shouldComponentUpdate({ listNotifications: nextNotifications }) {
    const { listNotifications } = this.props;
    return nextNotifications.length > listNotifications.length;
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;

    return (
      <div className={css(styles.wrapper)}>
        <div className={css(styles.menuItem)} data-testid="menu-item">
          Your Notifications
        </div>
        {displayDrawer && (
          <div className={css(styles.notifications)} data-testid="notifs">
            {listNotifications.length ? (
              <Fragment>
                <ul>
                  {listNotifications.map(({ id, type, value, html }) => (
                    <NotificationItem
                      key={id}
                      type={type}
                      value={value}
                      html={html}
                      markAsRead={this.markAsRead}
                    />
                  ))}
                </ul>
              </Fragment>
            ) : (
              <p className={css(styles.noNotifications)}>
                No new notifications for now
              </p>
            )}
            <button
              className={css(styles.closeButton)}
              aria-label="Close"
              onClick={() => console.log("Close button has been clicked")}
            >
              <img src={closeIcon} alt="Close" height={20} width={20} />
            </button>
          </div>
        )}
      </div>
    );
  }
}

Notification.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notification.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notification;
