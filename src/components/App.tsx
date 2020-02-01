import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Me from "./routes/Me";
import PageNotFound from "./routes/PageNotFound";
import NewsArticle from "./routes/NewsArticle";
import Login from "./routes/Login";

export const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Redirect exact path="/" to="/me" />
        <Route exact path={["/me", "/me/news", "/me/friends"]} component={Me} />
        <Route path="/community/news/:id" component={NewsArticle} />
        <Route path="/login" component={Login} />

        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
};
