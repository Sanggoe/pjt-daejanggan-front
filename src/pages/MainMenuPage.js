import React, { useState } from "react";

import TopicContentsList from "../components/Menu/TopicContentsList";
import TypeContentsList from "../components/Menu/TypeContentsList";
import AchievementContentsList from "../components/Menu/AchievementContentsList";

import Footer from "../components/UI/Footer";
import MenuHeader from "../components/Menu/MenuHeader";
import MenuNav from "../components/Menu/MenuNav";

const MainMenuPage = (props) => {
  const [contents, setContents] = useState("Menu1");

  const changeContents = (menu) => {
    setContents(menu);
  };

  return (
    <div>
      <MenuHeader pageLink={props.pageLink} />
      <MenuNav contentsSelect={changeContents} />
      {contents === "Menu1" && (
        <>
          <TopicContentsList topics={props.topics} verses={props.verses} />
          <h3>&nbsp;</h3>
          <Footer
            len={2}
            labels={["암송하러 가기", "점검하러 가기"]}
            links={["PracticingPage", "PrepareCheckingPage"]}
            pageLink={props.pageLink}
          />
        </>
      )}
      {contents === "Menu2" && (
        <>
          <TypeContentsList types={props.types} />
          <Footer
            len={1}
            labels={["보러 가기"]}
            links={["StatisticsPage"]}
            pageLink={props.pageLink}
          />
        </>
      )}
      {contents === "Menu3" && (
        <>
          <AchievementContentsList />
        </>
      )}
    </div>
  );
};

export default MainMenuPage;
