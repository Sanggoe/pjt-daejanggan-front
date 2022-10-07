import React, { useState } from "react";

import TypeContent from "./TypeContent";

import styles from "./TypeContentsList.module.css";

const types = [
  { label: "일일 통계" },
  { label: "주별 통계" },
  { label: "월별 통계" },
];

const TypeContentsList = () => {

  const [select, setToggle] = useState('');

  const onSelectHandler = (selected) => {
    setToggle(selected);
  };

  return (
    <div className={styles.contents}>
      {types.map((type) => (
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
