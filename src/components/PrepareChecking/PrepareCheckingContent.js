import React from "react";

import Button from "../UI/Button";

import styles from "./PrepareCheckingContent.module.css";
import styles2 from "../UI/Button.module.css";

const PrepareCheckingContent = (props) => {
  const onClickHandler = (e) => {
    if (props.weight === "일부 점검") {
      props.onSelect(props.weight);
      alert("73구절을 다 포함하거나\n73구절 이내에서 선택해야\n체급별 점검이 가능합니다.")
    } else {
      props.onSelect(e.target.name);
    }
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
