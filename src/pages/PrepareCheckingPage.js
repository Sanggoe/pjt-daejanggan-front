import React, { useContext, useEffect } from "react";

import HomeButtonHeader from "../components/UI/HomeButtonHeader";
import PrepareCheckingContentsList from "../components/PrepareChecking/PrepareCheckingContentsList";
import Button from "../components/UI/Button";
import VerseContext from "../store/verses-context";
import PrepareCheckingFooter from "../components/PrepareChecking/PrepareCheckingFooter";

const PrepareCheckingPage = () => {
  const verseCtx = useContext(VerseContext);

  /************************* test code *************************/
  const showHeadHandler = () => {
    console.log(verseCtx.checkingInfoRequest.headList);
    console.log(verseCtx.checkingInfoRequest.checkingType);
    console.log("랜덤_0, 순서대로_1 : " + verseCtx.checkingInfoRequest.orderType)
    console.log("내용_0, 장절_1 : " + verseCtx.checkingInfoRequest.verseType)
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

      {/* Test code */}
      <Button type="button" onClick={showHeadHandler}>
        show head
      </Button>
      {/***************/}

      <PrepareCheckingContentsList />
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
