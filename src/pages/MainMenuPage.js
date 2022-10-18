import React, { useContext, useEffect, useState } from "react";

import TopicContentsList from "../components/Menu/TopicContentsList";
import TypeContentsList from "../components/Menu/TypeContentsList";
import AchievementContentsList from "../components/Menu/AchievementContentsList";

import MenuHeader from "../components/Menu/MenuHeader";
import MenuNav from "../components/Menu/MenuNav";
import MenuFooter2 from "../components/Menu/MenuFooter2";
import MenuFooter1 from "../components/Menu/MenuFooter1";
import VerseContext from "../store/verses-context";

const navLabel = ["암송", "통계", "업적"];

const MainMenuPage = () => {
  const [contents, setContents] = useState(navLabel[0]);
  const verseCtx = useContext(VerseContext);

  // nav 메뉴 바꾸기
  const changeContents = (menu) => {
    setContents(menu);
  };

  // MainMenuPage 렌더링시 headList 초기화
  useEffect(() => {
    verseCtx.clearHeadList();
    verseCtx.clearWeightType();
  }, []);
  
  // nav 메뉴 바꿀 시 headList 초기화
  useEffect(() => {
    verseCtx.clearHeadList();
  }, [contents]);
  
  return (
    <>
      <MenuHeader />
      <MenuNav navLabel={navLabel} contentsSelect={changeContents} />
      {contents === navLabel[0] && (
        <>
          <TopicContentsList />
          <h3>&nbsp;</h3>
          <MenuFooter2
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
          <MenuFooter1 len={1} labels={["보러 가기"]} path1={"/statistics"} />
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
