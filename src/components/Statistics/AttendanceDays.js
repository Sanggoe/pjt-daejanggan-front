import React from "react";

import styles from "./AttendanceContents.module.css";

const AttendanceDays = () => {
  const days = ["일", "월", "화", "수", "목", "금", "토"];

  return (
      <div className={styles.daily_area}>
        <label className={styles.label_month}></label>
        {days.map((day) => (
          <label key={day} className={styles.label_day}>
            {day}
          </label>
        ))}
      </div>
  );
};

export default AttendanceDays;
