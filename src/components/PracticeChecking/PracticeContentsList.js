import React from "react";
import PracticeContent from "./PracticeContent";

import styles from './PracticeContent.module.css'

const PracticeContentsList = (props) => {
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
    </>
  );
};

export default PracticeContentsList;
