import React from 'react';
import Header from './Header';
// import SurveyList from "./SurveyList";
import SurveyControl from './SurveyControl';
// import '../../src/App.css';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Header />
        <hr />
        <SurveyControl />
      </React.Fragment>
    </div>
  );
}

export default App;
