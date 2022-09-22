import React from "react";

import styles from "./TopicContentsList.module.css";
import TopicContent from "./TopicContent";

const TopicContentsList = (props) => {
  
  return (
    <div className={styles.contents}>
      {props.topics.map((topic) => (
        <TopicContent
          key={topic.label}
          label={topic.label}
          subLabels={topic.subLabel}
        />
      ))}
    </div>
  );
};

export default TopicContentsList;
