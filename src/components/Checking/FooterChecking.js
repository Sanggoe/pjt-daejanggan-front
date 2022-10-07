import React from "react";

import Button from "../UI/Button";

import styles from "../UI/Footer.module.css";
import styles2 from "../UI/Button.module.css";
import { Link } from "react-router-dom";

const FooterChecking = (props) => {
  return (
    <div className={styles.footer}>
        <Button
          styles={
            props.len === 1 ? styles2.button_footer1 : styles2.button_footer2
          }
          type="button"
          onClick={props.onClick}
        >
          {props.labels[0]}
        </Button>
      {props.len === 2 && (
        <Link to={props.path}>
          <Button styles={styles2.button_footer2} type="button">
            {props.labels[1]}
          </Button>
        </Link>
      )}
    </div>
  );
};

export default FooterChecking;
