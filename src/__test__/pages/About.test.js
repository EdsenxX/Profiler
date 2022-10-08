import React from "react";
import { shallow, mount } from "enzyme";
import About from "../../pages/About";
import ProviderMock from "../../__mocks__/ProviderMock";
import {create} from "react-test-renderer";

describe("About", () => {
  test("Render del componente About", () => {
    const about = shallow(
      <ProviderMock>
        <About />
      </ProviderMock>
    );
    expect(about.length).toEqual(1);
  });
});

describe("About snapshot", () => {
  test("Comprobar la UI del componente About", () => {
    const about = create(
      <ProviderMock>
        <About/>
      </ProviderMock>
    )
    expect(about.toJSON()).toMatchSnapshot();
  });
});