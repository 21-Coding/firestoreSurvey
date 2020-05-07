import surveyListReducer from '../../reducers/survey-list-reducer';
import * as c from './../../actions/ActionTypes';

describe('surveyListReducer', () => {
  let action;
  const surveyData = {
    1:
    {
      question1: 'Do you ride the bus tho work?',
      response1: 'No',
      id: 1
    }
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(surveyListReducer({}, { type: null })).toEqual({});
  });
  test('Should successfully add new survey data to masterSurveyList', () => {
    const { question1, response1, id } = surveyData;
    action = {
      type: c.ADD_SURVEY,
      question1: question1,
      response1: response1,
      id: id
    };
    expect(surveyListReducer({}, action)).toEqual({
      [id]: {
        question1: question1,
        response1: response1,
        id: id
      }
    });
  });
});