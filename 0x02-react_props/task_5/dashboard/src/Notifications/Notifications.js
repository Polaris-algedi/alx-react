import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";

export default function Notifications({
  displayDrawer = false,
  listNotifications,
}) {
  if (listNotifications.length === 0) {
    return (
      <div className="Notifications">
        <p>No new notification for now</p>
      </div>
    );
  }

  return (
    <>
      <div className="menuItem">Your notifications</div>
      {displayDrawer && (
        <div className="Notifications" data-testid="notifications">
          <button
            style={{
              background: "none",
              border: "none",
              position: "absolute",
              right: "2px",
              top: "2px",
              cursor: "pointer",
            }}
            aria-label="Close"
            onClick={() => console.log("Close button has been clicked")}
          >
            <img src={closeIcon} alt="closeIcon" width="10px" />
          </button>
          <p>Here is the list of notifications</p>
          <ul>
            {listNotifications.map(({ id, html, type, value }) => (
              <NotificationItem
                key={id}
                type={type}
                value={value}
                html={html}
              />
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};
