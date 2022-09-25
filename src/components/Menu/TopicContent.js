import React, { useState } from "react";

import Button from "../UI/Button";
import TopicSubContentsList from "./TopicSubContentsList";

import styles from "./TopicContent.module.css";
import styles2 from "../UI/Button.module.css";

const TopicContent = (props) => {
  const [toggle, setToggle] = useState(false);

  const onClickHandler = () => {
    setToggle(!toggle);
  };

  return (
    <div className={styles.content}>
      <Button
        styles={!toggle ? styles2.button_item : styles2.button_itemSelected}
        type="button"
        onClick={onClickHandler}
      >
        {props.label}
      </Button>
      {toggle && <TopicSubContentsList subLabels={props.subLabels} verses={props.verses}/>}
    </div>
  );
};

export default TopicContent;
