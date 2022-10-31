import React from "react";
import Card from "../UI/Card";
import ResultContent from "./ResultContent";
import ResultScore from "./ResultScore";

import styles from "./ResultContentsList.module.css";

const ResultContentsList = (props) => {

  return (
    <>
      <Card>
        <div className={styles.labelTitleArea}>
          <label className={styles.labelChapverse}>장절</label>
          <label className={styles.labelMinus}>감점</label>
          <label className={styles.labelScore}>점수</label>
        </div>
        <div className={styles.labelContentsArea}>
          {props.verseCtx.checkingProcessInfo.resultVerse.map((resultVerse) => (
            <ResultContent
              key={resultVerse.currentVerse.index}
              resultVerse={resultVerse}
              onAddIndexList={props.verseCtx.addIndexList}
              onRemoveIndexList={props.verseCtx.removeIndexList}
            />
          ))}
          <p></p>
        </div>
      </Card>
      <Card>
        <ResultScore
          resultScore={props.verseCtx.checkingProcessInfo.resultScore}
        />
      </Card>
      <div className={styles.messageArea}>
        <label className={styles.labelMessage}>{"※ 점검한 말씀 보기를 눌러야 기록이 저장됩니다"}</label>
      </div>
    </>
  );
};

export default ResultContentsList;