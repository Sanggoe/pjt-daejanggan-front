import React, { useContext } from "react";

import styles from "./TopicContentsList.module.css";
import TopicContent from "./TopicContent";
import VerseContext from "../../store/verses-context";
import Button from "../UI/Button";

const TopicContentsList = () => {
  const verseCtx = useContext(VerseContext);
  
  /* test code */
  const showHeadHandler = () => {
    console.log(verseCtx.checkingInfoRequest.headList);
  };
  /************/ 

  return (
    <div className={styles.contents}>
      {verseCtx.verseInfo.map((info) => (
        <TopicContent
          key={info.theme}
          theme={info.theme}
          headList={info.headList}
          onAddHeadList={verseCtx.addHeadList}
          onRemoveHeadList={verseCtx.removeHeadList}
        />
      ))}

      {/* Test code */}
      <Button type="button" onClick={showHeadHandler}>
        show head
      </Button>
      {/***************/}
    </div>
  );
};

export default TopicContentsList;
