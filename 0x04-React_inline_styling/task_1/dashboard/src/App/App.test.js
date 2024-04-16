import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import App from "./App";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import { StyleSheetTestUtils } from "aphrodite";

describe("App component", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).to.be.true;
  });

  it("renders Notifications component", () => {
    const wrapper = shallow(<App />);
    const notifications = wrapper.find(Notifications);

    expect(notifications).to.have.lengthOf(1);
  });

  it("renders Header component", () => {
    const wrapper = shallow(<App />);
    const header = wrapper.find(Header);

    expect(header).to.have.lengthOf(1);
  });

  it("renders Login component", () => {
    const wrapper = shallow(<App />);
    const login = wrapper.find(Login);

    expect(login).to.have.lengthOf(1);
  });

  it("renders Footer component", () => {
    const wrapper = shallow(<App />);
    const footer = wrapper.find(Footer);

    expect(footer).to.have.lengthOf(1);
  });

  it("course list is not displayed by default", () => {
    const wrapper = shallow(<App />);
    const courseList = wrapper.find(CourseList);

    expect(courseList).to.have.lengthOf(0);
  });

  it("if logged in, course list is displayed and login form is not", () => {
    const wrapper = shallow(<App isLoggedIn={true} />);

    const login = wrapper.find(Login);
    const courseList = wrapper.find(CourseList);

    expect(login).to.have.lengthOf(0);
    expect(courseList).to.have.lengthOf(1);
  });

  it("logOut alerts with correct string", () => {
    const logOutMock = jest.fn();
    const alertMock = jest.spyOn(global, "alert").mockImplementation(() => {});

    const wrapper = shallow(<App logOut={logOutMock} />);

    wrapper.instance().logOut();

    expect(alertMock).toHaveBeenCalledWith("Logged out");
    expect(logOutMock).toHaveBeenCalled();

    alertMock.mockRestore();
  });
});
