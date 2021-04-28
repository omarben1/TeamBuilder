import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import  React from 'react';
import Home from './pages/Home';
import CreateTeam from './pages/CreateTeam';
import JoinTeam from './pages/JoinTeam';
import './index.css';
import TeamList from './pages/TeamList';


function App() {
  return (
    <React.Fragment>
      <nav><h1>Team<span>Builder</span></h1></nav>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/CreateTeam">
            <CreateTeam></CreateTeam>
          </Route>
          <Route exact path="/TeamList">
            <TeamList></TeamList>
          </Route>
          <Route path="/TeamList/:teamId">
            <JoinTeam></JoinTeam>
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
