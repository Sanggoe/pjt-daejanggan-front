import React, { useCallback, useEffect, useState } from "react";

let logoutTimer;

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  username: "",
  nickname: "",
  login: (token, expirationTime) => {},
  logout: () => {},
  setUser: () => {},
});

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();

  const remainingDuration = adjExpirationTime - currentTime;

  return remainingDuration;
};

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedExpirationDate = localStorage.getItem("expirationTime");
  const storedUsername = localStorage.getItem("username");
  const storedNickname = localStorage.getItem("nickname");

  const remainingTime = calculateRemainingTime(storedExpirationDate);

  if (remainingTime <= 3600) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    localStorage.removeItem("username");
    localStorage.removeItem("nickname");
    return null;
  }

  return {
    token: storedToken,
    duration: remainingTime,
    username: storedUsername,
    nickname: storedNickname,
  };
};

export const AuthContextProvider = (props) => {
  const tokenData = retrieveStoredToken();
  let initialToken;
  let name1, name2;
  if (tokenData) {
    initialToken = tokenData.token;
    name1 = tokenData.username;
    name2 = tokenData.nickname;
  }

  const [token, setToken] = useState(initialToken);
  const [username, setUsername] = useState(name1);
  const [nickname, setNickname] = useState(name2);

  const userIsLoggedIn = !!token; // !!는 isNotEmpty()의 bool 결과값

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    localStorage.removeItem("username");
    localStorage.removeItem("nickname");

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = useCallback((token, expirationTime) => {
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("expirationTime", expirationTime);
    const remainintTime = calculateRemainingTime(expirationTime);
    logoutTimer = setTimeout(logoutHandler, remainintTime);
  }, []);

  const setUserInfo = useCallback((username, nickname) => {
    setUsername(username);
    setNickname(nickname);
    localStorage.setItem("username", username);
    localStorage.setItem("nickname", nickname);
  }, []);

  useEffect(() => {
    if (tokenData) {
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData]);

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    username: username,
    nickname: nickname,
    login: loginHandler,
    logout: logoutHandler,
    setUser: setUserInfo,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
