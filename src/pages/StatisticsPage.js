import React from "react";

import comming_soon from "../asserts/images/comming_soon.png";

import HomeButtonHeader from "../components/UI/HomeButtonHeader";
import AttendanceContents from "../components/Statistics/AttendanceContents";
import AttendanceDays from "../components/Statistics/AttendanceDays";

import styles from "./StatisticsPage.module.css"

const StatisticsPage = () => {
  return (
    <>
      <HomeButtonHeader label={"뒤로가기"} path={"/menu"} />
      <div className={styles.commingSoonArea}>
        <img
          src={comming_soon}
          className={styles.img_area}
          alt={"임시이미지"}
        />
      </div>
      <AttendanceDays />
      <AttendanceContents />
    </>
  );
};

export default StatisticsPage;
