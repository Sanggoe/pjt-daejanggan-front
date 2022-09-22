import React from "react";

import TypeContent from "./TypeContent";

import styles from "./TopicContentsList.module.css";

const TypeContentsList = (props) => {
  return (
    <div className={styles.contents}>
      {props.types.map((type) => (
        <TypeContent key={type.label} label={type.label}></TypeContent>
      ))}
    </div>
  );
};

export default TypeContentsList;
