import React from "react";
import Button from "../UI/Button";

import styles from "./AttendanceContents.module.css";

const AttendanceContents = () => {
  const dateObj = new Date();
  const year = dateObj.getFullYear();
  const isLeap = (!year % 4 && year % 100) || year % 400;
  const month = dateObj.getMonth();
  const date = dateObj.getDate();
  const monthly_day = [
    31,
    isLeap ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];

  let months = [];
  for (let i = 4; i >= 0; i--) {
    months = [...months, ((month - i) % 12) + 1];
  }
  let dates = []
  for (let i=1; i<180; i++)
    dates.push(i);
// parseInt((monthly_day[months[0] - 1] +
// monthly_day[months[1] - 1] +
// monthly_day[months[2] - 1] +
// monthly_day[months[3] - 1] +
// monthly_day[months[4] - 1])/7)
  
  return (
    <>
      <div className={styles.daily_area}>
        <label className={styles.label_month}>{months[4] + "월"}</label>
        <Button styles={styles.button_daily_checked}></Button>
        <Button styles={styles.button_daily_checked2}></Button>
        <Button styles={styles.button_daily_checked}></Button>
        <Button styles={styles.button_daily_none}></Button>
        <Button styles={styles.button_daily_none}></Button>
        <Button styles={styles.button_daily_checked3}></Button>
        <Button styles={styles.button_daily_none}></Button>
      </div>
      <div className={styles.daily_area}>
        <label className={styles.label_month}>{}</label>
        <Button styles={styles.button_daily_checked}></Button>
        <Button styles={styles.button_daily_none}></Button>
        <Button styles={styles.button_daily_checked}></Button>
        <Button styles={styles.button_daily_none}></Button>
        <Button styles={styles.button_daily_checked4}></Button>
        <Button styles={styles.button_daily_checked3}></Button>
        <Button styles={styles.button_daily_none}></Button>
      </div>
      <div className={styles.daily_area}>
        <label className={styles.label_month}>{months[3] + "월"}</label>
        <Button styles={styles.button_daily_checked2}>{}</Button>
        <Button styles={styles.button_daily_checked}>{}</Button>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_checked2}>{}</Button>
        <Button styles={styles.button_daily_none}>{}</Button>
      </div>
      <div className={styles.daily_area}>
        <label className={styles.label_month}>{""}</label>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_checked}>{}</Button>
        <Button styles={styles.button_daily_checked2}>{}</Button>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_checked}>{}</Button>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_checked}>{}</Button>
      </div>
      <div className={styles.daily_area}>
        <label className={styles.label_month}>{""}</label>
        <Button styles={styles.button_daily_checked}>{}</Button>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_checked3}>{}</Button>
        <Button styles={styles.button_daily_checked}>{}</Button>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_none}>{}</Button>
      </div>
      <div className={styles.daily_area}>
        <label className={styles.label_month}>{""}</label>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_checked4}>{}</Button>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_checked}>{}</Button>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_none}>{}</Button>
      </div>
      <div className={styles.daily_area}>
        <label className={styles.label_month}>{""}</label>
        <Button styles={styles.button_daily_checked4}>{}</Button>
        <Button styles={styles.button_daily_checked2}>{}</Button>
        <Button styles={styles.button_daily_checked}>{}</Button>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_checked}>{}</Button>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_checked3}>{}</Button>
      </div>
      <div className={styles.daily_area}>
        <label className={styles.label_month}>{months[2] + "월"}</label>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_checked2}>{}</Button>
        <Button styles={styles.button_daily_none}>{}</Button>
      </div>
      <div className={styles.daily_area}>
        <label className={styles.label_month}>{""}</label>
        <Button styles={styles.button_daily_checked3}>{}</Button>
        <Button styles={styles.button_daily_checked}>{}</Button>
        <Button styles={styles.button_daily_checked2}>{}</Button>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_checked}>{}</Button>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_checked3}>{}</Button>
      </div>
      <div className={styles.daily_area}>
        <label className={styles.label_month}>{""}</label>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_checked}>{}</Button>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_checked}>{}</Button>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_checked}>{}</Button>
      </div>
      <div className={styles.daily_area}>
        <label className={styles.label_month}>{""}</label>
        <Button styles={styles.button_daily_checked}>{}</Button>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_checked}>{}</Button>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_checked4}>{}</Button>
      </div>
      <div className={styles.daily_area}>
        <label className={styles.label_month}>{months[1] + "월"}</label>
        <Button styles={styles.button_daily_checked3}></Button>
        <Button styles={styles.button_daily_checked}></Button>
        <Button styles={styles.button_daily_checked2}></Button>
        <Button styles={styles.button_daily_none}></Button>
        <Button styles={styles.button_daily_checked3}></Button>
        <Button styles={styles.button_daily_checked4}></Button>
        <Button styles={styles.button_daily_none}></Button>
      </div>
      <div className={styles.daily_area}>
        <label className={styles.label_month}>{""}</label>
        <Button styles={styles.button_daily_none}></Button>
        <Button styles={styles.button_daily_checked2}></Button>
        <Button styles={styles.button_daily_checked}></Button>
        <Button styles={styles.button_daily_none}></Button>
        <Button styles={styles.button_daily_checked3}></Button>
        <Button styles={styles.button_daily_none}></Button>
        <Button styles={styles.button_daily_none}></Button>
      </div>
      <div className={styles.daily_area}>
        <label className={styles.label_month}>{""}</label>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_checked4}>{}</Button>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_checked}>{}</Button>
        <Button styles={styles.button_daily_checked3}>{}</Button>
      </div>
      <div className={styles.daily_area}>
        <label className={styles.label_month}>{""}</label>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_checked}>{}</Button>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_checked}>{}</Button>
      </div>
      <div className={styles.daily_area}>
        <label className={styles.label_month}>{"7월"}</label>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_checked3}>{}</Button>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_checked}>{}</Button>
      </div>
      <div className={styles.daily_area}>
        <label className={styles.label_month}>{""}</label>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_checked}>{}</Button>
        <Button styles={styles.button_daily_checked3}>{}</Button>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_checked4}>{}</Button>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_checked2}>{}</Button>
      </div>
      <div className={styles.daily_area}>
        <label className={styles.label_month}>{""}</label>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_checked}>{}</Button>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_none}>{}</Button>
      </div>
      <div className={styles.daily_area}>
        <label className={styles.label_month}>{""}</label>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_checked4}>{}</Button>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_checked}>{}</Button>
        <Button styles={styles.button_daily_checked3}>{}</Button>
      </div>
      <div className={styles.daily_area}>
        <label className={styles.label_month}>{""}</label>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_none}>{}</Button>
        <Button styles={styles.button_daily_none}>{}</Button>
      </div>

      {/* {dates.map((value, i) => (
        <div key={i} className={styles.daily_area}>
          <label className={styles.label_month}>
            {(i+1) % month[] value +"월"}
          </label>
          <Button styles={styles.button_daily_none}></Button>
          <Button styles={styles.button_daily_none}></Button>
          <Button styles={styles.button_daily_none}></Button>
          <Button styles={styles.button_daily_none}></Button>
          <Button styles={styles.button_daily_none}></Button>
          <Button styles={styles.button_daily_none}></Button>
          <Button styles={styles.button_daily_none}></Button>
        </div>
      ))} */}
    </>
  );
};

export default AttendanceContents;
