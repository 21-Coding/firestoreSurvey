import React from 'react';
import NewSurveyForm from './NewSurveyForm';
import SurveyList from './SurveyList';
import SurveyDetail from './SurveyDetail';
import EditSurveyForm from './EditSurveyForm';


class SurveyControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedSurvey: null,
      editing: false
    };
  }
}

handleClick = () => {
  const { dispatch } = this.props;
  const action = a.toggleForm();
  dispatch(action);
  this.setState({ selectedSurvey: null });
}

handleAddingNewSurveyToList = () => {
  const { dispatch } = this.props;
  const action = a.toggleForm();
  dispatch(action);
}

handleChangingSelectedSurvey = (id) => {
  this.props.firestone.get({ collection: 'surveys', doc: id }).then((survey) => {
    const firestoreSurvey = {
      names: survey.get("names"),
      language: survey.get("language"),
      framework: survey.get("framework"),
      id: survey.id
    }
    this.setState({ selectedSurvey: firestoreSurvey });
  });
}

handleEditClick = () => {
  this.setState({ editing: true });
}

handleEditingTicketInList = () => {
  this.setState({
    editing: false,
    selectedSurvey: null
  });
}

render() {
  const auth = this.props.firebase.auth();
  if (!isLoaded(auth)) {
    return (
      <React.Fragment>
        <h1>Loading...</h1>
      </React.Fragment>
    )
  }
}
if ((isLoaded(auth)) & (auth.currentUser == null)) {
  return (
    <React.Fragment>
      <h1>You must be signed in to access the queue.</h1>
    </React.Fragment>
  )
}
if ((isLoaded(auth)) && (auth.currentUser != null)) {
  let currentlyVisibleState = null;
  let buttonText = null;
  if (this.state.editing) {

  }


}

