import React from "react";
import CheckingContents from "../components/Checking/CheckingContents";
import CheckingInfoFooter from "../components/Checking/CheckingInfoFooter";
import CheckingInfoHeader from "../components/Checking/CheckingInfoHeader";

import Footer from "../components/UI/Footer";
import HomeButtonHeader from "../components/UI/HomeButtonHeader";

const CheckingPage = (props) => {

  return (
    <>
      <HomeButtonHeader label={"점검중단"} pageLink={props.pageLink} />
      <CheckingInfoHeader type={1} label={'장절'} order={1} total={10}/>
      <CheckingContents />
      <CheckingInfoFooter type={1}/>
      <Footer
        len={2}
        labels={["채점 하기", "넘기기"]}
        links={["PracticingPage", "PrepareCheckingPage"]}
        pageLink={props.pageLink}
      />
    </>
  );
};

export default CheckingPage;