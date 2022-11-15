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
import CheckingContentsHint from "../components/Checking/CheckingContentsHint";
import CorrectMyLastAnswerContents from "../components/Checking/CorrectMyLastAnswerContents";

const CheckingPage = () => {
  const verseCtx = useContext(VerseContext);
  const API_URL = "/api/verse";

  const [isLast, setIsLast] = useState(false);
  const [justNext, setJustNext] = useState(false);

  const changeNextVerseHandler = () => {
    verseCtx.setMode("check");

    const resultCurrentVerse = {
      currentVerse: verseCtx.checkingProcessInfo.currentVerse,
      currentScoreInfo: verseCtx.checkingProcessInfo.currentScoreInfo,
    };
    verseCtx.addResultVerse(resultCurrentVerse);
    verseCtx.clearCurrentScoreInfo();
    verseCtx.checkingProcessInfo.currentVerse.verseType === "장절"
      ? verseCtx.clearChapverseInput()
      : verseCtx.clearContentsInput();
    verseCtx.clearHintIndexes();
    verseCtx.clearVerifiedIndexes();

    if (isLast !== true) {
      verseCtx.setCurrentVerse(
        verseCtx.checkingProcessInfo.currentVerse.index + 1
      );
    } else {
      verseCtx.setResultTransformScore();
      verseCtx.setCheckingProcessingState("result");
    }
  };

  const changeJustNextVerseHandler = () => {
    if (verseCtx.checkingProcessInfo.currentVerse.verseType === "장절") {
      // 장절
      // console.log("장절 Request!");
      checkingChapverseRequest();
    } else {
      // console.log("내용 Request!");
      checkingContentsJustNextRequest();
    }
    if (
      verseCtx.checkingProcessInfo.currentVerse.index + 1 ===
      verseCtx.checkingProcessInfo.numberOfVerse.selected
    ) {
      setIsLast(true);
    }
  };

  const checkingRequestHandler = () => {
    if (verseCtx.checkingProcessInfo.currentVerse.verseType === "장절") {
      // 장절
      // console.log("장절 Request!");
      checkingChapverseRequest();
    } else {
      // console.log("내용 Request!");
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
      .post(API_URL + "/checking-chapverse", payload, { headers: authHeader() })
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
        alert("서버 오류 발생, 로그아웃 후 다시 이용해주세요.")
        console.log("\n\nerror : " + JSON.stringify(err));
      });
  };

  const checkingContentsRequest = () => {
    const payload = verseCtx.checkingContentsRequest;

    axios
      .post(API_URL + "/checking-contents", payload, { headers: authHeader() })
      .then((response) => {
        /***********************/
        // console.log("response : " + JSON.stringify(response));
        // console.log("\n" + JSON.stringify(response.data));
        // console.log("\n" + response.status);
        // console.log("\n" + JSON.stringify(response.statusText));

        if (response.status === 200) {
          verseCtx.receiveCheckingContentsResponse(response);
          return response;
        }
      })
      .catch((err) => {
        /***********************/
        alert("서버 오류 발생, 로그아웃 후 다시 이용해주세요.")
        console.log("\n\nerror : " + JSON.stringify(err));
      });
  };

  const checkingContentsJustNextRequest = () => {
    const payload = verseCtx.checkingContentsRequest;
    payload.currentMinus = 9;

    axios
      .post(API_URL + "/checking-contents", payload, { headers: authHeader() })
      .then((response) => {
        /***********************/
        // console.log("response : " + JSON.stringify(response));
        // console.log("\n" + JSON.stringify(response.data));
        // console.log("\n" + response.status);
        // console.log("\n" + JSON.stringify(response.statusText));

        if (response.status === 200) {
          verseCtx.receiveCheckingContentsResponse(response);
          return response;
        }
      })
      .catch((err) => {
        /***********************/
        alert("서버 오류 발생, 로그아웃 후 다시 이용해주세요.")
        console.log("\n\nerror : " + JSON.stringify(err));
      });
  };

  const hintRequest = () => {
    const payload = verseCtx.checkingContentsRequest;

    axios
      .post(API_URL + "/checking-hint", payload, { headers: authHeader() })
      .then((response) => {
        /***********************/
        // console.log("response : " + JSON.stringify(response));
        // console.log("\n" + JSON.stringify(response.data));
        // console.log("\n" + response.status);
        // console.log("\n" + JSON.stringify(response.statusText));

        if (response.status === 200) {
          verseCtx.receiveHintResponse(response);

          if (
            verseCtx.checkingProcessInfo.currentVerse.index + 1 ===
            verseCtx.checkingProcessInfo.numberOfVerse.selected
          ) {
            setIsLast(true);
          }
          return response;
        }
      })
      .catch((err) => {
        /***********************/
        alert("서버 오류 발생, 로그아웃 후 다시 이용해주세요.")
        console.log("\n\nerror : " + JSON.stringify(err));
      });
  };

  // const showCurrentVerseHandler = () => {
    // console.log(verseCtx.checkingContentsRequest);
    // console.log(verseCtx.checkingProcessInfo.currentInputResult);
    // console.log(verseCtx.checkingProcessInfo.currentCorrectResult);
    // console.log(verseCtx.checkingProcessInfo.currentVerse);
    // console.log(verseCtx.checkingProcessInfo.currentContents);
    // console.log(verseCtx.checkingProcessInfo.currentScoreInfo);
    // console.log(verseCtx.checkingContentsResponse.hintIndexes); // 처음엔 클릭 금지
    // console.log(verseCtx.checkingProcessInfo.resultVerses);
    // console.log(verseCtx.practiceRequest);
    // console.log(verseCtx.practiceResponse);
  // };

  return (
    <>
      <HomeButtonHeader label={"점검중단"} path={"/menu"} />
      {/* Test code */}
      {/* <Button type="button" onClick={showCurrentVerseHandler}>
        {"헤드출력"}
      </Button> */}
      {/***************/}
      <CheckingInfoHeader />
      {verseCtx.checkingProcessInfo.mode === "check" &&
        verseCtx.checkingProcessInfo.currentVerse.verseType === "장절" && (
          <CheckingContents1 />
        )}
      {verseCtx.checkingProcessInfo.mode === "check" &&
        verseCtx.checkingProcessInfo.currentVerse.verseType === "내용" && (
          <CheckingContents2 />
        )}
      {verseCtx.checkingProcessInfo.currentScoreInfo.currentHint !== 0 &&
        verseCtx.checkingProcessInfo.mode === "check" &&
        verseCtx.checkingProcessInfo.currentVerse.verseType === "내용" && (
          <CheckingContentsHint />
        )}
      {verseCtx.checkingProcessInfo.mode === "check" && (
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
          <>
            <CorrectAnswerContents2 />
            <CorrectMyLastAnswerContents />
          </>
        )}
      {<CheckingInfoFooter type={1} hintRequest={hintRequest} />}

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
