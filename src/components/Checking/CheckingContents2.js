import React, { useContext, useEffect, useRef } from "react";
import VerseContext from "../../store/verses-context";
import Button from "../UI/Button";

import Card from "../UI/Card";

import styles from "./CheckingContents2.module.css";

const CheckingContents2 = () => {
  const verseCtx = useContext(VerseContext);

  const title = useRef("");
  const contents = useRef("");

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
    if (contents.current.value === "| 내용") {
      contents.current.value = "";
    }
  };
  const onblurHandler2 = () => {
    if (contents.current.value === "") {
      contents.current.value = "| 내용";
    } else {
      verseCtx.setInputContents(contents.current.value);
    }
  };
  // const onResponseHandler = () => {
  //   contents.current.value = "또 증거는 이거시니";
  // };

  // const

  // useEffect(() => {
  //   if (verseCtx.checkingContentsResponse) {
  //     let contentResult = "";
  //     verseCtx.checkingContentsResponse.correctContents
  //       .split(" ")
  //       .map(
  //         (word) =>
  //           (contentResult += ["633h", "633v", "633c"].includes(
  //             word.substring(word.length - 4, word.length)
  //           )
  //             ? word.substring(0, word.length - 4) + " "
  //             : "")
  //       );
  //     console.log(contentResult);
  //     contents.current.value = contentResult;
  //     verseCtx.setInputContents(contents.current.value);
  //   }
  // }, [verseCtx.checkingContentsResponse]);

  return (
    <>
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
        <div className={styles.label}>
          <label className={styles.labelChapVerse}>
            {verseCtx.checkingProcessInfo.currentVerse.chapverse}
          </label>
        </div>
        <div className={styles.input}>
          <textarea
            className={styles.inputContents}
            type="text"
            defaultValue="| 내용"
            onFocus={onfocusHandler2}
            onBlur={onblurHandler2}
            ref={contents}
          >
            {}
          </textarea>
        </div>
        <div className={styles.label}>
          <label className={styles.labelTheme}>
            {verseCtx.checkingProcessInfo.currentVerse &&
              verseCtx.checkingProcessInfo.currentVerse.theme}
          </label>
        </div>
      </Card>

      {/* <Button onClick={onResponseHandler}>Change Input</Button> */}
    </>
  );
};

export default CheckingContents2;
