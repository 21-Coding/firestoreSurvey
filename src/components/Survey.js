import React from 'react';
import PropTypes from 'prop-types';

function Survey(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenSurveyClicked(props.id)}>
        <h3><em>{props.question1}</em></h3>
        <h3><em>{props.response1}</em></h3>
        <h3><em>{props.question2}</em></h3>
        <h3><em>{props.response2}</em></h3>
        <h3><em>{props.question3}</em></h3>
        <h3><em>{props.response3}</em></h3>
      </div>
      <hr />
    </React.Fragment>
  );
}

Survey.propTypes = {
  question1: PropTypes.string,
  question2: PropTypes.string,
  question3: PropTypes.string,
  response1: PropTypes.string,
  response2: PropTypes.string,
  response3: PropTypes.string,
  id: PropTypes.string,
  whenSurveyClicked: PropTypes.func,
};

export default Survey;