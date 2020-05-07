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
          title={survey.title}
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