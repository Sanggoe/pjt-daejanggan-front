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

const CheckingPage = () => {
  const verseCtx = useContext(VerseContext);
  const API_URL = "http://192.168.5.40:8080/api";

  const [checkOrResult, setCheckOrResult] = useState(true);
  const [isLast, setIsLast] = useState(false);

  const changeNextVerseHandler = () => {
    setCheckOrResult(!checkOrResult);
    verseCtx.clearCurrentVerse();
    verseCtx.setCurrentVerse(
      verseCtx.checkingProcessInfo.currentVerse.index + 1
    );
  };

  const changeJustNextVerseHandler = () => {
    if (
      verseCtx.checkingProcessInfo.currentVerse.index + 1 ===
      verseCtx.checkingProcessInfo.numberOfVerse.selected
      ) {
        setIsLast(true);
      }
      setCheckOrResult(!checkOrResult);
  }

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

  const checkingChapverseRequest = async () => {
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
          setCheckOrResult(!checkOrResult);
          return response;
        }
      })
      .catch((err) => {
        /***********************/
        console.log("\n\nerror : " + JSON.stringify(err));
      });
  };

  const checkingContentsRequest = async () => {
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
          setCheckOrResult(!checkOrResult);
          return response;
        }
      })
      .catch((err) => {
        /***********************/
        alert("prepare 에서 오류! 로그아웃 후 다시 이용해주세요.");
        console.log("\n\nerror : " + JSON.stringify(err));
      });
  };

  return (
    <>
      <HomeButtonHeader label={"점검중단"} path={"/menu"} />
      <CheckingInfoHeader />
      {checkOrResult === true &&
        /*장절*/ verseCtx.checkingProcessInfo.currentVerse.verseType === 1 && (
          <CheckingContents1 />
        )}
      {checkOrResult === true &&
        /*내용*/ verseCtx.checkingProcessInfo.currentVerse.verseType === 0 && (
          <CheckingContents2 />
        )}
      {checkOrResult === true && (
        <CheckingFooter
          len={2}
          labels={["채점 하기", "넘기기"]}
          onClick={checkingRequestHandler}
          onClick2={changeJustNextVerseHandler}
        />
      )}

      {!checkOrResult &&
        verseCtx.checkingProcessInfo.currentVerse.verseType === 1 && (
          <CorrectAnswerContents1 />
        )}
      {!checkOrResult &&
        verseCtx.checkingProcessInfo.currentVerse.verseType === 0 && (
          <CorrectAnswerContents2 />
        )}
      {<CheckingInfoFooter type={1} />}

      <h3>&nbsp;</h3>
      {!checkOrResult && (
        <CheckingFooter
          len={1}
          labels={["다음 구절"]}
          onClick={changeNextVerseHandler}
        />
      )}
      {!checkOrResult && isLast === true && (
        <CheckingFooter mode={true} label={"결과 보기"} path={"/result"} />
      )}
    </>
  );
};

export default CheckingPage;
