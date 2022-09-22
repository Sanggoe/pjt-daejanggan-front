import React from "react";

import Button from "../components/UI/Button";

import styles from "../components/UI/Button.module.css";

const LoginPage = (props) => {
  const onClickHandler = (e) => {
    props.pageLink('MainMenuPage')
  };

  return (
    <div>
      <form>
        <h1>Login Page</h1>
        <div>
          <input type="text" />
        </div>
        <div>
          <input type="password" />
        </div>

        <Button
          styles={styles.button_nav}
          type="button"
          onClick={onClickHandler}
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
