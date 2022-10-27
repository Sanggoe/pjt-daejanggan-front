import React, { useState } from "react";

import Button from "../UI/Button";

import styles from "./PrepareCheckingSubContent.module.css";
import styles2 from "../UI/Button.module.css";

const PrepareCheckingSubContent1 = (props) => {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);

  const onClickHandler1 = () => {
    if (toggle1) {
      props.setOrderType("랜덤");
    } else {
      props.setOrderType("순서대로");
    }
    setToggle1(!toggle1);
  };
  const onClickHandler2 = () => {
    if (toggle2) {
      props.setVerseType("내용");
    } else {
      props.setVerseType("장절");
    }
    setToggle2(!toggle2);
  };

  return (
    <>
      <div className={styles.div_container}>
        <div className={toggle1 ? styles.div_toggle1 : styles.div_toggle2}>
          <Button
            styles={
              props.select === "전체 점검"
                ? styles2.button_toggleSelected
                : styles2.button_toggle
            }
            type={props.select === "전체 점검" ? "button" : "disabled"}
            onClick={onClickHandler1}
          >
            {toggle1 ? "순서대로" : "랜덤"}
          </Button>
        </div>
        <div className={toggle2 ? styles.div_toggle1 : styles.div_toggle2}>
          <Button
            styles={
              props.select === "전체 점검"
                ? styles2.button_toggleSelected
                : styles2.button_toggle
            }
            onClick={onClickHandler2}
          >
            {toggle2 ? "장절" : "내용"}
          </Button>
        </div>
      </div>
    </>
  );
};

export default PrepareCheckingSubContent1;
