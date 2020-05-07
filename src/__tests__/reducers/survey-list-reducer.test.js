import surveyListReducer from '../../reducers/survey-list-reducer';
import * as c from './../../actions/ActionTypes';

describe('surveyListReducer', () => {

  let action;
  const currentState = {
    1: {
      question1: 'Do you take the bus to work?',
      response1: 'No',
      id: 1
    },
    2: {
      question1: 'Do you bike to work?',
      response1: 'Yes',
      id: 2
    }
  }

  const surveyData = {
    question1: 'Do you ride the bus tho work?',
    response1: 'No',
    id: 1
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
  test('Should successfully delete a survey', () => {
    action = {
      type: c.DELETE_SURVEY,
      id: 1
    };
    expect(surveyListReducer(currentState, action)).toEqual({
      2: {
        question1: 'Do you bike to work?',
        response1: 'Yes',
        id: 2
      }
    });
  });
});