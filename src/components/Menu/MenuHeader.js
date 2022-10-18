import React, { useContext } from "react";

import Button from "../UI/Button";

import styles from "./MenuHeader.module.css";
import styles2 from "../UI/Button.module.css";
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";

const MenuHeader = () => {
  const authCtx = useContext(AuthContext);

  return (
    <div className={styles.header}>
      <Link to="/myInfo">
        <Button styles={styles2.button_header} type="button">
          내 정보
        </Button>
      </Link>
      <Link to="/">
        <Button styles={styles2.button_header} type="button" onClick={authCtx.logout}>
          로그아웃
        </Button>
      </Link>
    </div>
  );
};

export default MenuHeader;
