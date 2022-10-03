import React, { useState } from "react";

import Button from "../UI/Button";

import styles from "./PrepareCheckingSubContent.module.css";
import styles2 from "../UI/Button.module.css";

const PrepareCheckingSubContent1 = (props) => {
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);

  const onClickHandler = () => {
    setToggle(!toggle);
  };
  const onClickHandler2 = () => {
    setToggle2(!toggle2);
  };

  return (
    <>
      <div className={styles.div_container}>
        <div className={toggle ? styles.div_toggle1 : styles.div_toggle2}>
          <Button
            styles={
              props.select === "전체 점검"
                ? styles2.button_toggleSelected
                : styles2.button_toggle
            }
            type={props.select === "전체 점검" ? "button" : "disabled"}
            onClick={onClickHandler}
          >
            {toggle ? "랜덤" : "순서대로"}
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
