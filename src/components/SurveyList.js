import React from 'react';
import PropTypes from 'prop-types';
import Survey from './Survey';

function SurveyList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.surveyList.map((survey) =>
        <Survey
          whenSurveyClicked={props.onSurveySelection}
          question1={survey.question1}
          response1={survey.response1}
          question2={survey.question2}
          response2={survey.response2}
          question3={survey.question3}
          response3={survey.response3}
          key={survey.id}
          id={survey.id} />
      )}
    </React.Fragment>
  );
}

SurveyList.propTypes = {
  surveyList: PropTypes.array,
  onSurveySelection: PropTypes.func
};

export default SurveyList;