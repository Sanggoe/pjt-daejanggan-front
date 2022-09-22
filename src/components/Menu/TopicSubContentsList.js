import React from "react";

import styles from "./TopicSubContentsList.module.css";
import TopicSubContent from "./TopicSubContent";

const TopicSubContentsList = (props) => {
  return (
    <div className={styles.content}>
      {props.subLabels.map((subLabel) => (
        <TopicSubContent key={subLabel} label={subLabel} />
      ))}
    </div>
  );
};

export default TopicSubContentsList;
