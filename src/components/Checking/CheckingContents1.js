import React, { useContext, useEffect, useRef } from "react";
import VerseContext from "../../store/verses-context";

import Card from "../UI/Card";

import styles from "./CheckingContents1.module.css";

const CheckingContents1 = () => {
  const verseCtx = useContext(VerseContext);

  const title = useRef("");
  const chapterName = useRef("");
  const chapter = useRef("");
  const verse = useRef("");

  const onfocusHandler1 = () => {
    if (title.current.value === "| 제목 입력") {
      title.current.value = "";
    }
  };
  const onblurHandler1 = () => {
    if (title.current.value === "") {
      title.current.value = "| 제목 입력";
    } else {
      verseCtx.setInputTitle(title.current.value);
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
      verseCtx.setInputChapterName(chapterName.current.value);
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
      verseCtx.setInputChapter(chapter.current.value);
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
      verseCtx.setInputVerse(verse.current.value);
    }
  };

  return (
    <Card>
      <div className={styles.input}>
        <input
          className={styles.inputTitle}
          type="text"
          defaultValue={"| 제목 입력"}
          onFocus={onfocusHandler1}
          onBlur={onblurHandler1}
          required
          ref={title}
        />
      </div>
      <div className={styles.input}>
        <input
          className={styles.inputChapterName}
          type="text"
          defaultValue="| 성경"
          onFocus={onfocusHandler2}
          onBlur={onblurHandler2}
          ref={chapterName}
        />
        <input
          className={styles.inputChapter}
          type="text"
          defaultValue="| 장"
          onFocus={onfocusHandler3}
          onBlur={onblurHandler3}
          ref={chapter}
        />
        <input
          className={styles.inputChapter}
          type="text"
          defaultValue="| 절"
          onFocus={onfocusHandler4}
          onBlur={onblurHandler4}
          ref={verse}
        />
      </div>
      <div className={styles.label}>
        <label className={styles.labelContent}>
          {verseCtx.checkingProcessInfo.currentVerse &&
            verseCtx.checkingProcessInfo.currentVerse.contents}
        </label>
      </div>
      <div className={styles.label}>
        <label className={styles.labelTheme}>
          {verseCtx.checkingProcessInfo.currentVerse &&
            verseCtx.checkingProcessInfo.currentVerse.theme}
        </label>
      </div>
    </Card>
  );
};

export default CheckingContents1;
