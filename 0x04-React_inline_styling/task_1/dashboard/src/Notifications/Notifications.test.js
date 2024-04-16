import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";
import { StyleSheetTestUtils } from "aphrodite";

describe("Notifications Component", () => {
  let wrapper;
  let notifications;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    notifications = [
      { id: 1, type: "default", value: "x" },
      { id: 2, type: "default", value: "y" },
    ];
    wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={notifications} />
    );
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("renders without crashing", () => {
    expect(wrapper.exists()).to.be.true;
  });

  it("renders a list with two NotificationItems", () => {
    expect(wrapper.find("ul")).to.have.lengthOf(1);
    expect(wrapper.find(NotificationItem)).to.have.lengthOf(2);
  });

  it("displays 'No new notifications for now' when list is empty", () => {
    wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={[]} />
    );
    const noNewNotificationsMessage = wrapper.find(
      '[data-testid="no-new-notifications"]'
    );

    expect(noNewNotificationsMessage).to.have.lengthOf(1);
    expect(noNewNotificationsMessage.text()).to.equal(
      "No new notifications for now"
    );
  });

  describe("markAsRead method", () => {
    const mockConsole = jest.spyOn(console, "log");

    beforeEach(() => {
      mockConsole.mockClear();
    });

    it("calls console.log with the id of the notification when called", () => {
      wrapper.instance().markAsRead(1);
      expect(mockConsole).to.have.been.calledWith(1);
    });
  });
});
