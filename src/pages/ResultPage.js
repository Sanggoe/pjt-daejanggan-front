import React, { useContext, useEffect } from "react";
import ResultContentsList from "../components/Result/ResultContentsList";
import ResultFooter from "../components/Result/ResultFooter";
import ResultHeader from "../components/Result/ResultHeader";

import HomeButtonHeader from "../components/UI/HomeButtonHeader";
import VerseContext from "../store/verses-context";

const ResultPage = () => {
  const verseCtx = useContext(VerseContext);

  useEffect(() => {
    console.log(verseCtx.checkingProcessInfo.indexList)
  }, [verseCtx.checkingProcessInfo.indexList])

  return (
    <>
      <HomeButtonHeader label={"점검중단"} path={"/menu"} />
      <ResultHeader />
      <ResultContentsList verseCtx={verseCtx}/>
      <ResultFooter label={"점검한 말씀 보기"} path={"/practicing"} onFilterHandler={verseCtx.filterPracticVerse}/>
      <h3>&nbsp;</h3>
    </>
  );
};

export default ResultPage;
