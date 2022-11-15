import React, { useContext } from "react";

import Button from "../UI/Button";

import styles from "./MenuHeader.module.css";
import styles2 from "../UI/Button.module.css";
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";

const MenuHeader = (props) => {
  const authCtx = useContext(AuthContext);

  const logoutHandler = () => {
    props.onClick();
    authCtx.logout();
  }

  return (
    <div className={styles.header}>
      <Link to="/help">
        <Button styles={styles2.button_header} type="button">
          도움말
        </Button>
      </Link>
      <Link to="/myInfo">
        <Button styles={styles2.button_header} type="button">
          내 정보
        </Button>
      </Link>
      <Link to="/">
        <Button
          styles={styles2.button_header}
          type="button"
          onClick={logoutHandler}
        >
          로그아웃
        </Button>
      </Link>
    </div>
  );
};

export default MenuHeader;
