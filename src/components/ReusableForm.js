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
        />
      </form>
    </React.Fragment>
  );
}