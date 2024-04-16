import { expect } from "chai";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";
import NotificationItem from "./NotificationItem";

describe("NotificationItem", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  describe("renders without crashing", () => {
    it("should render successfully", () => {
      const wrapper = shallow(<NotificationItem />);
      expect(wrapper.exists()).to.be.true;
    });
  });

  describe("renders with correct type and value", () => {
    it("should render with correct type and value", () => {
      const wrapper = shallow(<NotificationItem type="default" value="test" />);
      const li = wrapper.find("li");

      expect(li.props()).to.have.property("data-notification-type", "default");
      expect(li.text()).to.equal("test");
    });
  });

  describe("renders with correct inner html", () => {
    it("should render with correct inner html", () => {
      const wrapper = shallow(
        <NotificationItem
          id={0}
          type="urgent"
          html={{ __html: "<u>test</u>" }}
        />
      );
    });
  });

  describe("markAsRead function", () => {
    it("should call markAsRead with the right message", () => {
      const id = 27;
      const wrapper = shallow(
        <NotificationItem type="default" value="test" id={id} />
      );
      const instance = wrapper.instance();
      instance.markAsRead = jest.fn();
      const listItem = wrapper.find("li").first();
      listItem.simulate("click");
      instance.markAsRead(id);
      jest.restoreAllMocks();
    });
  });
});
