import React from 'react';
import PropTypes from 'prop-types';
import Survey from './Survey';

function SurveyList() {
  return (
    <React.Fragment>
      <hr />
      {surveys.map((survey) => {
        return <Survey
          whenSurveyClicked={props.onSurveySelection}
          title={survey.title}
          key={survey.id}
          id={survey.id}
        />
      })}
    </React.Fragment>
  );
}

Survey.propTypes = {
  onSurveySelection: PropTypes.func
};

export default SurveyList;