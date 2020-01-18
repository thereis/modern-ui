import React from "react";
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect } from "react-router-dom";
import Me from "containers/home/Me";
import PageNotFound from "containers/PageNotFound";
import NewsArticle from "containers/community/NewsArticle";
import Profile from "containers/home/Profile";

export const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/me" component={Me} />
        <Route path="/community/news/:id" component={NewsArticle} />
        {/* <Route path="/settings" component={} */}
        <Route exact path="/profile" component={Profile} />
        <Redirect exact path="/" to="/me" />
      </Switch>
    </Router>
  );
};
