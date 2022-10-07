import React from "react";

import Button from "./Button";

import styles from "./HomeButtonHeader.module.css";
import styles2 from "./Button.module.css";
import { Link } from "react-router-dom";

const HomeButtonHeader = (props) => {

  return (
    <div className={styles.header}>
      <Link to={props.path}>
        <Button styles={styles2.button_home} type="button">
          {props.label}
        </Button>
      </Link>
    </div>
  );
};

export default HomeButtonHeader;
