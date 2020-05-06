import React from 'react';
import NewSurveyForm from './NewSurveyForm';
import SurveyList from './SurveyList';
import SurveyDetail from './SurveyDetail';
// import EditSurveyForm from './EditSurveyForm';


class SurveyControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterSurveyList: [],
      selectedSurvey: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedSurvey != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedTicket: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewSurveyToList = (newSurvey) => {
    const newMasterSurveyList = this.state.masterSurveyList.concat(newSurvey);
    this.setState({
      masterSurveyList: newMasterSurveyList,
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedSurvey = (id) => {
    const selectedSurvey = this.state.masterSurveyList.filter(ticket => ticket.id === id)[0];
    this.setState({ selectedSurvey: selectedSurvey });
  }

  handleDeletingSurvey = (id) => {
    const newMasterSurveyList = this.ListeningStateChangedEvent.masterSurveyList.filter(survey => survey.id !== id);
    this.setState({
      masterSurveyList: newMasterSurveyList,
      selectedSurvey: null
    });
  }

  handleEditClick = () => {
    this.setState({ editing: true });
  }

  handleEditingSurveyInList = (surveyToEdit) => {
    const editedMasterSurveyList = this.state.masterSurveyList
      .filter(survey => survey.id !== this.state.selectedSurvey.id)
      .concat(surveyToEdit);
    this.setState({
      masterSurveyList: editedMasterSurveyList,
      editing: false,
      selectedSurvey: null
    });
  }


  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedSurvey != null) {
      currentlyVisibleState =
        <SurveyDetail
          survey={this.state.selectedSurvey}
          onClickinDelete={this.handleDeletingSurvey}
          onClickingEdit={this.handleEditClick} />

      buttonText = "Return to Survey List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewSurveyForm onNewSurveyCreation={this.handleAddingNewSurveyToList} />;
      buttonText = "Return to Survey List";
    } else {
      currentlyVisibleState = <SurveyList surveyList={this.state.masterSurveyList} onSurveySelection={this.handleChangingSelectedSurvey} />;
      buttonText = "Add Survey";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default SurveyControl;