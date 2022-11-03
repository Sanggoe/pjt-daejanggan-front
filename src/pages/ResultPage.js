import axios from "axios";
import React, { useContext, useEffect } from "react";
import ResultContentsList from "../components/Result/ResultContentsList";
import ResultFooter from "../components/Result/ResultFooter";
import ResultHeader from "../components/Result/ResultHeader";
import Button from "../components/UI/Button";

import HomeButtonHeader from "../components/UI/HomeButtonHeader";
import VerseContext from "../store/verses-context";
import authHeader from "../api/auth-header";

const ResultPage = () => {
  const verseCtx = useContext(VerseContext);
  const API_URL = "http://192.168.5.40:8080/api/result";
  
  useEffect(() => {
    verseCtx.getChapverseList();
  }, [])

  /************************* test code *************************/
  const showHeadHandler = () => {
    console.log(verseCtx.saveCheckingResult.check_chapverses) 
  }; 
  /****/

  const onClickHandler = () => {
    verseCtx.filterPracticVerse();
    saveCheckingResultRequest();
  }
  
  const saveCheckingResultRequest = () => {
    const payload = verseCtx.saveCheckingResult;

    axios
      .post(API_URL + "/save-check-result", payload, { headers: authHeader() })
      .then((response) => {
        /***********************/
        //console.log("response : " + JSON.stringify(response));
        // console.log("\n" + JSON.stringify(response.data));
        // console.log("\n" + response.status);
        // console.log("\n" + JSON.stringify(response.statusText));

        if (response.status === 200) {
          console.log("점검 결과 저장!")
          return response;
        }
      })
      .catch((err) => {
        /***********************/
        alert("ResultPage 에서 오류! 로그아웃 후 다시 이용해주세요.");
        console.log("\nerror : " + JSON.stringify(err));
      });
  };

  return (
    <>
      <HomeButtonHeader label={"점검중단"} path={"/menu"} />
      <ResultHeader />
      <ResultContentsList verseCtx={verseCtx} />

      {/* Test code */}
      <Button type="button" onClick={showHeadHandler}>
        show head
      </Button>
      {/***************/}

      <ResultFooter
        label={"점검한 말씀 보기"}
        path={"/practicing"}
        onClickHandler={onClickHandler}
      />
      <h3>&nbsp;</h3>
    </>
  );
};

export default ResultPage;