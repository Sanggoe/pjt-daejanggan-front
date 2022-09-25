import React, { useState } from "react";

import TypeContent from "./TypeContent";

import styles from "./TypeContentsList.module.css";

const TypeContentsList = (props) => {
  const [select, setToggle] = useState('');

  const onSelectHandler = (selected) => {
    console.log(selected);
    setToggle(selected);
  };

  return (
    <div className={styles.contents}>
      {props.types.map((type) => (
        <TypeContent
          key={type.label}
          label={type.label}
          onSelect={onSelectHandler}
          select={select}
        />
      ))}
    </div>
  );
};

export default TypeContentsList;
