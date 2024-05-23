import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserActivityList } from "./userActivity/UserActivityList";
import { UserActivityCreate } from "./userActivity/UserActivityCreate";
import { UserActivityEdit } from "./userActivity/UserActivityEdit";
import { UserActivityShow } from "./userActivity/UserActivityShow";
import { AnalyticsEventList } from "./analyticsEvent/AnalyticsEventList";
import { AnalyticsEventCreate } from "./analyticsEvent/AnalyticsEventCreate";
import { AnalyticsEventEdit } from "./analyticsEvent/AnalyticsEventEdit";
import { AnalyticsEventShow } from "./analyticsEvent/AnalyticsEventShow";
import { CommentAnalysisList } from "./commentAnalysis/CommentAnalysisList";
import { CommentAnalysisCreate } from "./commentAnalysis/CommentAnalysisCreate";
import { CommentAnalysisEdit } from "./commentAnalysis/CommentAnalysisEdit";
import { CommentAnalysisShow } from "./commentAnalysis/CommentAnalysisShow";
import { PostViewList } from "./postView/PostViewList";
import { PostViewCreate } from "./postView/PostViewCreate";
import { PostViewEdit } from "./postView/PostViewEdit";
import { PostViewShow } from "./postView/PostViewShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"AnalyticsService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="UserActivity"
          list={UserActivityList}
          edit={UserActivityEdit}
          create={UserActivityCreate}
          show={UserActivityShow}
        />
        <Resource
          name="AnalyticsEvent"
          list={AnalyticsEventList}
          edit={AnalyticsEventEdit}
          create={AnalyticsEventCreate}
          show={AnalyticsEventShow}
        />
        <Resource
          name="CommentAnalysis"
          list={CommentAnalysisList}
          edit={CommentAnalysisEdit}
          create={CommentAnalysisCreate}
          show={CommentAnalysisShow}
        />
        <Resource
          name="PostView"
          list={PostViewList}
          edit={PostViewEdit}
          create={PostViewCreate}
          show={PostViewShow}
        />
      </Admin>
    </div>
  );
};

export default App;
