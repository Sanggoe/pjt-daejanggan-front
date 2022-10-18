import axios from "axios";
import { useCallback, useState } from "react";

const API_URL = "http://localhost:8080/api";

const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); // alert(error); 활용

  // 로그인
  const login = (username, password) => {
    return axios
      .post(API_URL + "/authenticate", {
        username: username,
        password: password,
      })
      .then((response) => {
        // response가 토큰을 포함하면
        if (response.data.token) {
          alert("로그인 성공!");
          return response;
        } else {
          return (data) => {
            let errorMessage = "로그인 실패!";
            if (data.message) {
              errorMessage = data.message;
            }
            throw new Error(errorMessage);
          };
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  // 로그아웃
  const logout = () => {
    localStorage.removeItem("user");
  };

  // 현재 사용자 정보 가져오기
  const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  };

  return {

  };
};

export default useAuth;
