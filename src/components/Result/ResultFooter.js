import React from "react";

import Button from "../UI/Button";

import styles from "../UI/Footer.module.css";
import styles2 from "../UI/Button.module.css";
import { Link } from "react-router-dom";

const ResultFooter = (props) => {
  return (
    <div className={styles.footer}>
      <Link to={props.path}>
        <Button
          styles={
            props.len === 1 ? styles2.button_footer1 : styles2.button_footer2
          }
          type="button"
          onClick={props.onClick}
        >
          {props.labels[0]}
        </Button>
      </Link>
    </div>
  );
};

export default ResultFooter;
