import React from "react";

import Button from "../UI/Button";

import styles from "./MenuHeader.module.css";
import styles2 from "../UI/Button.module.css";

const MenuHeader = (props) => {
  const onClickHander1 = () => {
    props.pageLink('ManageUsersPage')
  };
  const onClickHander2 = () => {
    props.pageLink('MyInfoPage')
  };
  const onClickHander3 = () => {
    props.pageLink('LoginPage')
  };

  return (
    <div className={styles.header}>
      <Button
        styles={styles2.button_header}
        type="button"
        onClick={onClickHander1}
      >
        회원관리
      </Button>
      <Button
        styles={styles2.button_header}
        type="button"
        onClick={onClickHander2}
      >
        내 정보
      </Button>
      <Button
        styles={styles2.button_header}
        type="button"
        onClick={onClickHander3}
      >
        로그인
      </Button>
    </div>
  );
};

export default MenuHeader;