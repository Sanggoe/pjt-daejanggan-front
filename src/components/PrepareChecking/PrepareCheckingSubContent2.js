import React, { useEffect, useState } from "react";
import Button from "../UI/Button";

import styles from "./PrepareCheckingSubContent.module.css";
import styles2 from "../UI/Button.module.css";

const PrepareCheckingSubContent2 = (props) => {
  const [chapterNums, setChapterNums] = useState(props.total < 9 ? 0 : 2);
  const [contentsNums, setContentsNums] = useState(
    props.total < 8 ? props.total : 8
  );
  const [chapterMax, setChapterMax] = useState(props.total - contentsNums);
  const [contentsMax, setContentsMax] = useState(props.total - chapterNums);

  const addChapverseHandler = () => {
    if (chapterNums < chapterMax) {
      setChapterNums(chapterNums + 1);
    }
  };
  const minusChapverseHandler = () => {
    if (chapterNums > 0) {
      if (chapterNums !== 1 || contentsNums !== 0) {
        setChapterNums(chapterNums - 1);
      }
    }
  };

  const addContentsHandler = () => {
    if (contentsNums < contentsMax) {
      setContentsNums(contentsNums + 1);
    }
  };
  const minusContentsHandler = () => {
    if (contentsNums > 0) {
      if (contentsNums !== 1 || chapterNums !== 0) {
        setContentsNums(contentsNums - 1);
      }
    }
  };

  useEffect(() => {
    props.setChapterNums(chapterNums);
    props.setContentsNums(contentsNums);
    setContentsMax(props.total - chapterNums);
    setChapterMax(props.total - contentsNums);
  }, [chapterNums, contentsNums]);

  return (
    <>
      <div className={styles.div_content}>
        <Button
          styles={
            props.select === "일부 점검"
              ? styles2.button_countSelected
              : styles2.button_count
          }
          type="button"
          onClick={addChapverseHandler}
        >
          {"+"}
        </Button>
        <label
          className={
            props.select === "일부 점검" ? styles.inputSelected : styles.input
          }
        >
          장절 [{chapterNums}]
        </label>
        <Button
          styles={
            props.select === "일부 점검"
              ? styles2.button_countSelected
              : styles2.button_count
          }
          type="button"
          onClick={minusChapverseHandler}
        >
          −
        </Button>

        <Button
          styles={
            props.select === "일부 점검"
              ? styles2.button_countSelected
              : styles2.button_count
          }
          type="button"
          onClick={addContentsHandler}
        >
          +
        </Button>
        <label
          className={
            props.select === "일부 점검" ? styles.inputSelected : styles.input
          }
        >
          내용 [{contentsNums}]
        </label>
        <Button
          styles={
            props.select === "일부 점검"
              ? styles2.button_countSelected
              : styles2.button_count
          }
          type="button"
          onClick={minusContentsHandler}
        >
          −
        </Button>
      </div>
    </>
  );
};

export default PrepareCheckingSubContent2;
