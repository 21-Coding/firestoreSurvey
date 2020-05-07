import surveyListReducer from '../../reducers/survey-list-reducer';
import * as c from './../../actions/ActionTypes';

describe('surveyListReducer', () => {


  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(surveyListReducer({}, { type: null })).toEqual({});
  });
  test('Should successfully add new survey data to masterSurveyList', () => {
    const { question1, question2, question3, response1, response2, response3, id } = surveyData;
    action = {
      type: c.ADD_SURVEY,
      question1: question1,
      response1: response1,
      question2: question2,
      response2: response2,
      question3: response3,
      id: id
    };
    expect(surveyListReducer({}, action)).toEqual({
      [id]: {
        question1: question1,
        response1: response1,
        question2: question2,
        response2: response2,
        question3: response3,
        id: id
      }
    });
  });
});