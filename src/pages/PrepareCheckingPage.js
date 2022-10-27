import React, { useContext } from "react";

import HomeButtonHeader from "../components/UI/HomeButtonHeader";
import PrepareCheckingContentsList from "../components/PrepareChecking/PrepareCheckingContentsList";
import Button from "../components/UI/Button";
import VerseContext from "../store/verses-context";
import PrepareCheckingFooter from "../components/PrepareChecking/PrepareCheckingFooter";

import styles from "./PrepareCheckingPage.module.css"

const PrepareCheckingPage = () => {
  const verseCtx = useContext(VerseContext);

  /************************* test code *************************/
  const showHeadHandler = () => {
    console.log(verseCtx.checkingInfoRequest.headList);
    console.log(verseCtx.checkingInfoRequest.checkingType);
    console.log(verseCtx.checkingInfoRequest.orderType)
    console.log(verseCtx.checkingInfoRequest.verseType)
    console.log("장절 : " + verseCtx.checkingInfoRequest.count.chapterNums
    + " / 내용 : " + verseCtx.checkingInfoRequest.count.contentsNums);
    console.log("체급별일 경우 {");
    console.log("선택된 체급은?? : " + verseCtx.checkingInfoRequest.weight.weightType)
     console.log("\t" + verseCtx.checkingInfoRequest.weight.in73ChapterNums);
     console.log("\t" + verseCtx.checkingInfoRequest.weight.in73ContentsNums);
     console.log("\t" + verseCtx.checkingInfoRequest.weight.out73ChapterNums);
     console.log("\t" + verseCtx.checkingInfoRequest.weight.out73ContentsNums);
     console.log("}");
  }; 
  /************************************************************/

  return (
    <>
      <HomeButtonHeader label={"뒤로가기"} path={"/menu"} />
      <div className={styles.labelArea}>
        <label className={styles.headLabel}>
          점검할 총 구절 수 : {verseCtx.checkingProcessInfo.numberOfVerse.total}
        </label>
      </div>
      <PrepareCheckingContentsList />

      {/* Test code */}
      <Button type="button" onClick={showHeadHandler}>
        show head
      </Button>
      {/***************/}
      
      <h3>&nbsp;</h3>
      <PrepareCheckingFooter
        len={1}
        labels={["암송점검 시작"]}
        links={["CheckingPage"]}
        path1={"checking"}
      />
    </>
  );
};

export default PrepareCheckingPage;
