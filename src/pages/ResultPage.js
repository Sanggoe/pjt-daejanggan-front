import React, { useState } from "react";
import CheckingContents1 from "../components/Checking/CheckingContents1";
import CheckingInfoFooter from "../components/Checking/CheckingInfoFooter";
import CheckingInfoHeader from "../components/Checking/CheckingInfoHeader";
import CheckingFooter from "../components/Checking/CheckingFooter";
import CorrectAnswerContents1 from "../components/Checking/CorrectAnswerContents1";
import CorrectAnswerContents2 from "../components/Checking/CorrectAnswerContents2";

import HomeButtonHeader from "../components/UI/HomeButtonHeader";
import CheckingContents2 from "../components/Checking/CheckingContents2";

const ResultPage = () => {
  const [isCheckable, setIsCheckable] = useState(true);

  const isCheckableHandler = () => {
    setIsCheckable(!isCheckable);
  }

  return (
    <>
      <HomeButtonHeader label={"점검중단"} path={"/menu"} />
      <CheckingInfoHeader type={1} label={'장절'} order={1} total={10}/>
      {isCheckable && <CheckingContents1 />}
      {isCheckable && <CheckingContents2 />}
      {!isCheckable && <CorrectAnswerContents1 />}
      {!isCheckable && <CorrectAnswerContents2 />}
      {isCheckable && <CheckingInfoFooter type={1}/>}
      {isCheckable && <CheckingFooter
        len={2}
        labels={["채점 하기", "넘기기"]}
        path={"/menu"}
        onClick={isCheckableHandler}
      />}
      <h3>&nbsp;</h3>
      {!isCheckable && <CheckingFooter
        len={1}
        labels={["다음 구절"]}
        path={"/menu"}
        onClick={isCheckableHandler}
      />}
    </>
  );
};

export default ResultPage;