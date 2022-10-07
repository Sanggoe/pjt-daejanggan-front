import React, { useContext, useRef } from "react";
import VerseContext from "../../store/verses-context";

import Card from "../UI/Card";

import styles from "./CheckingContents2.module.css";

const CheckingContents2 = () => {
  const verseCtx = useContext(VerseContext);

  const head = useRef("");
  const chapterName = useRef("");
  const chapter = useRef("");
  const verse = useRef("");

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
    if (chapterName.current.value === "| 성경") {
      chapterName.current.value = "";
    }
  };
  const onblurHandler2 = () => {
    if (chapterName.current.value === "") {
      chapterName.current.value = "| 성경";
    } else {
      verseCtx.setInputChapterName(chapterName.current.value)
    }
  };
  const onfocusHandler3 = () => {
    if (chapter.current.value === "| 장") {
      chapter.current.value = "";
    }
  };
  const onblurHandler3 = () => {
    if (chapter.current.value === "") {
      chapter.current.value = "| 장";
    } else {
      verseCtx.setInputChapter(chapter.current.value)
    }
  };
  const onfocusHandler4 = () => {
    if (verse.current.value === "| 절") {
      verse.current.value = "";
    }
  };
  const onblurHandler4 = () => {
    if (verse.current.value === "") {
      verse.current.value = "| 절";
    } else {
      verseCtx.setInputVerse(verse.current.value)
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
      <div className={styles.input}>
        <input
          className={styles.inputChapterName}
          type="text"
          defaultValue="| 성경"
          value={verseCtx.chapterName}
          onFocus={onfocusHandler2}
          onBlur={onblurHandler2}
          ref={chapterName}
        />
        <input
          className={styles.inputChapter}
          type="text"
          defaultValue="| 장"
          value={verseCtx.chapter}
          onFocus={onfocusHandler3}
          onBlur={onblurHandler3}
          ref={chapter}
        />
        <input
          className={styles.inputChapter}
          type="text"
          defaultValue="| 절"
          value={verseCtx.verse}
          onFocus={onfocusHandler4}
          onBlur={onblurHandler4}
          ref={verse}
        />
      </div>
      <div className={styles.label}>
        <label>{verseCtx.checkingVerseInfos[0].contents}</label>
      </div>
    </Card>
  );
};

export default CheckingContents2;