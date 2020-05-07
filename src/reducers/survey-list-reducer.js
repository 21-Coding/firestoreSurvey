import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { question1, response1, id } = action;
  switch (action.type) {
    case c.ADD_SURVEY:
      return Object.assign({}, state, {
        [id]: {
          question1: question1,
          response1: response1,
          id: id
        }
      });
    default:
      return state;
  }
};





