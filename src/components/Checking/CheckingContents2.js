import React, { useContext, useRef } from "react";
import VerseContext from "../../store/verses-context";

import Card from "../UI/Card";

import styles from "./CheckingContents2.module.css";

const CheckingContents2 = () => {
  const verseCtx = useContext(VerseContext);

  const head = useRef("");
  const contents = useRef("");

  const onfocusHandler1 = () => {
    if (head.current.value === "| 제목") {
      head.current.value = "";
    }
  };
  const onblurHandler1 = () => {
    if (head.current.value === "") {
      head.current.value = "| 제목";
    } else {
      verseCtx.setInputHead(head.current.value)
    }
  };
  const onfocusHandler2 = () => {
    if (contents.current.value === "| 내용") {
      contents.current.value = "";
    }
  };
  const onblurHandler2 = () => {
    if (contents.current.value === "") {
      contents.current.value = "| 내용";
    } else {
      verseCtx.setInputChapterName(contents.current.value)
    }
  };

  return (
    <Card>
      <div className={styles.input}>
        <input
          className={styles.inputHead}
          type="text"
          defaultValue={"| 제목"}
          value={verseCtx.head}
          onFocus={onfocusHandler1}
          onBlur={onblurHandler1}
          required
          ref={head}
        />
      </div>
      <div className={styles.label}>
        <label className={styles.labelChapVerse}>
          {verseCtx.checkingInfoResponse[0].chapverse}
        </label>
      </div>
      <div className={styles.input}>
        <textarea
          className={styles.inputContents}
          type="text"
          defaultValue="| 내용"
          value={verseCtx.contents}
          onFocus={onfocusHandler2}
          onBlur={onblurHandler2}
          ref={contents}
        />
      </div>
    </Card>
  );
};

export default CheckingContents2;