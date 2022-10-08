import {addPeople} from '../../actions/peopleActions';

describe('peopleActions', () => {
  test('getPeople Action', () => {
    const payload = [{ name: 'test' }];
    const expectedAction = {
      type: 'setPeople',
      payload,
    };
    expect(addPeople(payload)).toEqual(expectedAction);
  });
});