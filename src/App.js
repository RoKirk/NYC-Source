import React from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import './App.css';
import LandingPage from './Components/LandingPage';
import HomePage from './Components/HomePage';
import PopulationView from './Components/Views/PopulationView';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (

    <div className="App">

      <Switch>

        <Route
          exact path="/"
          render={(props) => (
            <LandingPage {...props}/>
          )} />
        
        <Route 
          exact path="/homepage"
          component={HomePage} />
        
        <Route 
          exact path="/population"
          component={PopulationView} />

      </Switch>

    </div >
  );
}

export default withRouter(App);
