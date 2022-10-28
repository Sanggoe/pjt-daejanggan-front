import React, { useContext, useState } from "react";
import CheckingContents1 from "../components/Checking/CheckingContents1";
import CheckingInfoFooter from "../components/Checking/CheckingInfoFooter";
import CheckingInfoHeader from "../components/Checking/CheckingInfoHeader";
import CheckingFooter from "../components/Checking/CheckingFooter";
import CorrectAnswerContents1 from "../components/Checking/CorrectAnswerContents1";
import CorrectAnswerContents2 from "../components/Checking/CorrectAnswerContents2";

import HomeButtonHeader from "../components/UI/HomeButtonHeader";
import CheckingContents2 from "../components/Checking/CheckingContents2";
import VerseContext from "../store/verses-context";
import axios from "axios";
import authHeader from "../api/auth-header";
import Button from "../components/UI/Button";

const CheckingPage = () => {
  const verseCtx = useContext(VerseContext);
  const API_URL = "http://192.168.5.40:8080/api";

  const [isLast, setIsLast] = useState(false);

  const changeNextVerseHandler = () => {
    verseCtx.setMode("check");

    const resultCurrentVerse = {
      currentVerse: verseCtx.checkingProcessInfo.currentVerse,
      currentScoreInfo: verseCtx.checkingProcessInfo.currentScoreInfo,
    };
    verseCtx.addResultVerse(resultCurrentVerse);
    verseCtx.clearCurrentScoreInfo();

    if (isLast !== true) {
      verseCtx.setCurrentVerse(
        verseCtx.checkingProcessInfo.currentVerse.index + 1
      );
    } else {
      verseCtx.setResultTransformScore()
      verseCtx.setCheckingProcessingState("none");
    }
  };

  const changeJustNextVerseHandler = () => {
    checkingRequestHandler();
    console.log("넘기기~ 뭐 Request에 넘기기 요청 표시하면 무조건 mode result로 반환되도록 하자.")
  };

  const checkingRequestHandler = () => {
    if (verseCtx.checkingProcessInfo.currentVerse.verseType) {
      // 장절
      checkingChapverseRequest();
    } else {
      checkingContentsRequest();
    }
    if (
      verseCtx.checkingProcessInfo.currentVerse.index + 1 ===
      verseCtx.checkingProcessInfo.numberOfVerse.selected
    ) {
      setIsLast(true);
    }
  };

  const checkingChapverseRequest = () => {
    const payload = verseCtx.checkingChapverseRequest;

    axios
      .post(API_URL + "/chapverse-checking", payload, { headers: authHeader() })
      .then((response) => {
        /***********************/
        // console.log("response : " + JSON.stringify(response));
        // console.log("\n" + JSON.stringify(response.data));
        // console.log("\n" + response.status);
        // console.log("\n" + JSON.stringify(response.statusText));

        if (response.status === 200) {
          verseCtx.receiveCheckingChapverseResponse(response);
          return response;
        }
      })
      .catch((err) => {
        /***********************/
        console.log("\n\nerror : " + JSON.stringify(err));
      });
  };

  const checkingContentsRequest = () => {
    const payload = verseCtx.checkingContentsRequest;

    axios
      .post(API_URL + "/contents-checking", payload, { headers: authHeader() })
      .then((response) => {
        /***********************/
        // console.log("response : " + JSON.stringify(response));
        // console.log("\n" + JSON.stringify(response.data));
        // console.log("\n" + response.status);
        // console.log("\n" + JSON.stringify(response.statusText));

        if (response.status === 200) {
          verseCtx.receiveCheckingContentsResponse(response);
          verseCtx.setMode(verseCtx.checkingContentsResponse.mode);

          return response;
        }
      })
      .catch((err) => {
        /***********************/
        alert("prepare 에서 오류! 로그아웃 후 다시 이용해주세요.");
        console.log("\n\nerror : " + JSON.stringify(err));
      });
  };

  const showCurrentVerseHandler = () => {
    console.log(verseCtx.checkingProcessInfo.currentVerse);
    console.log(verseCtx.checkingProcessInfo.currentScoreInfo);
    console.log(verseCtx.checkingProcessInfo.resultVerses);
    console.log(verseCtx.practiceRequest);
    console.log(verseCtx.practiceResponse);
  };

  return (
    <>
      <HomeButtonHeader label={"점검중단"} path={"/menu"} />
      {/* Test code */}
      <Button type="button" onClick={showCurrentVerseHandler}>
        show head
      </Button>
      {/***************/}
      <CheckingInfoHeader />
      {verseCtx.checkingProcessInfo.mode === "check" &&
        verseCtx.checkingProcessInfo.currentVerse.verseType === "장절" && (
          <CheckingContents1 />
        )}
      {(verseCtx.checkingProcessInfo.mode === "check") === true &&
        verseCtx.checkingProcessInfo.currentVerse.verseType === "내용" && (
          <CheckingContents2 />
        )}
      {(verseCtx.checkingProcessInfo.mode === "check") === true && (
        <CheckingFooter
          len={2}
          labels={["채점 하기", "넘기기"]}
          onClick={checkingRequestHandler}
          onClick2={changeJustNextVerseHandler}
        />
      )}

      {verseCtx.checkingProcessInfo.mode === "result" &&
        verseCtx.checkingProcessInfo.currentVerse.verseType === "장절" && (
          <CorrectAnswerContents1 />
        )}
      {verseCtx.checkingProcessInfo.mode === "result" &&
        verseCtx.checkingProcessInfo.currentVerse.verseType === "내용" && (
          <CorrectAnswerContents2 />
        )}
      {<CheckingInfoFooter type={1} />}

      <h3>&nbsp;</h3>
      {verseCtx.checkingProcessInfo.mode === "result" && (
        <CheckingFooter
          len={1}
          labels={["다음 구절"]}
          onClick={changeNextVerseHandler}
        />
      )}
      {verseCtx.checkingProcessInfo.mode === "result" && isLast === true && (
        <CheckingFooter
          mode={true}
          label={"결과 보기"}
          path={"/result"}
          onClick={changeNextVerseHandler}
        />
      )}
    </>
  );
};

export default CheckingPage;
