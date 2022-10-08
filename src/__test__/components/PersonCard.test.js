import React from "react";
import { mount, shallow } from "enzyme";
import ProviderMock from "../../__mocks__/ProviderMock";
import PersonCard from "../../components/PersonCard";

describe("PersonCard", () => {
  test("Render del componente PersonCard", () => {
    const personCard = shallow(
      <ProviderMock>
        <PersonCard />
      </ProviderMock>
    );
    expect(personCard.length).toEqual(1);
  });
});
