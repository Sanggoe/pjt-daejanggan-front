import React, { useState } from "react";

import ManageUsersPage from "./pages/ManageUsersPage";
import MainMenuPage from "./pages/MainMenuPage";
import MyInfoPage from "./pages/MyInfoPage";
import LoginPage from "./pages/LoginPage";
import PracticingPage from "./pages/PracticingPage";
import PrepareCheckingPage from "./pages/PrepareCheckingPage";
import StatisticsPage from "./pages/StatisticsPage";

const verses = [
  {
    label: "LOA",
    subLabel: "그리스도인의 확신",
    titles: [
      "요한일서 5:11~12",
      "요한복음 16:24",
      "고린도전서 10:13",
      "요한일서 1:9",
      "잠언 3:5~6",
    ],
  }
];

const topics = [
  { label: "LOA", subLabel: ["그리스도인의 확신"] },
  { label: "LOC", subLabel: ["그리스도인의 생활지침"] },
  {
    label: "60구절",
    subLabel: [
      "A - 새로운 삶",
      "B - 그리스도를 전파함",
      "C - 하나님을 의뢰함",
      "D - 그리스도의 자격",
      "E - 그리스도를 닮아감",
    ],
  },
  {
    label: "DEP",
    subLabel: [
      "1. 구원의 확신",
      "2. Quiet Time",
      "3. 말씀",
      "4. 기도",
      "5. 교제",
      "6. 증거",
      "7. 그리스도의 주재권",
      "8. 세계 비전",
    ],
  },
  {
    label: "180",
    subLabel: [
      "1. 하나님을 알아감",
      "2. 사랑 안에서 자라감",
      "3. 믿음 안에서 자라감",
      "4. 승리 안에서 ",
      "5. 그리스도를 증거함",
    ],
  },
  {
    label: "OYO",
    subLabel: ["장래에 대한 약속", "기도에 대한 약속"],
  },
];

const statisticTypes = [
  { label: "전체 통계" },
  { label: "기간별 통계" },
  { label: "목록별 통계" },
  { label: "구절별 통계" },
];

function App() {
  const [pageLink, setPageLink] = useState("LoginPage");
  const [selected, setSelected] = useState([]);

  const changePageLink = (page) => {
    setPageLink(page);
  };

  const changeSelected = () => {
    setSelected([]);
  };

  return (
    <div>
      {pageLink === "LoginPage" && <LoginPage pageLink={changePageLink} />}
      {pageLink === "MainMenuPage" && (
        <MainMenuPage
          pageLink={changePageLink}
          topicsSelected={changeSelected}
          topics={topics}
          types={statisticTypes}
          verses={verses}
        />
      )}
      {pageLink === "ManageUsersPage" && (
        <ManageUsersPage pageLink={changePageLink} />
      )}
      {pageLink === "MyInfoPage" && <MyInfoPage pageLink={changePageLink} />}
      {pageLink === "PracticingPage" && (
        <PracticingPage pageLink={changePageLink} />
      )}
      {pageLink === "PrepareCheckingPage" && (
        <PrepareCheckingPage pageLink={changePageLink} />
      )}
      {pageLink === "StatisticsPage" && (
        <StatisticsPage pageLink={changePageLink} />
      )}
    </div>
  );
}

export default App;
