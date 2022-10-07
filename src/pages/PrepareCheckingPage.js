import React, { useContext } from "react";

import HomeButtonHeader from "../components/UI/HomeButtonHeader";
import PrepareCheckingContentsList from "../components/PrepareChecking/PrepareCheckingContentsList";
import Footer from "../components/UI/Footer";
import Button from "../components/UI/Button";
import VerseContext from "../store/verses-context";

const PrepareCheckingPage = () => {
  const verseCtx = useContext(VerseContext);

  /* test code */
  const showHeadHandler = () => {
    console.log(verseCtx.checkingInfo.headList);
  };
  /************/

  return (
    <>
      <HomeButtonHeader label={"뒤로가기"} path={"/menu"} />

      {/* Test code */}
      <Button type="button" onClick={showHeadHandler}>
        show head
      </Button>
      {/***************/}

      <PrepareCheckingContentsList len={400} />
      <h3>&nbsp;</h3>
      <Footer
        len={1}
        labels={["암송점검 시작"]}
        links={["CheckingPage"]}
        path1={"checking"}
      />
    </>
  );
};

export default PrepareCheckingPage;
