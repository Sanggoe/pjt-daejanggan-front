import React, { useState } from "react";

const TopicSubContent = (props) => {
  const [check, setCheck] = useState(false);

  const onClickHandler = () => {
    setCheck(!check);
  };

  const onChangeHandler = (e) => {
    console.log(e.target)
  }

  return (
    <div>
      <span onClick={onClickHandler}>
        <input type="checkbox" checked={check} onChange={onChangeHandler}></input>
        <label>{props.label}</label>
      </span>
    </div>
  );
};

export default TopicSubContent;
