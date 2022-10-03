import React from "react";

import HomeButtonHeader from "../components/UI/HomeButtonHeader";
import PrepareCheckingContentsList from "../components/PrepareChecking/PrepareCheckingContentsList";
import Footer from "../components/UI/Footer";

const PrepareCheckingPage = (props) => {

  return (
    <>
      <HomeButtonHeader label={'뒤로가기'} pageLink={props.pageLink} />
      <PrepareCheckingContentsList len={94}/>
      <h3>&nbsp;</h3>
      <Footer
        len={1}
        labels={["암송점검 시작"]}
        links={["CheckingPage"]}
        pageLink={props.pageLink}
      />
    </>
  );
};

export default PrepareCheckingPage;
