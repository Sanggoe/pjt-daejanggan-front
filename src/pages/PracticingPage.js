import React, { useContext } from "react";
import PracticingFooter from "../components/PracticeChecking/PracticingFooter";
import PracticeContentsList from "../components/PracticeChecking/PracticeContentsList";
import VerseContext from "../store/verses-context";

const PracticingPage = () => {
  const verseCtx = useContext(VerseContext);

  return (
    <>
      <PracticeContentsList verses={verseCtx.practiceResponse.verse} />
      <h3>&nbsp;</h3>
      <PracticingFooter len={1} label={["메뉴 화면으로"]} path={"/menu"} />
    </>
  );
};

export default PracticingPage;
