import React from "react";

import styles from "./PrepareCheckingSubContent.module.css";

const PrepareCheckingSubContent2 = (props) => {
  return (
    <>
      <p>
        장절 [
        <input
          className={
            props.select === "일부 점검" ? styles.inputSelected : styles.input
          }
          type="number"
          min='0'
          defaultValue={2}
        />
        ] 개 / 내용 [
        <input
          className={
            props.select === "일부 점검" ? styles.inputSelected : styles.input
          }
          type="number"
          min='0'
          defaultValue={8}
        />
        ] 개
      </p>
    </>
  );
};

export default PrepareCheckingSubContent2;
