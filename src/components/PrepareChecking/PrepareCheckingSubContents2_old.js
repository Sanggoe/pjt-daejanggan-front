import React, { useEffect, useRef, useState } from "react";

import styles from "./PrepareCheckingSubContent.module.css";

const PrepareCheckingSubContent2 = (props) => {
  const chapterNums = useRef(0);
  const contentsNums = useRef(0);
  const [chapterMax, setChapterMax] = useState(0);
  const [contentsMax, setContentsMax] = useState(0);
  const [overflow, setOverflow] = useState(false);

  // 구절 수 나중에 추가해서 정확하게 계산하여 수정하기
  const onChangeHandler1 = () => {
    if (chapterNums.current.value <= chapterMax) {
      props.setChapterNums(chapterNums.current.value);
    } else {
      // alert(
      //   "장절과 내용 합이 점검할 총 구절의 개수(" +
      //     props.total +
      //     ")보다 작아야 합니다"
      // );
      setOverflow(true);
    }
  };

  // 구절 수 나중에 추가해서 정확하게 계산하여 수정하기
  const onChangeHandler2 = () => {
    if (contentsNums.current.value <= contentsMax) {
      props.setContentsNums(contentsNums.current.value);
    } else {
      // alert(
      //   "장절과 내용 합이 점검할 총 구절의 개수(" +
      //     props.total +
      //     ")보다 작아야 합니다"
      // );
      setOverflow(true);
    }
  };

  useEffect(() => {
    props.setChapterNums(chapterNums.current.value);
    props.setContentsNums(contentsNums.current.value);
    console.log("장절 / 내용 : " + chapterNums.current.value, contentsNums.current.value)
    setChapterMax(props.total - contentsNums.current.value)
    setContentsMax(props.total - chapterNums.current.value)
    console.log("장절Max / 내용Max : " + chapterMax, contentsMax)
  }, [chapterNums.current.value, contentsNums.current.value]);

  useEffect(() => {
    console.log("으아ㅏㅇ")
    props.setChapterNums(0);
    props.setContentsNums(0);
    setOverflow(false)
  }, [overflow])

  return (
    <>
      <div className={styles.div_content}>
        장절 [
        <input
          className={
            props.select === "일부 점검" ? styles.inputSelected : styles.input
          }
          type="number"
          min={0}
          max={chapterMax}
          defaultValue={props.total < 9 ? 0 : 2}
          ref={chapterNums}
          onChange={onChangeHandler1}
        />
        ] 개 / 내용 [
        <input
          className={
            props.select === "일부 점검" ? styles.inputSelected : styles.input
          }
          type="number"
          min={0}
          max={contentsMax}
          defaultValue={props.total < 8 ? props.total : 8}
          ref={contentsNums}
          onChange={onChangeHandler2}
        />
        ] 개
      </div>
    </>
  );
};

export default PrepareCheckingSubContent2;
