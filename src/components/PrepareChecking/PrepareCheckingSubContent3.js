import React from "react";

import styles from './PrepareCheckingSubContent.module.css'

const PrepareCheckingSubContent3 = (props) => {
    
  return (
    <>
      <p>
        선택된 체급 [ <label className={props.select === '체급별 점검' ? styles.labelSelected : styles.label}>{props.level}</label> ]
      </p>
      
    </>
  );
};

export default PrepareCheckingSubContent3;