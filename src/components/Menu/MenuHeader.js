import React from "react";

import Button from "../UI/Button";

import styles from "./MenuHeader.module.css";
import styles2 from "../UI/Button.module.css";
import { Link } from "react-router-dom";

const MenuHeader = () => {
  return (
    <div className={styles.header}>
      <Link to="/myInfo">
        <Button styles={styles2.button_header} type="button">
          내 정보
        </Button>
      </Link>
      <Link to="/">
        <Button styles={styles2.button_header} type="button">
          로그아웃
        </Button>
      </Link>
    </div>
  );
};

export default MenuHeader;
