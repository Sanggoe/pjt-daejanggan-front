import React, { useContext } from "react";

import Button from "../UI/Button";

import styles from "../UI/Footer.module.css";
import styles2 from "../UI/Button.module.css";
import { Link } from "react-router-dom";
import VerseContext from "../../store/verses-context";

const MenuFooter1 = (props) => {
  const verseCtx = useContext(VerseContext);

  const warningMessage = () => {
    if (!verseCtx.checkingInfoRequest.headList.length) {
      alert("목록을 선택하세요");
    }
  };

  return (
    <div className={styles.footer}>
      <Link to={verseCtx.checkingInfoRequest.headList.length ? props.path1 : "/menu"}>
        <Button
          styles={
            props.len === 1 ? styles2.button_footer1 : styles2.button_footer2
          }
          type="button"
          onClick={warningMessage}
        >
          {props.labels[0]}
        </Button>
      </Link>
    </div>
  );
};

export default MenuFooter1;
