import React, { useContext, useEffect, useRef } from "react";
import VerseContext from "../../store/verses-context";

import Card from "../UI/Card";

import styles from "./CheckingContents2.module.css";

const CheckingContents2 = () => {
  const verseCtx = useContext(VerseContext);

  const title = useRef("");
  const contents = useRef("");

  const onfocusHandler1 = () => {
    if (title.current.value === "| 제목") {
      title.current.value = "";
    }
  };
  const onblurHandler1 = () => {
    if (title.current.value === "") {
      title.current.value = "| 제목";
    } else {
      verseCtx.setInputTitle(title.current.value)
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

  useEffect(() => {
    console.log(verseCtx.checkingInfoResponse.verse);
  }, [])

  return (
    <Card>
      <div className={styles.input}>
        <input
          className={styles.inputTitle}
          type="text"
          defaultValue={"| 제목"}
          value={verseCtx.title}
          onFocus={onfocusHandler1}
          onBlur={onblurHandler1}
          required
          ref={title}
        />
      </div>
      <div className={styles.label}>
        <label className={styles.labelChapVerse}>
          {verseCtx.checkingInfoResponse.verse.chapverse}
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
      <div className={styles.label}>
        <label className={styles.labelTheme}>
          {verseCtx.checkingInfoResponse.verse.theme}
        </label>
      </div>
    </Card>
  );
};

export default CheckingContents2;