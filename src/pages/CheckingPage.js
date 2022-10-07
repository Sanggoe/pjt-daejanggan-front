import React, { useState } from "react";
import CheckingContents1 from "../components/Checking/CheckingContents1";
import CheckingInfoFooter from "../components/Checking/CheckingInfoFooter";
import CheckingInfoHeader from "../components/Checking/CheckingInfoHeader";
import FooterChecking from "../components/Checking/FooterChecking";
import CorrectAnswerContents1 from "../components/Checking/CorrectAnswerContents1";

import HomeButtonHeader from "../components/UI/HomeButtonHeader";
import CheckingContents2 from "../components/Checking/CheckingContents2";

const CheckingPage = () => {
  const [isCheckable, setIsCheckable] = useState(true);

  const isCheckableHandler = () => {
    setIsCheckable(!isCheckable);
  }

  return (
    <>
      <HomeButtonHeader label={"점검중단"} path={"/menu"} />
      <CheckingInfoHeader type={1} label={'장절'} order={1} total={10}/>
      {/* {isCheckable && <CheckingContents1 />} */}
      {isCheckable && <CheckingContents2 />}
      {!isCheckable && <CorrectAnswerContents1 />}
      {isCheckable && <CheckingInfoFooter type={1}/>}
      {isCheckable && <FooterChecking
        len={2}
        labels={["채점 하기", "넘기기"]}
        path={"/menu"}
        onClick={isCheckableHandler}
      />}
      {!isCheckable && <FooterChecking
        len={1}
        labels={["다음 구절"]}
        path={"/menu"}
        onClick={isCheckableHandler}
      />}
    </>
  );
};

export default CheckingPage;