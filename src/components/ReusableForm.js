import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='question1'
          placeholder='Enter your question here!'
        /><br />
        <textarea
          name='response1'
          placeholder='answer' /><br />
        <input
          type='text'
          name='question2'
          placeholder='Enter your question here!'
        /><br />
        <textarea
          name='response2'
          placeholder='answer' /><br />
        <input
          type='text'
          name='question3'
          placeholder='Enter your question here!'
        /><br />
        <textarea
          name='response3'
          placeholder='answer' /><br />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;