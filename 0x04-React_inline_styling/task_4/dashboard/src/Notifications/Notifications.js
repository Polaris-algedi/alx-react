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
    flexWrap: "wrap",
    alignItems: "flex-end",
  },
  menuItem: {
    padding: "1rem",
    position: "relative",
    marginBottom: 0,
    ":hover": {
      cursor: "pointer",
      animation: "fadeIn 0.5s ease 3",
    },
    "@media (max-width: 900px)": {
      padding: 0,
    },
  },
  notifs: {
    border: "1px dashed #e1354b",
    marginTop: 0,
    backgroundColor: "white",
    "@media (max-width: 900px)": {
      width: "95vw",
      height: "95vh",
      margin: 0,
      zIndex: 10,
      border: "1px solid lightgray",
      fontSize: "20px",
    },
  },
  list: {
    listStyleType: "none",
    paddingLeft: 0,
    "@media (max-width: 900px)": {},
  },
  button: {
    position: "absolute",
    top: "10px",
    right: "10px",
    border: "none",
    backgroundColor: "transparent",
  },
});

const keyframes = {
  fadeIn: {
    from: { opacity: 0.5 },
    to: { opacity: 1 },
  },
  bounce: {
    "0%": { transform: "translateY(0px)" },
    "50%": { transform: "translateY(-5px)" },
    "100%": { transform: "translateY(5px)" },
  },
};

class Notification extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
    );
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;
    return (
      <div className={css(styles.wrapper)}>
        <div
          className={css(styles.menuItem, styles.div)}
          data-testid="menu-item"
        >
          Your Notifications
        </div>
        {displayDrawer && (
          <div className={css(styles.notifs, styles.div)} data-testid="notifs">
            {listNotifications.length ? (
              <Fragment>
                <p>Here is the list of notifications</p>
                <ul className={css(styles.list)}>
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
              <p>No new notifications for now</p>
            )}
            <button
              className={css(styles.button)}
              aria-label="Close"
              onClick={() => console.log("Close button has been clicked")}
            >
              <img
                src={closeIcon}
                alt="Close"
                style={{ height: "20px", width: "20px" }}
              />
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
