import React, { useState } from "react";

import TopicContentsList from "../components/Menu/TopicContentsList";
import TypeContentsList from "../components/Menu/TypeContentsList";
import AchievementContentsList from "../components/Menu/AchievementContentsList";

import Footer from "../components/UI/Footer";
import MenuHeader from "../components/Menu/MenuHeader";
import MenuNav from "../components/Menu/MenuNav";

const navLabel = ["암송", "통계", "업적"];

const MainMenuPage = () => {
  const [contents, setContents] = useState(navLabel[0]);

  const changeContents = (menu) => {
    setContents(menu);
  };

  return (
    <>
      <MenuHeader />
      <MenuNav navLabel={navLabel} contentsSelect={changeContents} />
      {contents === navLabel[0] && (
        <>
          <TopicContentsList />
          <h3>&nbsp;</h3>
          <Footer
            len={2}
            labels={["암송하러 가기", "점검하러 가기"]}
            path1={"practicing"}
            path2={"prepareChecking"}
          />
        </>
      )}
      {contents === navLabel[1] && (
        <>
          <TypeContentsList />
          <Footer len={1} labels={["보러 가기"]} path1={"/statistics"} />
        </>
      )}
      {contents === navLabel[2] && (
        <>
          <AchievementContentsList />
        </>
      )}
    </>
  );
};

export default MainMenuPage;
