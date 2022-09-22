import React, { useState } from "react";
import Button from "./Button";

import classes from "./ButtonItem.module.css";
import ButtonSubItem from "./ButtonSubItem";
import styles2 from "../UI/Button.module.css";

const ButtonItem = (props) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <Button
        styles={styles2.button_item}
        type={props.type}
        onClick={props.onClick}
      >
        {props.children}
      </Button>
      {toggle && <Button  type="button">암송</Button>}
    </div>
  );
};

export default ButtonItem;
