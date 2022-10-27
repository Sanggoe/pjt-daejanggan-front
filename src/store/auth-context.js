import React, { useCallback, useEffect, useState } from "react";

let logoutTimer;

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  // isGuest: false,
  username: "",
  nickname: "",
  login: (token, expirationTime) => {},
  logout: () => {},
  // guestin: () => {},
  setUser: () => {},
});

// 유효 인증 기한 계산 함수
const calculateRemainingTime = (expirationTime) => {
  if (!expirationTime) {
    return null;
  }

  const currentTime = (new Date().getTime());
  const adjExpirationTime = new Date(expirationTime).getTime();
  const remainingDuration = adjExpirationTime - currentTime;

  return remainingDuration;
};

// localStorage로 부터 토큰 및 정보들 받아오는 함수
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

  if (storedToken) {
    return {
      token: storedToken,
      duration: remainingTime,
      username: storedUsername,
      nickname: storedNickname,
    };
  } else {
    return null;
  }
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
  
  // const [isGuest, setIsGuest] = useState(false);
  const userIsLoggedIn = !!token; // !!는 isNotEmpty()의 bool 결과값

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    localStorage.removeItem("username");
    localStorage.removeItem("nickname");

    if (logoutTimer) {
      // 타이머 존재하면 없애준다.
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = useCallback((token, expirationTime) => {
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("expirationTime", expirationTime);

    const remainintTime = calculateRemainingTime(expirationTime);

    let leftTime = remainintTime < 86400000 ? remainintTime : 86400000;
    logoutTimer = setTimeout(logoutHandler, leftTime); // 토큰 만료 시간 기준 자동 로그아웃
  }, [logoutHandler]);

  // const guestinHandler = useCallback(() => {
  //   setIsGuest(true);
  //   console.log("guest는 " + isGuest)
  // }, []);

  const setUserInfo = useCallback((username, nickname) => {
    setUsername(username);
    setNickname(nickname);
    localStorage.setItem("username", username);
    localStorage.setItem("nickname", nickname);
  }, []);

  useEffect(() => {
    if (tokenData) {
      if (logoutTimer) {
        clearTimeout(logoutTimer);
      }
      let calculateTime = calculateRemainingTime(tokenData.duration)
      if (calculateTime) {
        let leftTime = calculateTime < 86400000 ? calculateTime : 86400000;
        logoutTimer = setTimeout(logoutHandler, leftTime);
      }
    }
  }, [logoutHandler, tokenData]);

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    // isGuest: isGuest,
    username: username,
    nickname: nickname,
    login: loginHandler,
    logout: logoutHandler,
    // guestin: guestinHandler,
    setUser: setUserInfo,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;