import React, { useContext } from "react";
import VerseContext from "../../store/verses-context";

import Card from "../UI/Card";

import styles from "./CheckingContentsHint.module.css";

const CheckingContentsHint = () => {
  const verseCtx = useContext(VerseContext);

  return (
    <Card>
      <div className={styles.label}>
        <label className={styles.labelChapVerse}>{"구절 힌트 정보"}</label>
      </div>
      <div className={styles.input}>
        <label className={styles.labelContent}>
          {verseCtx.checkingProcessInfo.currentContents.map((word, i) => (
            <label
              className={
                verseCtx.checkingContentsResponse.hintIndexes.indexOf(i) !== -1
                  ? styles.lableHint
                  : i <
                    verseCtx.checkingContentsResponse.hintIndexes.slice(-1)[0]
                  ? styles.labelCorrect
                  : styles.labelDisable
              }
              key={"Hint" + i}
            >
              {word}
            </label>
          ))}
        </label>
      </div>
    </Card>
  );
};

export default CheckingContentsHint;