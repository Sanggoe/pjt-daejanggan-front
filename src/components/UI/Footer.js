import React from "react";

import Button from "./Button";

import styles from "./Footer.module.css";
import styles2 from "../UI/Button.module.css";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <div className={styles.footer}>
      <Link to={props.path1}>
        <Button
          styles={
            props.len === 1 ? styles2.button_footer1 : styles2.button_footer2
          }
          type="button"
        >
          {props.labels[0]}
        </Button>
      </Link>
      {props.len === 2 && (
        <Link to={props.path2}>
          <Button styles={styles2.button_footer2} type="button">
            {props.labels[1]}
          </Button>
        </Link>
      )}
    </div>
  );
};

export default Footer;
