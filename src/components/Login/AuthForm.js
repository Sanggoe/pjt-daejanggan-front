import axios from "axios";
import { useState, useRef, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import Button from "../UI/Button";

import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const history = useHistory();
  const idInputRef = useRef();
  const passwordInputRef = useRef();
  const nameInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredId = idInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredName = nameInputRef.current.value;

    // setIsLoading(true);

    axios.post('http://localhost:8080/api/signup', {
      username:enteredId,
      password:enteredPassword,
      nickname:enteredName
    }).then(response => {
      console.log(response)
    })
    // if (isLogin) {
    //   url = "http://localhost:8080/api/authenticate";
    //   // "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCX5jBkSYRYEud58rSNaK7xJ_OWCxGpROo";
    // } else {
    //   url = "http://localhost:8080/api/signup";
    //   // "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCX5jBkSYRYEud58rSNaK7xJ_OWCxGpROo";
    // }
    // fetch(url, {
    //   method: "POST",
    //   body: JSON.stringify({
    //     username: enteredId,
    //     password: enteredPassword,
    //     nickname: enteredName,
    //   }),
    //   header: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((res) => {
    //     setIsLoading(false);
    //     if (res.ok) {
    //       return res.json();
    //     } else {
    //       return res.json().then((data) => {
    //         let errorMessage = "Authentication failed!";
    //         // if (data && data.error && data.error.message) {
    //         //   errorMessage = data.error.message;
    //         // }

    //         throw new Error(errorMessage);
    //       });
    //     }
    //   })
    //   .then((data) => {
    //     const expirationTime = new Date(
    //       new Date().getTime() + +data.expiresIn * 1000
    //     );
    //     authCtx.login(data.idToken, expirationTime.toISOString());
    //     history.replace("/");
    //   })
    //   .catch((err) => {
    //     alert(err.message);
    //   });
  };

  return (
    <>
      <section className={classes.auth}>
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        <form onSubmit={submitHandler}>
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
            {!isLoading && <button>{isLogin ? "로그인" : "회원 가입"}</button>}
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
      <Link to="/menu">
        <Button>메뉴로 가는 버튼</Button>
      </Link>
    </>
  );
};

export default AuthForm;
