import React from "react";
import Button from "../UI/Button";

import styles from "./AttendanceContents.module.css";

const AttendanceDays = () => {
  const days = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <>
      <div className={styles.example_area}>
        <Button styles={styles.button_daily_none}></Button>
        <Button styles={styles.button_daily_checked}></Button>
        <Button styles={styles.button_daily_checked2}></Button>
        <Button styles={styles.button_daily_checked3}></Button>
        <Button styles={styles.button_daily_checked4}></Button>
      </div>

      <div className={styles.daily_area}>
        <label className={styles.label_month}></label>
        {days.map((day) => (
          <label key={day} className={styles.label_day}>
            {day}
          </label>
        ))}
      </div>
    </>
  );
};

export default AttendanceDays;
