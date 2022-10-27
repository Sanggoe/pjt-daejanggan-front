import React, { useState } from "react";
import Button from "../UI/Button";

import styles from "./PrepareCheckingSubContent.module.css";
import styles2 from "../UI/Button.module.css";

const PrepareCheckingSubContent2 = (props) => {
  const [chapterNums, setChapterNums] = useState(props.total < 9 ? 0 : 2);
  const [contentsNums, setContentsNums] = useState(
    props.total < 8 ? props.total : 8
  );
  const [chapterMax, setChapterMax] = useState(0);
  const [contentsMax, setContentsMax] = useState(0);

  const addChapverseHandler = () => {
    setChapterNums(chapterNums + 1);
  };
  const minusChapverseHandler = () => {
    setChapterNums(chapterNums - 1);
  };

  const addContentsHandler = () => {
    setContentsNums(contentsNums + 1);
  };
  const minusContentsHandler = () => {
    setContentsNums(contentsNums - 1);
  };

  // 구절 수 나중에 추가해서 정확하게 계산하여 수정하기
  const onChangeHandler1 = () => {
    if (chapterNums.current.value <= chapterMax) {
      props.setChapterNums(chapterNums);
    } else {
    }
  };

  // 구절 수 나중에 추가해서 정확하게 계산하여 수정하기
  const onChangeHandler2 = () => {
    if (contentsNums.current.value <= contentsMax) {
      props.setContentsNums(contentsNums);
    } else {
      // alert(
      //   "장절과 내용 합이 점검할 총 구절의 개수(" +
      //     props.total +
      //     ")보다 작아야 합니다"
      // );
    }
  };

  return (
    <>
      <div className={styles.div_content}>
        <label
          className={
            props.select === "일부 점검" ? styles.inputSelected : styles.input
          }
        >
          장절
        </label>
        <Button
          styles={styles2.button_count}
          type="button"
          onClick={addChapverseHandler}
        >
          +
        </Button>
        <label
          className={
            props.select === "일부 점검" ? styles.inputSelected : styles.input
          }
        >
          [{chapterNums}]
        </label>
        <Button
          styles={styles2.button_count}
          type="button"
          onClick={minusChapverseHandler}
        >
          -
        </Button>
        <label
          className={
            props.select === "일부 점검" ? styles.inputSelected : styles.input
          }
        ></label>
        <label
          className={
            props.select === "일부 점검" ? styles.inputSelected : styles.input
          }
        >
          내용
        </label>
        <Button
          styles={styles2.button_count}
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
          [{contentsNums}]
        </label>
        <Button
          styles={styles2.button_count}
          type="button"
          onClick={minusContentsHandler}
        >
          -
        </Button>
      </div>
    </>
  );
};

export default PrepareCheckingSubContent2;
