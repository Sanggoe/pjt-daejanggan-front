import React from "react";

import Button from "../UI/Button";

import styles from "./PrepareCheckingHeader.module.css";
import styles2 from "../UI/Button.module.css";

const PrepareCheckingHeader = (props) => {
  const onClickHander = () => {
    props.pageLink("MainMenuPage");
  };

  return (
    <div className={styles.header}>
      <Button
        styles={styles2.button_home}
        type="button"
        onClick={onClickHander}
      >
        뒤로가기
      </Button>
    </div>
  );
};

export default PrepareCheckingHeader;
