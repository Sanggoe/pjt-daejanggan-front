import React from "react";
import Card from "../UI/Card";
import ResultContent from "./ResultContent";
import ResultScore from "./ResultScore";

import styles from "./ResultContentsList.module.css"

const ResultContentsList = () => {
  
  return (
    <>
      <Card>
        <div className={styles.labelTitleArea}>
          <label className={styles.labelChapverse}>장절</label>
          <label className={styles.labelMinus}>감점</label>
          <label className={styles.labelScore}>점수</label>
        </div>
        <div className={styles.labelContentsArea}>
        <ResultContent />
          <ResultContent /><ResultContent />
          <ResultContent /><ResultContent />
          <ResultContent /><ResultContent />
          <ResultContent /><ResultContent />
          <ResultContent />
          <p></p>
        </div>
      </Card>
      <Card>
        <ResultScore />
      </Card>
    </>
  );
};

export default ResultContentsList;
