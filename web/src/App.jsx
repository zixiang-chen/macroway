import React from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./pages/Home";
import Article from "./components/Article";
import ArticleList from "./pages/ArticleList";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/articles">
        <ArticleList />
      </Route>
      <Route path={"/article/:articleid"}>
        <Article />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
)

export default App;