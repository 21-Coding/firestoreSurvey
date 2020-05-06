import React from 'react';
import NewSurveyForm from './NewSurveyForm';
import SurveyList from './SurveyList';
import SurveyDetail from './SurveyDetail';
import EditSurveyForm from './EditSurveyForm';


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

// handleClick = () => {
//   const { dispatch } = this.props;
//   const action = a.toggleForm();
//   dispatch(action);
//   this.setState({ selectedSurvey: null });
// }

handleAddingNewSurveyToList = (newSurvey) => {
  const newMasterSurveyList = this.state.masterSurveyList.concat(newSurvey);
  this.setState({
    masterSurveyList: newMasterSurveyList,
    formVisibleOnPage: false
  });
}

// handleAddingNewSurveyToList = () => {
//   const { dispatch } = this.props;
//   const action = a.toggleForm();
//   dispatch(action);
// }

handleChangingSelectedSurvey = (id) => {
  const selectedSurvey = this.state.masterSurveyList.filter(ticket => ticket.id === id)[0];
  this.setState({ selectedSurvey: selectedSurvey });
}

// handleChangingSelectedSurvey = (id) => {
//   this.props.firestone.get({ collection: 'surveys', doc: id }).then((survey) => {
//     const firestoreSurvey = {
//       names: survey.get("names"),
//       language: survey.get("language"),
//       framework: survey.get("framework"),
//       id: survey.id
//     }
//     this.setState({ selectedSurvey: firestoreSurvey });
//   });
// }

// handleEditClick = () => {
//   this.setState({ editing: true });
// }

// handleEditingTicketInList = () => {
//   this.setState({
//     editing: false,
//     selectedSurvey: null
//   });
// }

render(){
  let currentlyVisibleState = null;
  let buttonText = null;

  if (this.state.selectedSurvey != null) {
    currentlyVisibleState =
      <SurveyDetail
        survey={this.state.selected}
        onClickingDelete={this.handleDeletingSurvey}
        onClickingEdit={this.handleEditClick} />
    buttonText = "Return to Survey List";
  } else if (this.state.formVisibleOnPage) {
    currentlyVisibleState = <NewSurveyForm onNewSurveyicketCreation={this.handleAddiSurveyicketToList} />;
    buttonText = "ReturSurveyicket List";
  } else {
    currentlyVisibleStatSurveyicketsurveyicketList = {
      this.state.mSurveyicketLisSurveyicketSelection = { this.handleChangingselected } />;
      buttonText = Surveyicket";
}
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export defSurveyicketControl;

// render() {
//   const auth = this.props.firebase.auth();
//   if (!isLoaded(auth)) {
//     return (
//       <React.Fragment>
//         <h1>Loading...</h1>
//       </React.Fragment>
//     )
//   }
// }
// if ((isLoaded(auth)) & (auth.currentUser == null)) {
//   return (
//     <React.Fragment>
//       <h1>You must be signed in to access the queue.</h1>
//     </React.Fragment>
//   )
// }
// if ((isLoaded(auth)) && (auth.currentUser != null)) {
//   let currentlyVisibleState = null;
//   let buttonText = null;
//   if (this.state.editing) {

//   }


// }

