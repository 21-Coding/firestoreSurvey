import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function NewSurveyForm(props) {

  function handleNewSurveyFormSubmission(event) {
    event.preventDefault();
    props.onNewSurveyCreation({
      question1: event.target.question1.value,
      response1: event.target.response1.value,
      question2: event.target.question2.value,
      response2: event.target.response2.value,
      question3: event.target.question3.value,
      response3: event.target.response3.value,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewSurveyFormSubmission}
        buttonText='Submit' />
    </React.Fragment>
  );
}

NewSurveyForm.propTypes = {
  onNewSurveyCreation: PropTypes.func
};

export default NewSurveyForm;