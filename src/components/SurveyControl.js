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
    this.setState({ selectedSurvey: firestoreSurvey })
  })
}

