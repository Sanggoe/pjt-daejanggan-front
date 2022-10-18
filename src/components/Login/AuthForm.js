import { useState, useRef, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

import classes from "./AuthForm.module.css";
import axios from "axios";
import AuthContext from "../../store/auth-context";
import authHeader from "../../api/auth-header";

const AuthForm = () => {
  const API_URL = "http://192.168.5.40:8080/api";
  const history = useHistory();
  const authCtx = useContext(AuthContext);

  const idInputRef = useRef();
  const passwordInputRef = useRef();
  const nameInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  // 회원가입
  const signUp = (e) => {
    e.preventDefault();

    setIsLoading(true);

    const payload = {
      username: idInputRef.current.value,
      password: passwordInputRef.current.value,
      nickname: nameInputRef.current.value,
    };

    axios
      .post(API_URL + "/signup", payload)
      .then((response) => {
        setIsLoading(false);

        /***********************/
        // console.log("response : " + JSON.stringify(response));
        if (response.status === 200) {
          alert("회원가입 성공!");
          setIsLogin((prevState) => !prevState);
          return response;
        }
      })
      .catch((err) => {
        setIsLoading(false);

        /***********************/
        // console.log(JSON.stringify(err))
        if (err.response.status === 400) { // valid error 3글자 이상
          alert(err.response.data.fieldErrors[0].defaultMessage);
        } else if (err.response.status === 409) { // 중복 회원
          alert(err.response.data.message);
        }
      });
  };

  // 로그인
  const authLogin = (e) => {
    e.preventDefault();

    setIsLoading(true);

    const payload = {
      username: idInputRef.current.value,
      password: passwordInputRef.current.value,
    };

    axios
      .post(API_URL + "/authenticate", payload)
      .then((response) => {
        setIsLoading(false);
        
        /***********************/
        // console.log("response : " + JSON.stringify(response));
        authCtx.login(JSON.stringify(response.data), 86400)
        getUserInfo();

        history.replace("/menu");

        return true;
      })
      .catch((err) => {
        setIsLoading(false);

        /***********************/
        // console.log(JSON.stringify(err))
        if (err.response.status === 400) { // valid error 3글자 이상
          alert(err.response.data.fieldErrors[0].defaultMessage);
        } else if (err.response.status === 401) { // 틀린 인증정보
          alert("ID 또는 PW를 다시 입력하세요");
        }
      });
  };

  // 정보 요청
  const getUserInfo = () => {
    axios
      .get(API_URL + "/user", {
        headers: authHeader(),
      })
      .then((response) => {
        /***********************/
        //console.log("response : " + JSON.stringify(response));
        authCtx.setUser(response.data.username, response.data.nickname);
        return response;
      })
      .catch((err) => {
        /***********************/
        console.log("error : " + JSON.stringify(err));
        alert(
          "Error 발생!! 이게 나면 에러 로그를 캡쳐해서 개발자에게 보내주세요"
        );
      });
  };

  return (
    <>
      <section className={classes.auth}>
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        <form onSubmit={isLogin ? authLogin : signUp}>
          <div className={classes.control}>
            <label htmlFor="id">{isLogin ? "Your Id" : "Make Your Id"}</label>
            <input type="id" id="id" required ref={idInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">
              {isLogin ? "Your Password" : "Make Your Password"}
            </label>
            <input
              type="password"
              id="password"
              required
              ref={passwordInputRef}
            />
          </div>
          {!isLogin && (
            <div className={classes.control}>
              <label htmlFor="name">Your Name</label>
              <input type="name" id="name" required ref={nameInputRef} />
            </div>
          )}
          <div className={classes.actions}>
            {!isLoading && (
              <button type="submit">{isLogin ? "로그인" : "회원 가입"}</button>
            )}
            {isLoading && <p>Sending request...</p>}

            <button
              type="button"
              className={classes.toggle}
              onClick={switchAuthModeHandler}
            >
              {isLogin ? "Create new account" : "Login with existing account"}
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default AuthForm;
