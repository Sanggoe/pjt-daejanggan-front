import React from "react";

import HomeButtonHeader from "../components/UI/HomeButtonHeader";
import AttendanceContents from "../components/Statistics/AttendanceContents";
import AttendanceDays from "../components/Statistics/AttendanceDays";

const StatisticsPage = () => {
  return (
    <>
      <HomeButtonHeader label={"뒤로가기"} path={"/menu"} />
      <AttendanceDays />
      <AttendanceContents />
    </>
  );
};

export default StatisticsPage;
