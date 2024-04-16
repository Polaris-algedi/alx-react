import React, { Fragment, Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";
import PropTypes from "prop-types";
import CourseList from "../CourseList/CourseList";
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import { StyleSheet, css } from "aphrodite";

class App extends Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleLogout);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleLogout);
  }

  handleLogout({ ctrlKey, key }) {
    const ctrlKeyPressed = ctrlKey && key === "h";

    if (ctrlKeyPressed) {
      event.preventDefault();
      alert("Logging you out");
      this.props.logOut();
    }
  }

  render() {
    const { isLoggedIn } = this.props;

    const courses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];

    const notifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      {
        id: 3,
        type: "urgent",
        html: {
          __html: "<strong>Urgent requirement</strong> - complete by EOD",
        },
      },
    ];

    const paddingClass = css(styles.padding);
    const sansSerifClass = css(styles["sans-serif"]);

    return (
      <Fragment>
        <div className={sansSerifClass}>
          <Header />
          <div className={paddingClass}>
            {!isLoggedIn && (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login />
              </BodySectionWithMarginBottom>
            )}
            {isLoggedIn && (
              <Fragment>
                <BodySectionWithMarginBottom title="Course List">
                  <CourseList listCourses={courses} />
                </BodySectionWithMarginBottom>
                <BodySection title="News from the School">
                  <p>
                    A paragraph with some random text. A paragraph with some
                    random text. A paragraph with some random text. A paragraph
                    with some random text. A paragraph with some random text. A
                    paragraph with some random text.
                  </p>
                </BodySection>
              </Fragment>
            )}
          </div>
          <Footer />
        </div>
        <Notifications listNotifications={notifications} />
      </Fragment>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => undefined,
};

const styles = StyleSheet.create({
  "sans-serif": {
    fontFamily: "sans-serif",
  },
  padding: {
    padding: "4rem",
  },
});

export default App;
