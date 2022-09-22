import React from "react";

import Button from "../UI/Button";

import styles from "./MenuFooter.module.css";
import styles2 from "../UI/Button.module.css";

const MenuFooter = (props) => {
  const onClickHander1 = () => {
    props.pageLink(props.links[0]);
  };
  const onClickHander2 = () => {
    props.pageLink(props.links[1]);
  };

  return (
    <div className={styles.footer}>
      <Button
        styles={
          props.len === 1 ? styles2.button_footer1 : styles2.button_footer2
        }
        type="button"
        onClick={onClickHander1}
      >
        {props.labels[0]}
      </Button>
      {props.len === 2 && (
        <Button
          styles={styles2.button_footer2}
          type="button"
          onClick={onClickHander2}
        >
          {props.labels[1]}
        </Button>
      )}
    </div>
  );
};

export default MenuFooter;
