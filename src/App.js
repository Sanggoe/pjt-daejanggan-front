import React from "react";

import MainMenuPage from "./pages/MainMenuPage";
import MyInfoPage from "./pages/MyInfoPage";
import LoginPage from "./pages/LoginPage";
import PracticingPage from "./pages/PracticingPage";
import PrepareCheckingPage from "./pages/PrepareCheckingPage";
import StatisticsPage from "./pages/StatisticsPage";
import CheckingPage from "./pages/CheckingPage";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <LoginPage />
      </Route>
      <Route path="/menu">
        <MainMenuPage />
      </Route>
      <Route path="/myInfo">
        <MyInfoPage />
      </Route>
      <Route path="/practicing">
        <PracticingPage />
      </Route>
      <Route path="/prepareChecking">
        <PrepareCheckingPage />
      </Route>
      <Route path="/checking">
        <CheckingPage />
      </Route>
      <Route path="/statistics">
        <StatisticsPage />
      </Route>
    </Switch>
  );
}

export default App;
