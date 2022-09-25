import React from "react";

import PrepareCheckingContentsList from "../components/PrepareChecking/PrepareCheckingContentsList";
import Footer from "../components/UI/Footer";
import PrepareCheckingHeader from "../components/PrepareChecking/PrepareCheckingHeader";

const PrepareCheckingPage = (props) => {

  return (
    <>
      <PrepareCheckingHeader pageLink={props.pageLink} />
      <PrepareCheckingContentsList len={94}/>
      <Footer
        len={1}
        labels={["암송점검 시작"]}
        links={["MainMenuPage"]}
        pageLink={props.pageLink}
      />
    </>
  );
};

export default PrepareCheckingPage;
