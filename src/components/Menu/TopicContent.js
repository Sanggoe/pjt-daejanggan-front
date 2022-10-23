import React, { useState } from "react";

import Button from "../UI/Button";
import TopicSubContentsList from "./TopicSubContentsList";

import styles from "./TopicContent.module.css";
import styles2 from "../UI/Button.module.css";

const TopicContent = (props) => {
  const [toggle, setToggle] = useState(false);

  const onClickHandler = () => {
    if (toggle) {
      props.headList.map((head) => props.onRemoveHeadList(head.head));
    }
    setToggle(!toggle);
  };

  return (
    <div className={styles.content}>
      <Button
        styles={!toggle ? styles2.button_item : styles2.button_itemSelected}
        type="button"
        onClick={onClickHandler}
      >
        {props.theme}
      </Button>
      {toggle && (
        <TopicSubContentsList
          headList={props.headList}
          onAddHeadList={props.onAddHeadList}
          onRemoveHeadList={props.onRemoveHeadList}
        />
      )}
    </div>
  );
};

export default TopicContent;
