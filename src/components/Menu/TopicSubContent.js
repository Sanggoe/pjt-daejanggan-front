import React, { useState } from "react";

import styles from './TopicSubContent.module.css'

const TopicSubContent = (props) => {
  const [check, setCheck] = useState(false);

  const onClickHandler = (e) => {
    if (!check) {
      console.log(e.target.id)
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
            id={props.label}
          />
          <label
            className={!check ? styles.label : styles.label_clicked}
            id={props.label}
          >
            {props.label}
          </label>
        </span>
        {/* <Button style={styles2.button_showItems}>펼치기</Button> */}
      </div>

      {/* <div>
        {props.verses.titles.map((title) => (
          <li>{title}</li>
        ))}
      </div> */}
    </>
  );
};

export default TopicSubContent;
