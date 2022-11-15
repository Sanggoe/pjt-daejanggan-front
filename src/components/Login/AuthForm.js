import { useState, useRef, useContext } from "react";
import { useHistory } from "react-router-dom";

import classes from "./AuthForm.module.css";
import axios from "axios";
import AuthContext from "../../store/auth-context";
import authHeader from "../../api/auth-header";
import Button from "../UI/Button";

const AuthForm = () => {
  const authCtx = useContext(AuthContext);
  const API_URL = "/api/user";

  const history = useHistory();

  const idInputRef = useRef();
  const passwordInputRef = useRef();
  const passwordInputCheckRef = useRef();
  const nameInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const checkingPassword = () => {
    if (
      passwordInputRef.current.value === passwordInputCheckRef.current.value
    ) {
      return true;
    } else {
      return false;
    }
  };

  const signUpHandler = (e) => {
    if (checkingPassword()) {
      signUp(e);
    } else {
      e.preventDefault();
      alert("Password가 다릅니다!");
    }
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
        if (err.response.status === 400) {
          // valid error 3글자 이상
          alert(err.response.data.fieldErrors[0].defaultMessage);
        } else if (err.response.status === 409) {
          // 중복 회원
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
        authCtx.login(
          JSON.stringify(response.data),
          new Date().getTime() + 2073600000
        ); // 기간 24days
        getUserInfo();

        history.replace("/menu");

        return true;
      })
      .catch((err) => {
        setIsLoading(false);

        /***********************/
        // console.log(JSON.stringify(err))
        if (err.response.status === 400) {
          // valid error 3글자 이상
          alert(err.response.data.fieldErrors[0].defaultMessage);
        } else if (err.response.status === 401) {
          // 틀린 인증정보
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

  // 정보 요청
  const getHello = () => {
    axios
      .get(API_URL + "/hello", {})
      .then((response) => {
        /***********************/
        console.log("response : " + JSON.stringify(response));
        
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

  // const guestinHandler = () => {
  //   console.log(authCtx.isGuest);
  //   authCtx.guestin();
  //   console.log(authCtx.isGuest);
  //   history.replace("/menu");
  // }

  return (
    <>
      <section className={classes.auth}>
        <h1>{isLogin ? "로그인" : "회원 가입"}</h1>
        <form onSubmit={isLogin ? authLogin : signUpHandler}>
          <div className={classes.control}>
            <label htmlFor="id">{isLogin ? "아이디" : "아이디 입력"}</label>
            <input
              className={classes.control_input}
              type="id"
              id="id"
              required
              ref={idInputRef}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">
              {isLogin ? "비밀번호" : "비밀번호 입력"}
            </label>
            <input
              className={classes.control_input}
              type="password"
              id="password"
              required
              ref={passwordInputRef}
            />
          </div>
          {!isLogin && (
            <>
              <div className={classes.control}>
                <label htmlFor="passwordCheck">{"비밀번호 확인"}</label>
                <input
                  className={classes.control_input}
                  type="password"
                  id="passwordCheck"
                  required
                  ref={passwordInputCheckRef}
                />
              </div>
              <div className={classes.control}>
                <label htmlFor="name">{"이름 입력"}</label>
                <input
                  className={classes.control_input}
                  type="name"
                  id="name"
                  required
                  ref={nameInputRef}
                />
              </div>
            </>
          )}
          <div className={classes.actions}>
            {!isLoading && (
              <button type="submit">{isLogin ? "로그인" : "회원 가입"}</button>
            )}
            {isLoading && <p>{"응답을 기다리는 중..."}</p>}
            {/* {isLogin && (
              <button type="button" onClick={guestinHandler}>
                {"Guest"}
              </button>
            )} */}
            <button
              type="button"
              className={classes.toggle}
              onClick={switchAuthModeHandler}
            >
              {isLogin ? "회원가입" : "로그인"}
            </button>
          </div>
        </form>
      </section>
      <Button onClick={getHello}>get Hello</Button>
    </>
  );
};

export default AuthForm;
