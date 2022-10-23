import React from "react";

import cell from "../../asserts/images/cell.png";
import styles from "./PrepareCheckingSubContent.module.css";

const PrepareCheckingSubContent3 = (props) => {
  return (
    <>
      <div className={styles.div_content}>
        선택된 체급 [{" "}
        <label
          className={
            props.select === "체급별 점검" ? styles.labelSelected : styles.label
          }
        >
          {props.weight} 체급
        </label>{" "}
        ]
      </div>
      <img src={cell} className={styles.img} alt={"체급표"} />
    </>
  );
};

export default PrepareCheckingSubContent3;
