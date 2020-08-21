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

              <Link to="/login">Login</Link>

              {/* <Link to="/protected">Protected Page</Link> */}

        </div>
        <Switch>
          <PrivateRoute 
          exact path="/protected" 
          component={BubblePage}
          />
          <Route path="/login" component={Login} />
        
        </Switch>
      </div>
    </Router>
  );
}

export default App;
