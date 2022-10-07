import React, { useState } from "react";

import styles from './TopicSubContent.module.css'

const TopicSubContent = (props) => {
  const [check, setCheck] = useState(false);
  
  const onClickHandler = (e) => {
    if (!check) {
      props.onAddHeadList(e.target.id)
    } else {
      props.onRemoveHeadList(e.target.id)
    }
    setCheck(!check);
  };

  const onChangeHandler = () => {}

  return (
    <>
      <div className={styles.content}>
        <span onClick={onClickHandler}>
          <input
            type="checkbox"
            checked={check}
            onChange={onChangeHandler}
            id={props.head}
          />
          <label
            className={!check ? styles.label : styles.label_clicked}
            id={props.head}
          >
            {props.head}
          </label>
        </span>
      </div>
    </>
  );
};

export default TopicSubContent;
