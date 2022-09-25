import React from "react";

import Button from "../UI/Button";

import styles from "./PrepareCheckingContent.module.css";
import styles2 from "../UI/Button.module.css";

const PrepareCheckingContent = (props) => {
  const onClickHandler = (e) => {
    props.onSelect(e.target.name);
  };

  return (
    <div className={styles.content}>
      <Button
        styles={
          props.select === props.label
            ? styles2.button_itemSelected
            : styles2.button_item
        }
        type="button"
        onClick={onClickHandler}
      >
        {props.label}
      </Button>
      {props.children}
    </div>
  );
};

export default PrepareCheckingContent;
