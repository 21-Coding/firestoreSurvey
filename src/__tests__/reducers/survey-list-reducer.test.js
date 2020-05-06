import surveyListReducer from '../../reducers/survey-list-reducer';

describe('surveyListReducer', () => {
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(surveyListReducer({}, { type: null })).toEqual({});
  });
});