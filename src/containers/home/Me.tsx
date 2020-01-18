import React from "react";
import MainLayout from "components/layout/MainLayout";
import { Switch, Route, Redirect } from "react-router-dom";
import FriendsTab from "containers/home_tabs/FriendsTab";
import NewsTab from "containers/home_tabs/NewsTab";

const Me = () => {
  const subPages = [
    { url: "/me/news", name: "News" },
    { url: "/me/friends", name: "Friends" },
    { url: "/me/badges", name: "Badges" }
  ];

  return (
    <MainLayout headerCollapsed={false} subPages={subPages}>
      <Switch>
        <Route exact path={["/", "/me", "/me/news"]} component={NewsTab} />
        <Route path="/me/friends" component={FriendsTab} />
        {/* <Route path="/me/badges" component={BadgesTab} /> */}
      </Switch>
    </MainLayout>
  );
};

export default Me;
