import React from "react";
import ResultContentsList from "../components/Result/ResultContentsList";
import ResultFooter from "../components/Result/ResultFooter";
import ResultHeader from "../components/Result/ResultHeader";

import HomeButtonHeader from "../components/UI/HomeButtonHeader";

const ResultPage = () => {
    return (
    <>
      <HomeButtonHeader label={"점검중단"} path={"/menu"} />
      <ResultHeader />
      <ResultContentsList />
      <ResultFooter
        len={1}
        labels={["점검한 말씀 보기"]}
        path={"/practice"}
        />
        <h3>&nbsp;</h3>
    </>
  );
};

export default ResultPage;