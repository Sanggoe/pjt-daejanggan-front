import React, { useEffect, useRef } from "react";

import styles from "./PrepareCheckingSubContent.module.css";

const PrepareCheckingSubContent2 = (props) => {
  const chapterNums = useRef();
  const contentsNums = useRef();

  // 구절 수 나중에 추가해서 정확하게 계산하여 수정하기
  const onChangeHandler1 = () => {
    if (
      !props.weight |
      (Number(chapterNums.current.value) + Number(contentsNums.current.value) <=
        Number(props.weight))
    ) {
      props.setChapterNums(chapterNums.current.value);
    } else {
      alert(
        "점검할 장절과 내용 개수 합이 선택한 구절의 체급(" +
          props.weight +
          ")보다 작아야 합니다"
      );
    }
  };

  // 구절 수 나중에 추가해서 정확하게 계산하여 수정하기
  const onChangeHandler2 = () => {
    if (
      !props.weight |
      (Number(chapterNums.current.value) + Number(contentsNums.current.value) <=
        Number(props.weight))
    ) {
      props.setContentsNums(contentsNums.current.value);
    } else {
      alert(
        "점검할 장절과 내용 개수 합이 선택한 구절의 체급(" +
          props.weight +
          ")보다 작아야 합니다 (아직 수정중)"
      );
    }
  };

  useEffect(() => {
    props.setChapterNums(chapterNums.current.value);
    props.setContentsNums(contentsNums.current.value);
  });

  return (
    <>
      <div className={styles.div_content}>
        장절 [
        <input
          className={
            props.select === "일부 점검" ? styles.inputSelected : styles.input
          }
          type="number"
          min="0"
          defaultValue={2}
          ref={chapterNums}
          onChange={onChangeHandler1}
        />
        ] 개 / 내용 [
        <input
          className={
            props.select === "일부 점검" ? styles.inputSelected : styles.input
          }
          type="number"
          min="0"
          defaultValue={8}
          ref={contentsNums}
          onChange={onChangeHandler2}
        />
        ] 개
      </div>
    </>
  );
};

export default PrepareCheckingSubContent2;
