import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <ProtectedRoute
          exact
          path="/"
          component={() => <h1>authenticated</h1>}
        />
      </Switch>
    </Router>
  );
}

export default App;
