import React, { useState } from "react";

import Button from "../UI/Button";
import styles2 from "../UI/Button.module.css";
import TopicSubContentsList from "./TopicSubContentsList";

const TopicContent = (props) => {
  const [toggle, setToggle] = useState(false);

  const onClickHandler = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <Button
        styles={!toggle ? styles2.button_item : styles2.button_itemSelected}
        type="button"
        onClick={onClickHandler}
      >
        {props.label}
      </Button>
      {toggle && <TopicSubContentsList subLabels={props.subLabels}/>}
    </div>
  );
};

export default TopicContent;