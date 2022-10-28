import React, { useContext } from "react";

import MainMenuPage from "./pages/MainMenuPage";
import MyInfoPage from "./pages/MyInfoPage";
import LoginPage from "./pages/LoginPage";
import PracticingPage from "./pages/PracticingPage";
import PrepareCheckingPage from "./pages/PrepareCheckingPage";
import StatisticsPage from "./pages/StatisticsPage";
import CheckingPage from "./pages/CheckingPage";
import { Redirect, Route, Switch } from "react-router-dom";
import AuthContext from "./store/auth-context";
import VerseContext from "./store/verses-context";
import ResultPage from "./pages/ResultPage";

const App = () => {
  const authCtx = useContext(AuthContext);
  const verseCtx = useContext(VerseContext);

  return (
    <Switch>
      <Route path="/" exact>
        {!authCtx.isLoggedIn && <LoginPage />}
        {authCtx.isLoggedIn && <Redirect to="/menu" />}
      </Route>
      <Route path="/menu">
        {authCtx.isLoggedIn && <MainMenuPage />}
        {!authCtx.isLoggedIn && <Redirect to="/" />}
      </Route>
      <Route path="/myInfo">
        {authCtx.isLoggedIn && <MyInfoPage />}
        {!authCtx.isLoggedIn && <Redirect to="/" />}
      </Route>
      <Route path="/practicing">
        {authCtx.isLoggedIn && verseCtx.checkingInfoRequest.headList.length && (
          <PracticingPage />
        )}
        {authCtx.isLoggedIn &&
          !verseCtx.checkingInfoRequest.headList.length && (
            <Redirect to="/menu" />
          )}
        {!authCtx.isLoggedIn && <Redirect to="/" />}
      </Route>
      <Route path="/prepareChecking">
        {authCtx.isLoggedIn &&
          verseCtx.checkingProcessInfo.checkingProcessingState ===
            "preparing" &&
          verseCtx.checkingInfoRequest.headList.length && (
            <PrepareCheckingPage />
          )}
        {authCtx.isLoggedIn &&
          (verseCtx.checkingProcessInfo.checkingProcessingState !==
            "preparing" ||
            !verseCtx.checkingInfoRequest.headList.length) && (
            <Redirect to="/menu" />
          )}
        {!authCtx.isLoggedIn && <Redirect to="/" />}
      </Route>
      <Route path="/checking">
        {authCtx.isLoggedIn &&
          verseCtx.checkingProcessInfo.checkingProcessingState === "checking" &&
          verseCtx.checkingInfoRequest.headList.length && <CheckingPage />}
        {authCtx.isLoggedIn &&
          (verseCtx.checkingProcessInfo.checkingProcessingState !==
            "checking" ||
            !verseCtx.checkingInfoRequest.headList.length) && (
            <Redirect to="/menu" />
          )}
        {!authCtx.isLoggedIn && <Redirect to="/" />}
      </Route>
      <Route path="/result">
        {authCtx.isLoggedIn && verseCtx.checkingInfoRequest.headList.length && (
          <ResultPage />
        )}
        {authCtx.isLoggedIn &&
          !verseCtx.checkingInfoRequest.headList.length && (
            <Redirect to="/menu" />
          )}
        {!authCtx.isLoggedIn && <Redirect to="/" />}
      </Route>
      <Route path="/statistics">
        {authCtx.isLoggedIn && <StatisticsPage />}
        {!authCtx.isLoggedIn && <Redirect to="/" />}
      </Route>
      <Route path="*">
        {authCtx.isLoggedIn && <Redirect to="/menu" />}
        {!authCtx.isLoggedIn && <Redirect to="/" />}
      </Route>
    </Switch>
  );
};

export default App;
