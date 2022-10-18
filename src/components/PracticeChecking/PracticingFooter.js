import React from "react";

import Button from "../UI/Button";

import styles from "../UI/Footer.module.css";
import styles2 from "../UI/Button.module.css";
import { Link } from "react-router-dom";

const PracticingFooter = (props) => {
  return (
    <div className={styles.footer}>
        <Link to={props.path}>
          <Button styles={styles2.button_footer1} type="button">
            {props.label}
          </Button>
        </Link>
    </div>
  );
};

export default PracticingFooter;
