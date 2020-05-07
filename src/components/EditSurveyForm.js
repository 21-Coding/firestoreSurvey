import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditSurveyForm(props) {
  const { survey } = props;

  function handleEditSurveyFormSubmission(event) {
    event.preventDefault();
    props.onEditSurvey({
      question1: event.target.question1.value,
      response1: event.target.response1.value,
      question2: event.target.question2.value,
      response2: event.target.response2.value,
      question3: event.target.question3.value,
      response3: event.target.response3.value,
      id: survey.id
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditSurveyFormSubmission}
        buttonText="Update Survey" />
    </React.Fragment>
  );
}

EditSurveyForm.propTypes = {
  onEditSurvey: PropTypes.func
};

export default EditSurveyForm;