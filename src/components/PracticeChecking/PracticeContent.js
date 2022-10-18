import React from "react";
import Card from "../UI/Card";

import styles from "./PracticeContent.module.css";

const PracticeContent = (props) => {
  return (
    <Card>
      <div className={styles.label}>
        <label // 제목
          className={styles.labelTitle}
          type="text"
        >
          {props.title}
        </label>
      </div>
      <div className={styles.label}>
        <label // 성경 장 절
          className={styles.labelChapVerse}
          type="text"
        >
          {props.chapverse}
        </label>
      </div>
      <div className={styles.label}>
        <label // 내용
          className={styles.labelContent}
          type="text"
        >
          {props.contents}
        </label>
      </div>

      <div className={styles.label}>
        <label // 소분류
          className={styles.labelHeadBottom}
          type="text"
        >
          {props.head}
        </label>
        <label // 성경 장 절
          className={styles.labelChapVerseBottom}
          type="text"
        >
          {props.chapverse}
        </label>
      </div>
    </Card>
  );
};

export default PracticeContent;
