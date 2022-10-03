import React from "react";

import Button from "./Button";

import styles from "./HomeButtonHeader.module.css";
import styles2 from "./Button.module.css";

const HomeButtonHeader = (props) => {
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
        {props.label}
      </Button>
    </div>
  );
};

export default HomeButtonHeader;
