import React from "react";
import { shallow, mount } from "enzyme";
import NavBar from "../../components/NavBar";
import ProviderMock from "../../__mocks__/ProviderMock";
import {create} from "react-test-renderer";

describe("NavBar", () => {
  test("Render del componente NavBar", () => {
    const navbar = shallow(
      <ProviderMock>
        <NavBar />
      </ProviderMock>
    );
    expect(navbar.length).toEqual(1);
  });

  test("Render del titulo", () => {
    const navbar = mount(
      <ProviderMock>
        <NavBar />
      </ProviderMock>
    );
    expect(navbar.find("#Navbar-title").text()).toEqual("Profiler");
  });

});

describe ("NavBar snapshot", () => {
  test("Comprobar la UI del componente NavBar", () => {
    const navbar = create(
      <ProviderMock>
        <NavBar />
      </ProviderMock>
    );
    expect(navbar.toJSON()).toMatchSnapshot();
  });
});
