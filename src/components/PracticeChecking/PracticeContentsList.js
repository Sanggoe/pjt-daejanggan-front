import React, { useContext, useEffect } from "react";
import VerseContext from "../../store/verses-context";
import PracticeContent from "./PracticeContent";

import styles from './PracticeContent.module.css'

const PracticeContentsList = (props) => {
  const verseCtx = useContext(VerseContext);

  useEffect(() => {
    verseCtx.setCheckingProcessingState("none");
  }, [])

  return (
    <>
      {props.verses.map((verse) => (
        <PracticeContent
          key={verse.theme + verse.chapverse + verse.subhead}
          className={styles.content}
          title={verse.title}
          chapverse={verse.chapverse}
          contents={verse.contents}
          head={verse.head}
          subhead={verse.subhead}
        />
      ))}
      {!props.verses.length && "아무것도 없네요"}
    </>
  );
};

export default PracticeContentsList;