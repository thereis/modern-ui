import React from "react";
import MainLayout from "components/layout/MainLayout";
import { Switch, Route } from "react-router-dom";
import NewsTab from "./Tabs/NewsTab";

import FriendsTab from "./Tabs/FriendsTab";
import NewsPreviewContainer from "components/NewsPreviewContainer";

const Me: React.FC = () => {
  return (
    <MainLayout isHomepage={true}>
      <div className="hidden lg:flex">
        <div className="bg-gray-100 rounded w-2/3 flex justify-between border border-gray-400 p-1 flex flex-col mr-2 self-start">
          <div
            className="bg-center w-full h-32 rounded-t"
            style={{ backgroundImage: `url(/assets/images/view_ca_wide.png)` }}
          ></div>
          <div className="relative h-10 rounded-b-sm flex">
            <div
              className="absolute bg-no-repeat bg-bottom -mt-24 ml-2"
              style={{
                backgroundImage: `url(/assets/images/podium.png)`,
                padding: `0 25px 38px 22px`
              }}
            >
              <img
                alt="Habbo Figure"
                src={`https://www.habbo.nl/habbo-imaging/avatarimage?figure=${process.env.REACT_APP_HABBO_FIGURE}`}
              />
            </div>
            <div className="ml-32"></div>
            <div className="bg-blue-400">Test</div>
          </div>
        </div>
        <div className="bg-gray-100 border border-gray-400 rounded w-1/3 p-1 self-start">
          <NewsPreviewContainer />
        </div>
      </div>
      <Switch>
        <Route path="/me/news" component={NewsTab} />
        <Route path="/me/friends" component={FriendsTab} />
        {/* <Route path="/me/badges" component={BadgesTab} /> */}
      </Switch>
    </MainLayout>
  );
};

export default Me;
