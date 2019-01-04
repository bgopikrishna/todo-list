import React, { Component } from "react";
import "./App.css";
import TodayTodo from "./pages/TodayTodo";
import NavMenu from "./components/NavMenu";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavMenu />
          <Switch>
            <Route path="/" component={TodayTodo} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
