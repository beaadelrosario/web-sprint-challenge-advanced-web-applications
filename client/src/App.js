import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "./styles.scss";
import PrivateRoute from "./components/PrivateRoute";

import BubblePage from "./components/BubblePage";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="appNav">
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/protected">Protected Page</Link>
            </li>
          </ul>
        </div>
        <Switch>
          <PrivateRoute 
          exact path="/protected" 
          component={BubblePage}
          />
          <Route exact path="/login" component={Login} />
          <Route>
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
