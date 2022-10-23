import React from "react";

import styles from "./TopicSubContentsList.module.css";
import TopicSubContent from "./TopicSubContent";

const TopicSubContentsList = (props) => {
  return (
    <div className={styles.content}>
      {props.headList.map((head) => (
        <TopicSubContent
          key={head.head}
          head={head.head}
          len={head.len}
          onAddHeadList={props.onAddHeadList}
          onRemoveHeadList={props.onRemoveHeadList}
        />
      ))}
    </div>
  );
};

export default TopicSubContentsList;
