import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditSurveyForm(props) {
  const { survey } = props;

  function handleEditSurveyFormSubmission(event) {
    event.preventDefault();
    props.onEditSurvey({ title: event.target.title.value, id: survey.id });
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