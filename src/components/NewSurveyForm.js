import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function NewSurveyForm(props) {

  function handleNewSurveyFormSubmission(event) {
    event.preventDefault();
    props.onNewSurveyCreation({
      title: event.target.title.value,


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
  onNewSurveyCreatioin: PropTypes.func
};

export default NewSurveyForm;