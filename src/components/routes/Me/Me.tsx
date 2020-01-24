import React from "react";
import MainLayout from "components/layout/MainLayout";
import { Switch, Route } from "react-router-dom";
import NewsTab from "./Tabs/NewsTab";

import FriendsTab from "./Tabs/FriendsTab";

interface MeProps {
  visibleTab: string;
}

const Me: React.FC<MeProps> = ({ visibleTab }) => {
  return (
    <MainLayout isHomepage={true}>
      <Switch>
        <Route exact path={["/me", "/me/news"]} component={NewsTab} />
        <Route path="/me/friends" component={FriendsTab} />
        {/* <Route path="/me/badges" component={BadgesTab} /> */}
      </Switch>
    </MainLayout>
  );
};

export default Me;
