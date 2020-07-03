import React from "react";
import ExperiencesList from "./components/ExperiencesList";
import AddExperience from "./components/AddExperience";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/add">
          <div className="add">
            <AddExperience />
          </div>
        </Route>
        <Route path="/">
          <div className="experience">
            <ExperiencesList />
          </div>
        </Route>
        {/* <Route path="/">
            <Home />
          </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
