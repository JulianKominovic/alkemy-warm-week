import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { PostsContextProvider } from "./context/PostsContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PostEdit from "./pages/PostEdit";
import PostInfo from "./pages/PostInfo";

function App() {
  return (
    <PostsContextProvider>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/info/:id" component={PostInfo} />
          <ProtectedRoute exact path="/edit/:id" component={PostEdit} />
          <ProtectedRoute path="/" component={Home} />
        </Switch>
      </Router>
    </PostsContextProvider>
  );
}

export default App;
