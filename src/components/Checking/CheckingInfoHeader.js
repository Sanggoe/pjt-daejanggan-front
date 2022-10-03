import React from "react";

import styles from './CheckingInfoHeader.module.css'

const CheckingInfoHeader = (props) => {
    return (
      <div className={styles.header}>
        <div className={styles.type}>
          <label className={styles.label}>{props.label}</label>
        </div>
        <div className={styles.order}>
          <label className={styles.label}>
            {props.order} / {props.total}
          </label>
        </div>
      </div>
    );
}

export default CheckingInfoHeader;