import React, { useState } from "react";

import styles from './TopicSubContent.module.css'

const TopicSubContent = (props) => {
  const [check, setCheck] = useState(false);

  const onChangeHandler = (e) => {
    if (!check) {
      props.onAddHeadList(e.target.id)
    } else {
      props.onRemoveHeadList(e.target.id)
    }
    setCheck(!check);
  }

  return (
    <>
      <div className={styles.content}>
        <label
          className={!check ? styles.label : styles.label_clicked}
          id={props.head}
        >
          <input
            className={styles.input}
            type="checkbox"
            checked={check}
            onChange={(e) => onChangeHandler(e)}
            id={props.head}
          />
          {props.head} ({props.len})
        </label>
      </div>
    </>
  );
};

export default TopicSubContent;
