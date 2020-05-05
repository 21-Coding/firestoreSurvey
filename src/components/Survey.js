import React from 'react';
import PropTypes from 'prop-types';

function Survey(props) {
  return (
    <React.Fragment>
      <div onCLick={() => props.whenSurveyClicked(props.id)}>
        <h3><em>{props.title}</em></h3>
      </div>
      <hr />
    </React.Fragment>
  );
}

Survey.propTypes = {

}