import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import "../styles.css";
import PropTypes from "prop-types";
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from "../utils/utils";

/**
 * Renders the main App component based on the user's login status.
 *
 * @param {boolean} isLoggedIn - Indicates whether the user is logged in.
 * @return {JSX.Element} The rendered component.
 */
export default function App({ isLoggedIn = false }) {
  const listCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];

  const listNotifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
  ];

  return (
    <>
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
      <Header />
      {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
      <Footer />
    </>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};
