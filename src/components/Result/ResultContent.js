import React, { useEffect, useState } from "react";

import styles from "./ResultContent.module.css";

const ResultContent = (props) => {
  const [check, setCheck] = useState(true);

  const onChangeHandler = (e) => {
    if (!check) {
      props.onAddIndexList(Number(e.target.id));
    } else {
      props.onRemoveIndexList(Number(e.target.id));
    }
    setCheck(!check);
  };

  useEffect(() => {
    props.onAddIndexList(props.resultVerse.currentVerse.index);
  }, [])

  return (
    <>
      <div className={styles.labelArea}>
        <label className={styles.labelChapverse}>
          <input
            type="checkbox"
            id={props.resultVerse.currentVerse.index}
            checked={check}
            onChange={(e) => onChangeHandler(e)}
          />
          {props.resultVerse.currentVerse.chapverse}
        </label>
        <label className={styles.labelMinus}>
          {props.resultVerse.currentScoreInfo.currentMinus}
        </label>
        <label className={styles.labelScore}>
          {props.resultVerse.currentScoreInfo.currentScore}
        </label>
      </div>
    </>
  );
};

export default ResultContent;
