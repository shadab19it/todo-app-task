import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import TodoApp from "./compnents/TodoApp";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={TodoApp} />
      </Switch>
    </Router>
  );
}

export default App;
