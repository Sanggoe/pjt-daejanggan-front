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
          {verseCtx.checkingContentsResponse.correctContents
            .split(" ")
            .map((word, i) => (
              <label
                className={
                  word.substring(word.length - 4, word.length) === "633w"
                    ? styles.labelWrong
                    : word.substring(word.length - 4, word.length) === "633i"
                    ? styles.labelInvert
                    : word.substring(word.length - 4, word.length) === "633m"
                    ? styles.labelMiss
                    : word.substring(word.length - 4, word.length) === "633a"
                    ? styles.labelAdded
                    : word.substring(word.length - 4, word.length) === "633r"
                    ? styles.labelRight
                    : word.substring(word.length - 4, word.length) === "633h"
                    ? styles.labelHint
                    : word.substring(word.length - 4, word.length) === "633u"
                    ? styles.labelUnchecked
                    : word.substring(word.length - 4, word.length) === "633v"
                    ? styles.labelVerified
                    : word.substring(word.length - 4, word.length) === "633c"
                    ? styles.labelCovered
                    : null
                }
                key={word + i}
              >
                {["633h", "633v"].includes(
                  word.substring(word.length - 4, word.length)
                )
                  ? word.substring(0, word.length - 4)
                  : ["633c"].includes(
                      word.substring(word.length - 4, word.length)
                    )
                  ? "[\u00A0\u00A0\u00A0\u00A0]"
                  : ""}
              </label>
            ))}
        </label>
      </div>
    </Card>
  );
};

export default CheckingContentsHint;