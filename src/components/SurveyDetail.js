import React from 'react';
import PropTypes from 'prop-types';

function SurveyDetail(props) {
  const { survey, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Survey Details</h1>
      <h3>{survey.question1}</h3>
      <h3>{survey.response1}</h3>
      <h3>{survey.question2}</h3>
      <h3>{survey.response2}</h3>
      <h3>{survey.question3}</h3>
      <h3>{survey.response3}</h3>
      <button onClick={props.onClickingEdit}>Update Survey</button>
      <button onClick={() => onClickingDelete(survey.id)}>Delete Survey</button>
      <hr />
    </React.Fragment>
  );
}

SurveyDetail.propTypes = {
  survey: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default SurveyDetail;