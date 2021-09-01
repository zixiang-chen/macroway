import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import Article from "./components/Article";
import ArticleList from "./pages/ArticleList";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { userContext } from "./util";
import { auth } from "./firebase/core";
import { onAuthStateChanged } from "firebase/auth";


const App = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const authStateObserver = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    // cleanup: unsubscribe
    return authStateObserver;
  }, []);

  return (
    <userContext.Provider value={user}>
      <Router>
        <Header />
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/settings">
            <Settings />
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
    </userContext.Provider>
  );
}

export default App;