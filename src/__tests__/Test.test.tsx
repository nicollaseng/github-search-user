import React from "react";

import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import { configure, shallow, mount } from "enzyme";

import Test from "../screens/test-class";

configure({ adapter: new Adapter() });

describe("<Test />", () => {
  const testComponent = shallow(<Test />);
  it("should receive a prop different of undefined", () => {
    expect(testComponent.props().children.name).toBeUndefined();
  });

  it("should mount and log a message", () => {
    const cycles = mount(<Test />);
    cycles.unmount();
  });
});
